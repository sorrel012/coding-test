class Solution {
    public int solution(String my_string) {
        my_string = my_string.replaceAll("[a-z]",",");
		my_string = my_string.replaceAll("[A-Z]",",");
		String[] strArr = my_string.split(",");
		
		int answer = 0;
        
        for(String s : strArr) {
        	if(!s.equals("")) {
        		answer += Integer.parseInt(s);
        	}
        }
        
        return answer;
    }
}