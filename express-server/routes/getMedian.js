var express = require('express');
var router = express.Router();
const median = require('./median')

router.get('/:median', function(req, res, next) {
    let medianToFind = req.params.median;
    console.log(medianToFind);
    var primeNumbers = median.getPrimes(10);
    var med = median.getMedian(primeNumbers);
    console.log(primeNumbers, med);
});

module.exports = router;