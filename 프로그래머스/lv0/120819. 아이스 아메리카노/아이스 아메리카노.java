class Solution {
    public int[] solution(int money) {        
        
        int coffee = money / 5500;
        int changes = money % 5500;
        
        int[] answer = {coffee, changes};
        
        return answer;
    }
}