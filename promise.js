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