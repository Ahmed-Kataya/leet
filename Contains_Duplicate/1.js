const conatinsDublicate =(arr) =>{
    //O(n^2) solution
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }
    return false;
}
const conatinsDublicate2 = (arr) =>{
    //O(nlogn)
    arr.sort(function (a, b) {
        return a - b;
      });
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === arr[i+1])
            return true
    }
    return false
}
const conatinsDublicate3 = (arr) =>{
    //O(n) soultion
    // if(nums.length <2)
    //return false faster than 93%
    const set = new Set()
    for(let i = 0 ; i < arr.length ; i++){
        if(set.has(arr[i]))
            return true
        set.add(arr[i])
    }
    return false
}
let nums = [1,1,1,3,3,4,3,2,4,2]
console.log(conatinsDublicate(nums))
console.log(conatinsDublicate2(nums))
console.log(conatinsDublicate3(nums))