var maximum69Number = function (num) {
    let largest = num;
    const length = num.toString().length;

    for (let i = 0; i < length; i++) {
        const str = String(num);
        const arr = Array.from(str, n => Number(n));
        if(arr[i] === 6){
            arr[i] = 9;
        }else{
            arr[i] = 6;
        }
        
        // const num = parseInt(arr.join(''));
        let number = arr.reduce((a, b) => a * 10 + b);

        if(number > largest){
            largest = number
        }

    }

    return largest
};


maximum69Number(9669)