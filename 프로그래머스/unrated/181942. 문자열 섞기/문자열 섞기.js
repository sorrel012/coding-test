function solution(str1, str2) {
    return [...str1].reduce((str, _, i) => {
        return str + [...str1][i] + [...str2][i]
    }, '')
}