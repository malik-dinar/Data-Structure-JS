myPromise = new Promise((resolve,reject)=>{
    if (true) {
        resolve()
    }else{
        reject()
    }
});

myPromise.then(()=>{
    console.log('promise resolved');
}).catch(()=>{
    console.log('promise rejected');
})















myPromise2 = new Promise((resolve,reject)=>{
    if(true){
        resolve()
    }else{
        reject()
    }
})

myPromise2.then(()=>{
    console.log('done successfullt');
}).catch(()=>{
    console.log('failed failedddd');
})