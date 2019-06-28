var express = require('express');
var router = express.Router();
const median = require('../../express-server/median')

router.get('/:limit', function (req, res, next) {
    let medianToFind = Number(req.params.limit);
    var primeNumbers = median.getPrimes(medianToFind);
    var medianOfPrimes = median.getMedian(primeNumbers);
    res.status(200).send({ median: medianOfPrimes });
});

module.exports = router;