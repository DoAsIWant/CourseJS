
function sorting (arr){
for (let i = 0, lastI = arr.length - 1; i < lastI; i++) {
    for (let j = 0, lastJ = lastI - i; j < lastJ; j++) {
        if (arr[j] > arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }
    }
}

return arr;
}

let array = [1,23,4,90,2];
let sortedArr = sorting(array);
console.log(sortedArr);