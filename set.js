const set = new Set([1,2,3])
set.add(7)
set.add(7)
set.add(734)
console.log(set.has(7));
set.delete(7)
set.clear()

for(const item of set){
    console.log(item);
}
