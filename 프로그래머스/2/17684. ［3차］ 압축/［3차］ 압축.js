function solution(msg) {
    let answer = [];
    let dictionary = {};
    
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(i + 65)] = i + 1;
    }
    let nextIndex = 27;
    let index = 0;

    while (index < msg.length) {
        let longestStr = '';
        for (let len = 1; index + len - 1 < msg.length; len++) {
            let current = msg.substring(index, index + len);
            if (dictionary[current] !== undefined) {
                longestStr = current;
            } else {
                break;
            }
        }
        answer.push(dictionary[longestStr]);
                
        index += longestStr.length;
        
        if (index < msg.length) {
            let newStr = longestStr + msg[index];
            dictionary[newStr] = nextIndex++;
        }
        
    }

    return answer;
}
