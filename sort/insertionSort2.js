function insertionSort(array){
    for(i=1;i<array.length;i++){
        for(j=i-1;j>-1;j--){
            if(array[i]<array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp
            }
        }
    }
    return array
}

console.log(insertionSort([2,3,5,6,21,2234,112]));