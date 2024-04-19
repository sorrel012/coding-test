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
    
    const set = new Set([...str1List, ...str2List]);
    let union = 0;
    let intersection = 0;
    
    set.forEach(str => {
        const has1 = str1List.filter(v => v === str).length;
        const has2 = str2List.filter(v => v === str).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}