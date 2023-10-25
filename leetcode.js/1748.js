var sumOfUnique = function(nums) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        let flag = true;
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j] && i!=j){
                flag = false
            }
        }
        if(flag){
            sum = sum + nums[i]
        }
    }
    return sum
};