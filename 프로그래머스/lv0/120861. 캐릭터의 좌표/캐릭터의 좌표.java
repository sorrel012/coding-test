class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int[] answer = new int[2];
		int x = 0;
		int y = 0;
						
		for(int i=0; i<keyinput.length; i++) {
			if(keyinput[i].equals("left"))
				x -= 1;
			else if(keyinput[i].equals("right"))
				x += 1;
			else if(keyinput[i].equals("up"))
				y += 1;
			else
				y -= 1;
			
			if(x > board[0] / 2) {
				x -= 1;
			} else if(x < -1*(board[0] / 2)) {
				x += 1;
			} else if(y > board[1] / 2) {
				y -= 1;
			} else if(y < -1*(board[1] / 2)){
				y += 1;
			}	
		}
		
		answer[0] = x;
		answer[1] = y;
        
        
        return answer;
    }
}