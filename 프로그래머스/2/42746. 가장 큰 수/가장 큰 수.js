function solution(numbers) {
    const sortedNumbers = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    const result = sortedNumbers.join('');
    
    return result[0] === '0' ? '0' : result;
}