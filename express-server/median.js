module.exports = {
    getPrimes: function (limit) {
        let allNumbersBelowLimit = [...Array(limit).keys()];
        allNumbersBelowLimit[1] = 0;
        var squareRoot = Math.sqrt(limit);
        for (i = 2; i <= squareRoot; i++) {
            for (var j = i * i; j <= limit; j += i) allNumbersBelowLimit[j] = 0;
        }
        return allNumbersBelowLimit.filter(Number);
    },
    getMedian: function (primes) {
        const midValue = Math.floor(primes.length / 2);
        return primes.length % 2 !== 0 ? primes[midValue] : [primes[midValue - 1], primes[midValue]];
    }
}
