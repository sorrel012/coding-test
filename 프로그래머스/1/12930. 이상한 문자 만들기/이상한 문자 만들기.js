function solution(s) {
   return s.split(' ') .map(word => { 
            return [...word].map((char, idx) => { 
                if(idx % 2 === 0) {
                    return char.toUpperCase(); 
                } else {
                    return char.toLowerCase();
                }
            }).join('');
        })
        .join(' ');
}