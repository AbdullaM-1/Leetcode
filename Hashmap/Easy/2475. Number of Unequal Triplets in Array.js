var unequalTriplets = function(nums) {

    let map = new Map();

    for( let i of nums){
        map.set(i, (map.get(i) ||0)+ 1);
    }

    let right = nums.length; 

    let left = 0;

    let ans = 0; 

    for(let cnt of map.values()) {
        right -= cnt;
        ans += left * cnt * right;
        left += cnt;
    }

    return ans; 
   
};