class Solution {
    public int solution(String[] spell, String[] dic) {
        char[] spells = new char[spell.length];
		
		for(int i = 0; i<spell.length; i++) {
			spells[i] = spell[i].charAt(0);
		}
		
		int answer = 2;
		
		for(String s : dic) {
			boolean canMake = true;
			for(char ch : spells) {
				if(s.chars().filter(c -> c == ch).count() != 1) 
					canMake = false;
			}			

			if(canMake)
				answer = 1;
        }
        
        return answer;
    }
}