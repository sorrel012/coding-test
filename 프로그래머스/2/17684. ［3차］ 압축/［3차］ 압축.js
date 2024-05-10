function solution(msg) {
    const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').reduce((dict, curr, i) => {
        dict[curr] = i + 1;
        return dict;
    }, {});
    dict.newIndex = 27;
    
    const answer = [];
    for(let i = 0, j = 0; i < msg.length; i = j){
        j = msg.length;
        
        let longest = '';        
        while(dict[(longest = msg.substring(i, j))] === undefined) --j;
        
        answer.push(dict[longest]);
        
        if (j < msg.length) { 
            dict[longest + msg[j]] = dict.newIndex++;
        }
    }

    return answer;
}