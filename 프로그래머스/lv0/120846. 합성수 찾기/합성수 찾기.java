class Solution {
    
    public int solution(int n) {
        int answer = 0;
        
        for(int i=2; i<=n; i++) {
            if(compositeNumber(i)) {
                answer += 1;
            }
        }
        
        return answer;
    }
    
    public boolean compositeNumber(int n) {
        boolean isComposite = false;
        if(n > 1) {
            for(int i=2; i < n; i++) {
                if (n % i == 0) {
                    isComposite = true;
                    break;
                } //if
            } //for
        }//if
        return isComposite;
    }//compositeNumber()
    
}