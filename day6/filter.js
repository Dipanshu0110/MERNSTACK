const arr=[5,50,54,12,7,6,10];


function mf(num){
    return num%2===0;
}
const arr1=arr.filter(mf);
console.log(arr1);