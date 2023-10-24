var maximumWealth = function(accounts) {
    let max= accounts[0].reduce((a, b) => a + b, 0);
    console.log(max)
    for(let i=1;i<accounts.length;i++){
         let temp= accounts[i].reduce((a, b) => a + b, 0);   
         if(max <= temp){
            max = temp
         }
    }
    return max
};

