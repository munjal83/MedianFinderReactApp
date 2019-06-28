var median = require('../median');
var expect = require('chai').expect;

describe('Testing getPrimes and getMedian function for median module', function() {

    context('without arguments', function() {
      it('should return an empty array []', function() {
        expect(median.getPrimes()).to.deep.equal([])
      })

      it('should return an empty array []', function() {
        expect(median.getPrimes()).to.deep.equal([])
      })
    })
    
    context('with number arguments', function() {
      it('should return list of primes below the number', function() {
        expect(median.getPrimes(19)).to.deep.equal([2,3,5,7,11,13,17])
      })
      
      it('should return argument when only one argument is passed', function() {
        expect(median.getMedian([2,3,5,7,11,13,17])).to.equal(7)
      })
    })

    context('with non-number arguments', function() {
        it('should return an empty array', function() {
          expect(median.getPrimes("prime")).to.deep.equal([])
        })
        
        it('should return undefined', function() {
          expect(median.getMedian(2.5)).to.equal(undefined)
        })
      })
    
  })