var addObj = require('./Add');
var multiplyObj = require('./Multiply');

module.exports = function() {
  console.log(addObj.add(3,4)) // 7
  console.log(multiplyObj.multiply(2,5)) // 10
}
