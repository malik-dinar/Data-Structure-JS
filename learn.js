
// let a=20;


// const b=()=>{
//     console.log(a)
//     const c=()=>{
//         console.log(a)
//         let crucial="hello"
//         console.log(crucial);
//     }
//     c();
// }

// b()


// while do while

// let i=0
// while(6<5){
//     console.log(i)
//     i++
// }

// console.log('dowhile');

// i=0;
// do{
//     console.log(i)
//     i++
// }while(6<5)


// reduce

let array = [1,2,30,4,5,6,7,8,9,10]

// const sum1 = array.reduce((acc,curr)=>{
//     return acc + curr
// })

// console.log(sum1);

const hi = array.map((val)=>{
    return val*2
})

console.log(hi);