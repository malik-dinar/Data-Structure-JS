// '123423'

// '1343'
a='123423';
let array='';
let flag;
let bool=true;

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j] && bool){
            flag=a[i];
            bool=false
        }
    }
    if(flag!==a[i]){
        array= array + a[i]
    }
}

console.log(array);




