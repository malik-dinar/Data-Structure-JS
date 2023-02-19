const { exit } = require("process");

function solution(a) {
    let temp=0;
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
               temp=a[i];
               if(temp===a[a.length-1]){
                    return -1 
               }
            }
        }
    }
    if(temp===0) return -1
    else return temp
}

console.log(solution([1, 1, 2, 2, 1]));