function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/;
    return babbling.reduce((res, str) => {        
        if(regex.test(str)) {
            return res + 1;
        }        
        return res;
    },0);
}