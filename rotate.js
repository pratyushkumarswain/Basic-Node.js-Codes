function rotate(arr,n){
    let n = arr.length;
    for(i=0; i<d; i++){
          let last=arr(n-1);
          for (let j=n-1;j>0;j--){
            arr[j]=arr[j-1];
            console.log(arr)
          }
          arr[0]=last;
    }
}
let arr = [1,2,3,4,5,6]
let d = 2
rotate(arr, d)

console.log(arr.join(""))
