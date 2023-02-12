function quickSort(array){
    if(array.length<1){
        return array
    }

    let pivot=array[array.length-1];
    let left=[];
    let right=[];
    for(i=0;i<array.length;i++){
        if(pivot>array[i]){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,42,34,23,12]));