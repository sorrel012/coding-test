function solution(str1, str2) {
    let str1List = [];
    let str2List = [];
    
    for(let i = 0; i < str1.length-1; i++) {
        let tmp = str1.slice(i, i+2).toLowerCase();
        if(tmp.match(/^[a-z]{2}$/)) {
            str1List.push(tmp);
        }
    }
    
    for(let i = 0; i < str2.length-1; i++) {
        let tmp = str2.slice(i, i+2).toLowerCase();
        if(tmp.match(/^[a-z]{2}$/)) {
            str2List.push(tmp);
        }
    }
    
    let intersect = 0;    
    let sum = str1List.length + str2List.length;
    for(const str of str1List) {
        let index = str2List.indexOf(str);
        if(index > -1) {
            intersect++;
            str2List.splice(index, 1);
        }
    }
    
    sum -= intersect;
    
    return sum === 0 && intersect === 0 ? 65536 : Math.floor((intersect / sum) * 65536);
    
}