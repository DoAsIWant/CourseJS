function CreateMatrix(n,m){
    this.arr = [];

    for(let i=0; i<n;i++){
        this.arr[i] = 0
        for(let j = 0; i<m; j++){
        this.arr[i][j] = Math.floor(Math.random()*10);
        }
    }

    this.add = function(array){
        let c = 0;
        if(Array.isArray(array)){
          
            for(let i = 0; i<n;i++){
                c[i] = []
                for(let j = 0; j<m; j++){
                 c[i][j] = this.arr[i][j] + array[i][j]
                }
            }
        }
        else{
            console.log("Ошибка")
        }
        return c;
    }
}

let arr1 = new CreateMatrix(2,3);
let arr2 = new CreateMatrix(2,3);
let c  = arr1.add(arr2);
console.log(c);