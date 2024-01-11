function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/;
    const continuosRegex =  /(aya|ye|woo|ma)\1+/;
    return babbling.reduce((acc, cur) => {
        if(regex.test(cur) && !continuosRegex.test(cur)) {
            return acc + 1;
        }
        return acc;
    }, 0);
}