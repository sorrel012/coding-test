function solution(msg) {
    let answer = [];
    let dictionary = {};
    
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(i + 65)] = i + 1;
    }
    
    let nextIndex = 27;
    let index = 0;

    while (index < msg.length) {
        let w = '';
        
        for (let len = 1; index + len - 1 < msg.length; len++) {
            let current = msg.substring(index, index + len);
            if (dictionary[current] !== undefined) {
                w = current;
            } else {
                break;
            }
        }
        answer.push(dictionary[w]);
        
        if (index + w.length < msg.length) {
            let wc = w + msg[index + w.length];
            dictionary[wc] = nextIndex++;
        }
        
        index += w.length;
    }

    return answer;
}
