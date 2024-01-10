function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(Math.floor(num/i) === num/i) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    const len = nums.length;
    for (let i = 0; i <  len-2; i++) {
        for (let j = i+1; j < len-1; j++) {
            for (let k = j+1; k < len; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])) answer++;
            }
        }
    }

    return answer;
}