var twoSum = (nums, target) =>{
    //o(n^2)
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[i]+nums[j]===target)
                return [i,j]
        }
    }
};
var twoSum2 = (nums, target) =>{
    //o(n)
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        let x = target-nums[i]
        if(map.has(x)){
            return[i,map.get(x)]
        }
        else{map.set(nums[i],i)}
    }
}
let nums = [3,2,4]
let target = 6
console.log(twoSum2(nums,target))