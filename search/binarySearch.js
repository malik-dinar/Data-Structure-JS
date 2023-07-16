const binarySearch=(array,target)=>{
    let min = 0;
    let max = array.length - 1;
    while(min < max){
        let mid = Math.floor((min + max)/2);
        if(array[mid] < target){
            min = mid+1 
        }else if(array[mid] > target){
            max = mid -1
        }else{
            return mid
        }
    } return false
}

binarySearch([2,3,4,5,6,7,8,9],5)










const binarySearch2=(array,target)=>{
    let min = 0;
    let max = array.length - 1;
    while(min<max){
        let mid = Math.floor((min + max)/2)
        if(target > array[mid] ){
            min = mid + 1
        }else if(target < array[mid] ){
            max = mid - 1
        }else{
            return mid
        }
    }
}

console.log(binarySearch2([1,2,3,4,6,8,9,10],9));
