function insertionSort(array){
    for(i=0;i<array.length;i++){
        if(i!=0){
            for(j=i-1;j>-1;j--){
                if(array[i]<array[j]){
                    temp=array[i];
                    array[i]=array[j]
                    array[j]=temp;
                }
            }
        }
    }
    return array
}

console.log(insertionSort([2,2345,2345,13,245,35467,7865,234]));