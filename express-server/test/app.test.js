const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')

describe('Unit testing the / route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

    it('should return message on rendering', function() {
      return request(app)
        .get('/')
        .then(function(response){
            expect(response.text).to.contain('Welcome to Express');
        })
    });

});

describe('Unit testing the /getmedian/:limit route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/getmedian/10')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

    it('should return median object on rendering', function() {
      return request(app)
        .get('/getmedian/10')
        .then(function(response){
            expect(response.text).to.contain('{"median":[3,5]}');
        })
    });

});