const axios = require('axios');
const sellPoint=async (coin)=>{
    axios.get(`https://api.binance.com/api/v3/klines?symbol=${coin.toUpperCase()}&interval=1h&limit=1000`)
    .then(response => {
        let redCandleCount=0;
        let data = response.data;
        let percentDecrease;
        let median;
        let bucketlist=[];
        let optimizedSellPoint ;
        for(i=0;i<data.length;i++){
            if(data[i][1]>data[i][4]){
                redCandleCount++;                
            }else{
                if(redCandleCount!=0){
                    percentDecrease=((data[i-redCandleCount][2]-data[i-1][3])/data[i-redCandleCount][2])*100;
                    bucketlist.push(percentDecrease)
                }
                redCandleCount=0;
            }
        } 
        
        //sort
        function insertionSortWithInsertion(arr, elem) {
            arr.push(elem); 
            for (let i = 1; i < arr.length; i++) {
              const currentValue = arr[i];
              let j = i - 1;
              while (j >= 0 && arr[j] > currentValue) {
                arr[j + 1] = arr[j];
                j--;
              }
              arr[j + 1] = currentValue;
            }
            return arr;
        }
        console.log(bucketlist);
        if(bucketlist.length % 2 !==0){     
            median=bucketlist[Math.floor(bucketlist.length/2)];
        }else{
            median=(bucketlist[Math.floor(a.length/2)]+bucketlist[Math.floor(((bucketlist.length-1)/2))])/2;
        }
        console.log(median);
        optimizedSellPoint = (data[data.length-1][4] * (1-(median/100)))
        console.log(optimizedSellPoint);

    })
    .catch(error => {
       console.error('error')
    });
  }
  sellPoint('btcusdt')
