function primeNumber(size) {
   let arr = [2, 3]
   let num = 5
   let isPrime
   while(num < size) {
     isPrime = true
     for(let i = 1; i < arr.length && arr[i] < Math.sqrt(num); i ++) {
       if(num % arr[i] === 0) {
          isPrime = false
          break
       }
     }
     if(isPrime) arr.push(num)
     num = num + 2
   }
   return arr
}
