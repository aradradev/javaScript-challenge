const fibonacci = function (n) {
  let prev = 0;
  let curr = 1;
  let result;
  for (let i = 1; i < n; i++) {
    result = prev + curr;
    prev = curr;
    curr = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;

//  variable to keep the prev value
//create another variable that keep the curr value
//3rd variable sum of the pre + curr
//Update( curr = prev)
