function solution(my_string) {
    return [...my_string].reduce((arr, char) => (arr[char.charCodeAt() - (char === char.toLowerCase() ? 71 : 65)]++, arr), Array(52).fill(0));
}