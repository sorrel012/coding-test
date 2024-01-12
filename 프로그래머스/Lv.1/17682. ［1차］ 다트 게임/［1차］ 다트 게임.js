function solution(dartResult) {
    const sections = { 'S': 1, 'D': 2, 'T': 3 };
    let scores = [];
    let dartResultArray = dartResult.match(/\d+\D+/g);

    dartResultArray.forEach((dart, i) => {
        let score = parseInt(dart.match(/\d+/)[0]);
        let section = dart.match(/[SDT]/)[0];
        let option = dart.match(/[*#]/);
        
        score = Math.pow(score, sections[section]);

        if (option) {
            if (option[0] === '*') {
                score *= 2;
                if (i > 0) scores[i - 1] *= 2;
            } else if (option[0] === '#') {
                score *= -1;
            }
        }

        scores.push(score);
    });

    return scores.reduce((acc, cur) => acc + cur, 0);
}