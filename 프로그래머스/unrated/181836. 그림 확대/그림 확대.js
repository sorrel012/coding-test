function solution(picture, k) {
    return picture.flatMap(line => {
        return Array(k).fill([...line].map(char => char.repeat(k)).join(''));
    });
}
