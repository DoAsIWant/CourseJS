function createMatrix(n,m){
 let arr = [];


 for(let i = 0 ; i<n;i++){
     arr[i] = [];
    for(let j = 0; j<m; j++){
    arr[i].push(Math.floor(Math.random() * 10));
    }
 }

 return arr;
}

let newArray = createMatrix(2,4);
console.log(newArray);