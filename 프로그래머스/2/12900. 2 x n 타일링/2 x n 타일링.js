function solution(n) {
    const MOD = 1000000007;
    
    if (n === 0) return 1;
    if (n === 1) return 1;
    
    let prev2 = 1; 
    let prev1 = 1; 
    let current = 0;
    
    for (let i = 2; i <= n; i++) {
        current = (prev1 + prev2) % MOD;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
}
