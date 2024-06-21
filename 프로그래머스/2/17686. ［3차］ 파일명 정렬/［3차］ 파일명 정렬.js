function solution(files) {    
    const parseFileName = (file) => {
        const regex = /^([a-zA-Z-.\s]+)(\d{1,5})(.*)$/;
        const match = file.match(regex);
        return [match[1], +match[2], match[3]];
    };
        
    files.sort((a, b) => {
        const [headA, numberA] = parseFileName(a.toLowerCase())
        const [headB, numberB] = parseFileName(b.toLowerCase());

        if (headA < headB) return -1;
        if (headA > headB) return 1;
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;

        return 0;        
    })
    
    return files;
}