function solution(citations) {
    let h = 0;
    let len = citations.length;
    
    for(let i = len; i >= 0; i--) {
        let quotation = citations.filter(value => value >= i).length;
        
        console.log(i, quotation)
        
        if(quotation >= i) {
            h = i;
            break;
        }
    }    
    
    return h;
}