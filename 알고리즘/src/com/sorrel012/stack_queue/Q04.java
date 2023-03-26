package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Q04 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String postfix = br.readLine();
		
		System.out.print(solution(postfix));
		
	} //main
	
	private static int solution(String postfix) {

		int result = 0;

		Stack<Integer> st = new Stack<>();
		
		int num1 = 0;
		int num2 = 0;
		
		for(int i = 0; i < postfix.length(); i++) {
			
			char c = postfix.charAt(i);
			
			if(Character.isDigit(c)) {
				st.add(Integer.parseInt(c+""));
			} else {
				num2 = st.pop();
				num1 = st.pop();
								
				switch(c) {
				case '+':
					result = num1 + num2;
					st.push(result);
					break;
				case '-':
					result = num1 - num2;
					st.push(result);
					break;
				case '*':
					result = num1 * num2;
					st.push(result);
					break;
				case '/':
					result = num1 / num2;
					st.push(result);
					break;
				}
				
			}
			
		}

		return st.peek();
	}
	
}