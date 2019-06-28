var express = require('express');
var router = express.Router();
const median = require('../../express-server/median')

router.get('/:median', function(req, res, next) {
    let medianToFind = Number(req.params.median);
    var primeNumbers = median.getPrimes(medianToFind);
    var med = median.getMedian(primeNumbers);
    res.status(200).send({med: med});
});

module.exports = router;