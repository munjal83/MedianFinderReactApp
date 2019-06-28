# MedianFinderReactApp

A React and Express App to find the median of all the prime numbers below the input number limit.

The app is divided into `react-client`and `express-server` apps

# Getting Started

Navigate to each directory and run `npm install` to download dependencies and then run `npm start` to start:
`express server` at `http://localhost:9000` and `React app` at `http://localhost:3000`

If there is an error while running `npm install` or `npm start` check for `fsevents` dependency in `package.json` and remove it

Run the above commands again

# Test Cases
```javascript
var medianToFind =  20;
var primeNumbers = getPrimes(medianToFind); // [2,3,5,7,11,13,17,19]
var medianOfPrimes = getMedian(primeNumbers);  // [7,11]
```

```javascript
var medianToFind =  19;
var primeNumbers = getPrimes(medianToFind); // [2,3,5,7,11,13,17]
var medianOfPrimes = getMedian(primeNumbers);  // [7]
```
