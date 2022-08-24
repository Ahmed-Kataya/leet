var groupAnagrams = (strs)=>{
    //o(n^2lgn)
    let arr = []
    for(let i = 0 ; i < strs.length ; i++){
        let x = strs[i].split('')
        x.sort((a,b)=>{
            if(a<b)
            return -1
            if(a>b)
            return 1
        })
        x=x.join('')
        
        arr.push(x)

    }
    let map = new Map();
    for(let i = 0 ; i < arr.length ; i++){
        if(map.has(arr[i]))
        {   let v = map.get(arr[i])
            v.push(strs[i])
            map.set(arr[i],v)
        }else{
            map.set(arr[i],[strs[i]])
        }
    }
  
    let ans = []
    values= map.values()
    let result = values.next();
    while (!result.done) {
        ans.push(result.value); // 1 3 5 7 9
        result = values.next();
       }
    return ans
    
};
let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  