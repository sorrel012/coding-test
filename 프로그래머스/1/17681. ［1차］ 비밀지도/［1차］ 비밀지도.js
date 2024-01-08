function solution(n, arr1, arr2) {
    const convertBintoDec = (arr) => arr.map(el => {
        const binary = el.toString(2);
        return binary.length < n ? '0'.repeat(n - binary.length) + binary : binary;
    });    
    
    arr1 = convertBintoDec(arr1);
    arr2 = convertBintoDec(arr2);
    
    return arr1.map((num, i) => {
        let res = '';
        for(let j = 0; j < n; j++) {
            res += (arr1[i][j] === '0' && arr2[i][j] === '0') ? ' ' : '#';
        }
        return res;
    })
}