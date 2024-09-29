function solution(triangle) {    
    return Math.max(...triangle.reduce((acc, curr) => {        
        return curr.map((num, index) => {            
            return num + Math.max((index < acc.length ? acc[index] : 0), (index > 0 ? acc[index-1] : 0));
        });
    }, []));    
}