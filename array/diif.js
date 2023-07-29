let array = [1,2,3,4,4,5]

let arry2 = [1,3]

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < arry2.length; j++){
        if(array[i] == arry2[j]){
            console.log(array[i]);
        }
    }
}