const  isAnagram = (s, t) =>{
    //o(nlogn)
    if(s.length !== t.length)
        return false
    s=s.split('')
    t=t.split('')
    
    s.sort(function (a, b) {
        if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
      });
    t.sort(function (a, b) {
        if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
      });
   
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] !== t[i])
            return false
    }
    return true
};
const  isAnagram2 = (s, t) =>{
    //O(n) solution
    if(s.length!== t.length)
        return false;
    let maps = new Map();
    let mapt = new Map();
    for(let i =0 ; i <s.length ; i++){
        if(!maps.has(s[i])){
            maps.set(s[i],1)
        }
        else{
            maps.set(s[i],maps.get(s[i])+1)
        }
        if(!mapt.has(t[i])){
            mapt.set(t[i],1)
        }
        else{
            mapt.set(t[i],mapt.get(t[i])+1)
        }
    }
    
    for(let i = 0 ; i < s.length ; i++){
        if(maps.get(s[i]) !== mapt.get(s[i]))
            return false
    }
    return true;
}
let s = "anagram";
let t = "nagaram";
console.log(isAnagram2(s,t))