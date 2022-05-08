const chai = require("chai");
const expect = chai.expect;
var should = require('chai').should();
chai.use(require("chai-http"));

// url = "http://localhost:3004/"
url = "https://crackedpepper.herokuapp.com/"

//var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNThiM2I5NTY3MzJiMjlmYWIxZGUyZCIsImlhdCI6MTYxNjQyNTkxMywiZXhwIjoxNjE2NTEyMzEzfQ.Z7leZwv4UrDmUEMCNI7ub6sW9gCjbYAbSoy4NZ1jHF8';

var message_404 = "The request has gone through, but no matches were found";
var status_404 = "No Content";

var message_403 = "No token provided.";

var message_badtime1 = "startDate must be less than endDate";
var message_badtime2 = "both startDate and endDate must be selected in the query string\n Otherwise omit both."

////////////////////////////

describe('registration testing: ', function () {
    this.timeout(5000);
    it("valid registration", function (done) {
        chai.request(url)
            .post('auth/register')
            .send({'name': 'moose', 'email': 'moose@gmail.com', 'password': 'leomessi'})
            .end((err, res) => {
                expect(res.body).to.have.property('auth', true);
                expect(res).to.have.status(200);
                done();
            });
    });

    // TODO: look into this when there invalid input
    it(" invalid registration (without password)", function (done) {
        this.timeout(5000);
        chai.request(url)
            .post('auth/register')
            .send({'name': 'moose', 'email': 'moose@gmail.com'})
            .end((err, res) => {
                expect(res).to.have.status(500);
                done();
            });
    });
});

///////////////////////////

var token = '';

describe('login testing: ', function () {
    this.timeout(5000);
    it("valid, authorized login", function (done) {
        chai.request(url)
            .post('auth/login')
            .send({'email': 'moose@gmail.com', 'password': 'leomessi'})
            .end((err, res) => {
                token = res.body.token;
                expect(res.body).to.have.property('auth', true);
                expect(res.body).to.have.property('token');
                expect(res).to.have.status(200);
                done();
            });
    });

    it("invalid password, unauthorized login", function (done) {
        this.timeout(5000);
        chai.request(url)
            .post('auth/login')
            .send({'email': 'moose@gmail.com', 'password': 'leomess'})
            .end((err, res) => {
                expect(res.body).to.have.property('auth', false);
                expect(res.body).to.have.property('token', null);
                expect(res).to.have.status(401);
                done();
            });
    });
});

///////////////////////////

describe('auth testing: ', function () {
    this.timeout(5000);
    it("get user id from valid token", function (done) {
        chai.request(url)
            .get('auth/me')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('name', 'moose');
                expect(res.body).to.have.property('email', 'moose@gmail.com');
                expect(res).to.have.status(200);
                done();
            });
    });

    it("get user id from invalid token", function (done) {
        chai.request(url)
            .get('auth/me')
            .set('x-access-token', token+"llll")
            .end((err, res) => {
                expect(res.body).to.have.property('auth', false);
                expect(res.body).to.have.property('message', "Failed to authenticate token.");
                expect(res).to.have.status(500);
                done();
            });
    });
});

describe('basic GET testing: ', function () {
    this.timeout(5000);
    it("base url with empty parameters", function (done) {
        chai.request(url)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});


////////////////////////

describe('location testing: ', function () {
    this.timeout(5000);
    it("location without token (forbidden)", function (done) {
        chai.request(url)
            .get('disease/?location=China')
            .end((err, res) => {
                expect(res.body).to.have.property('auth', false);
                expect(res.body).to.have.property('message', message_403);
                expect(res).to.have.status(403);
                done();
            });
    });

    it("location with valid token", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?location=China')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'success');
                expect(res).to.have.status(200);
                done();
            });
    });

    it("invalid location with valid token", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?location=Balaalala')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body.status).to.equal(status_404);
                expect(res.body.message).to.equal(message_404);
                expect(res).to.have.status(404);
                done();
            });
    });

    it("location with invalid search", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?location=Balaalala')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body.status).to.equal(status_404);
                expect(res.body.message).to.equal(message_404);
                expect(res).to.have.status(404);
                done();
            });
    });

    // TODO: look into this for 404
    it("invalid location query", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?locccc')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});


/////////////////////////////////

describe('disease-name testing: ', function () {
    this.timeout(5000);
    it("disease without token (forbidden)", function (done) {
        chai.request(url)
            .get('disease/?disease=yes')
            .end((err, res) => {
                expect(res.body).to.have.property('auth', false);
                expect(res.body).to.have.property('message', message_403);
                expect(res).to.have.status(403);
                done();
            });
    });

    it("disease with valid token", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?disease=yes')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'success');
                expect(res).to.have.status(200);
                done();
            });
    });

    it("disease with invalid search", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?disease=ligma')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body.status).to.equal(status_404);
                expect(res.body.message).to.equal(message_404);
                expect(res).to.have.status(404);
                done();
            });
    });

    it("multiple diseases in search, with one invalid", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?disease=yes&disease=nooo')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body.status).to.equal(status_404);
                expect(res.body.message).to.equal(message_404);
                expect(res).to.have.status(404);
                done();
            });
    });

    //TODO: test for 2 valid diseases in a report

});


//////////////////////////

describe('time testing: ', function () {
    this.timeout(5000);
    it("time without token (forbidden)", function (done) {
        chai.request(url)
            .get('disease/?startDate=2020-01-17 11:12:12&endDate=2020-01-17 11:12:12')
            .end((err, res) => {
                expect(res.body).to.have.property('auth', false);
                expect(res.body).to.have.property('message', message_403);
                expect(res).to.have.status(403);
                done();
            });
    });

    it("time with valid token", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get('disease/?startDate=2020-01-17 11:12:12&endDate=2020-01-17 11:12:12')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'success');
                expect(res).to.have.status(200);
                done();
            });
    });

    it("start time greater than end time", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get("disease/?startDate=2020-01-17 11:12:12&endDate=2019-01-17 11:12:12")
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'failure');
                expect(res.body).to.have.property('message', message_badtime1);
                expect(res).to.have.status(400);
                done();
            });
    });

    it("empty end time", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get("disease/?startDate=2019-01-17 11:12:12&endDate=")
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'failure');
                expect(res.body).to.have.property('message', message_badtime2);
                expect(res).to.have.status(400);
                done();
            });
    });

    it("empty start time", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get("disease/?startDate=&endDate=2019-01-17 11:12:12")
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'failure');
                expect(res.body).to.have.property('message', message_badtime2);
                expect(res).to.have.status(400);
                done();
            });
    });

    it("both parameters empty", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get("disease/?startDate=&endDate=")
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', 'failure');
                expect(res.body).to.have.property('message', message_badtime2);
                expect(res).to.have.status(400);
                done();
            });
    });

    it("invalid times", function (done) {
        this.timeout(5000);
        chai.request(url)
            .get("disease/?startDate=1972-01-17 11:12:12&endDate=1972-01-17 11:12:12")
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.body).to.have.property('status', status_404);
                expect(res.body).to.have.property('message', message_404);
                expect(res).to.have.status(404);
                done();
            });
    });
});

////////////////////////////
