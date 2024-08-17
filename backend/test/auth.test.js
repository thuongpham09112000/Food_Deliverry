const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('AuthController Tests', () => {
    describe('POST /api/auth/register', () => {
        it('should register a new user', (done) => {
            chai.request(app)
                .post('/api/auth/register')
                .send({
                    username: 'testuser',
                    email: 'testuser@example.com',
                    password: 'testpassword'
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property('message').eql('User registered successfully');
                    done();
                });
        });
    });

    describe('POST /api/auth/login', () => {
        it('should login the user and return a token', (done) => {
            chai.request(app)
                .post('/api/auth/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'testpassword'
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').eql('Login successful');
                    expect(res.body).to.have.property('token');
                    done();
                });
        });

        it('should return error for invalid email', (done) => {
            chai.request(app)
                .post('/api/auth/login')
                .send({
                    email: 'invaliduser@example.com',
                    password: 'testpassword'
                })
                .end((err, res) => {
                    expect(res).to.have.status(401);
                    expect(res.body).to.have.property('message').eql('Email or password is incorrect');
                    done();
                });
        });

        it('should return error for invalid password', (done) => {
            chai.request(app)
                .post('/api/auth/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'wrongpassword'
                })
                .end((err, res) => {
                    expect(res).to.have.status(401);
                    expect(res.body).to.have.property('message').eql('Email or password is incorrect');
                    done();
                });
        });
    });

    describe('GET /api/auth/logout', () => {
        it('should logout the user', (done) => {
            chai.request(app)
                .get('/api/auth/logout')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').eql('Logout successful');
                    done();
                });
        });
    });
});
