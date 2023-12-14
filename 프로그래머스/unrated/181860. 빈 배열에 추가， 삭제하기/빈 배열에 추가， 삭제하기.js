function solution(arr, flags) {
    let answer = [];
    flags.map((value, i) => {
        if(value) {
            for(let j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            for(let j = 0; j < arr[i]; j++) {
                answer.pop();
            }
        }
    })
    return answer;
}