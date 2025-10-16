// for (let i=1; i<=49; i++){
//    if (i%2===0)
//        console.log(i);
//}

function isPrime(num) {
   if (num<1) return false;

   for (let i = 2; i<=Math.sqrt(num); i++){
    if (num%i === 0) return false;
       

    }
    return "true";
   
}
console.log(isPrime(19));