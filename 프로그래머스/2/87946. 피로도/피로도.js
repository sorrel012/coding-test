function solution(k, dungeons) {
    let answer = 0;
    let allCases = getPermutations(dungeons);
    
    for(const dungeonCase of allCases) {
        let curr = k;
        let cnt = 0;
        for(const [least, reduce] of dungeonCase) {
            if(curr >= least) {
                cnt++;
                curr -= reduce;
            } else {
                break;
            }
        }     
        answer = Math.max(answer, cnt);
    }    
    
    return answer;
}

function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    
    const first = arr[0];
    const rest = arr.slice(1);
    
    const permsWithoutFirst = getPermutations(rest);
    const allPermutations = [];
  
    permsWithoutFirst.forEach(perm => {        
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    });
    
    return allPermutations;
}