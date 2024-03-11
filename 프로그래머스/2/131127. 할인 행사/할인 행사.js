function solution(want, number, discount) {
    let answer = 0;
    let wants = {}
    want.forEach((v, i) => {
        wants[v] = number[i];
    })
    
    for(let i = 0; i <= discount.length - 10; i++) {
        let ten = discount.slice(i, i+10);
        let cnt = 0;
        for (const [key, value] of Object.entries(wants)) {
            if(ten.filter(v => v === key).length === value) cnt++;
        }
        if(cnt === want.length) answer++;
    }
    
    return answer;
}