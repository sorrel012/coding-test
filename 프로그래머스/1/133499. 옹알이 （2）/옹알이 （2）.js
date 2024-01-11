function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/;
    const continuosRegex = /(ayaaya|yeye|woowoo|mama)/;
    return babbling.reduce((acc, cur) => {
        if(regex.test(cur) && !continuosRegex.test(cur)) {
            return acc + 1;
        }
        return acc;
    }, 0);
}