const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

// Test 1
describe('Weather API', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.have.status(400);
//                expect(response.body.message).not.to.('fred');
                done();
            })
    });
})

// Test 2
// This test is for checking the correct weather in California for jun19th
describe('Weather API', () => {
    it('should return temperature value for valid input city', function (done) {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.have.status('298.67C');
//                expect(response.body.message).not.to.('fred');
                done();
            })
    });
})

// Test 3
// This test is for checking the correct maximum weather in California for jun19th
describe('Weather API', () => {
    it('should return the max temperature value for valid input city ', function (done) {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.have.status('300.15C');
//                expect(response.body.message).not.to.('fred');
                done();
            })
    });
})