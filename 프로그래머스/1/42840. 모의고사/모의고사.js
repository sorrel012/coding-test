function calculate(answers, pattern) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern[i % pattern.length]) {
            score++;
        }
    }
    return score;
}

function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scores = [calculate(answers, one), calculate(answers, two), calculate(answers, three)];        
    
    return scores.map((v, i) => {
        if(v === Math.max(...scores)) {
            return i+1;
        }
    }).filter(v => !!v) ;
}
    