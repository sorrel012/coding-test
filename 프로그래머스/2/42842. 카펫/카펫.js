
function solution(brown, yellow) {
    let width = 0, height = 0;    
    let divisors = [];
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            divisors.push(i);
        }
    }
    
    for(let i = 0; i < divisors.length; i++) {
        let tmpHeight = divisors[i];
        let tmpWidth = yellow / divisors[i];
        let border = (tmpWidth * 2) + ((tmpHeight + 2) * 2);
        
        if(border === brown) {
            width = tmpWidth + 2;
            height = tmpHeight + 2;
            break;
        }       
        
    }
    
    return [width, height];
}