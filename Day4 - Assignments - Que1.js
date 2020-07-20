/* question1 */

for (var i = 1; i <= 100; i++) {
    var message = '';
    if (i%3==0 && i%5!=0) message += `${i} = fizz`;
    if (i%5==0 && i%3!=0) message += `${i} = buzz`;
    if (i%3==0 && i%5==0) message += `${i} = fizzbuzz`
    console.log(message || i);
  }