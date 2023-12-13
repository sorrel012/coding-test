function solution(str1, str2) {
    return [...str1].map((value, i) => value + str2[i]).join("");
}