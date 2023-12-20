function solution(scores) {
    // 각 학생의 평균 점수와 원래 인덱스를 계산
    let averages = scores.map((score, index) => {
        let avg = (score[0] + score[1]) / 2;
        return { avg, index };
    });

    // 평균 점수를 기준으로 내림차순 정렬
    averages.sort((a, b) => b.avg - a.avg);

    // 등수 매기기
    let ranks = Array(scores.length).fill(0);
    let currentRank = 1;

    for (let i = 0; i < averages.length; i++) {
        if (i > 0 && averages[i].avg !== averages[i - 1].avg) {
            currentRank = i + 1;
        }
        ranks[averages[i].index] = currentRank;
    }

    return ranks;
}
