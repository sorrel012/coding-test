package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Q05 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String str = br.readLine();
		
		System.out.print(solution(str));
		
	} //main
	
	private static int solution(String str) {
		
		int answer = 0;

		Stack<Character> st = new Stack<>();

		for(int i = 0; i < str.length(); i++) {

			char c = str.charAt(i);
			
			if(c == '(') {
				st.push(c);
			} else if(!st.isEmpty() && str.charAt(i-1) == '(') {
				st.pop();
				answer += st.size();
			} else if(!st.isEmpty() && str.charAt(i-1) == ')') {
				st.pop();
				answer += 1;
			}

		}
		
		return answer;

	}
	
}