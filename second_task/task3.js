function CreateMatrix(n,m){
  this.arr = [];


 for(let i = 0 ; i<n;i++){
     this.arr[i] = [];
    for(let j = 0; j<m; j++){
    this.arr[i][j] = (Math.floor(Math.random() * 10));
    }
 }


}

let newArray = new CreateMatrix(2,4);
console.log(newArray);