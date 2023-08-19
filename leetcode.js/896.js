var isMonotonic = function (nums) {
    let increasing = true;
    let j=0;
    while(increasing){
        if(nums[j] === nums[j+1]){
            j++;
            continue;
        }else if(nums[j] > nums[j+1]){
            increasing = false;
        }else{
            break;
        }
    }

    if (increasing) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                return false
            }
        }
    }else{
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) {
                return false
            }
        }
    }

    return true
};