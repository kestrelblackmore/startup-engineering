#!/usr/bin/env node
  var fs = require('fs');
  fs.writeFileSync("hw1-2.txt", determinePrimes(100).toString() + "\n");

function determinePrimes(primes_to_find) {

  var primes_found = 0;
  var number_to_check = 1;
  var primes = [];

  // loop until we find the number of primes_to_find
  while (primes_found < primes_to_find) 
  {
    number_to_check++;

    // rules that quickly determine number_to_check is not prime 
    if (number_to_check > 5) 
    {
      var last_digit = number_to_check.toString().slice(-1);
      if (last_digit == "0" || last_digit == "2" || last_digit == "5") continue;

      if (sumDigits(number_to_check) % 3 == 0) continue;

      var last_two_digits = number_to_check.toString().slice(-2);
      if (last_two_digits % 4 == 0) continue;
    }

    // setup testing variables
    var is_prime = true;
    var divisor = 2;
    var square_root = Math.ceil(Math.sqrt(number_to_check));
    
    while (divisor <= square_root)
    {
        if (number_to_check % divisor == 0 && number_to_check != divisor) 
        {
          // not a prime number
          is_prime = false;
          break;
        }

        divisor++;
        
    }

    if (is_prime == true)
    {
      primes.push(number_to_check);
      primes_found++;
    }

  }

  return primes;

}

function sumDigits(number) 
{
  var str = number.toString();
  var sum = 0;

  for (var i = 0; i < str.length; i++)
  {
    sum += parseInt(str.charAt(i), 10);
  }

  return sum;
}
