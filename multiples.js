function sumOfMultiple(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
       if (i % 3 === 0 || i % 5 === 0) {
         sum += i;
  }
}
console.log('Sum: %d', sum);
}
sumOfMultiple(1000);