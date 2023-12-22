function solution(numer1, denom1, numer2, denom2) {
    const commonDenom = denom1 * denom2;
    const sumNumer = (numer1 * denom2) + (numer2 * denom1);
    
    const getGcd = (a, b) => {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }
    
    const gcd = getGcd(sumNumer, commonDenom);
    return [sumNumer/gcd, commonDenom/gcd];
}