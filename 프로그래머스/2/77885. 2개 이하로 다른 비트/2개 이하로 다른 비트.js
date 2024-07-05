function solution(numbers) {
    const answer = [];

    for (const num of numbers) {
        let bigNum = BigInt(num); 
        if (bigNum % 2n === 0n) {
            answer.push(bigNum + 1n);
        } else {
            let bit = 1n;
            while ((bigNum & bit) !== 0n) {
                bit <<= 1n;
            }
            const nextNum = bigNum + bit - (bit >> 1n);
            answer.push(nextNum);
        }
    }

    return answer.map(Number);
}
