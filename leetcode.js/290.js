var wordPattern = function (pattern, s) {
  const myMap = new Map();
  let keys = []
  const wordArray = s.split(" ");
  for (let i = 0; i < pattern.length; i++) {
    if (!myMap.has(`${pattern[i]}`)) {

        
        myMap.set(`${pattern[i]}`, `${wordArray[i]}`);
        const key = myMap.get(pattern[i]);
        if(keys.includes(`${wordArray[i]}`)) return false
        else keys.push(key);
      
        console.log(keys);
    } else if (myMap.has(pattern[i])) {
      const value = myMap.get(pattern[i]);
      if(value != wordArray[i]) return false
    } else {
      return false;
    }

    // console.log(`${pattern[i]}`, `${wordArray[i]}`);
    // console.log(!myMap.has(`${pattern[i]}`, `${wordArray[i]}`));
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
