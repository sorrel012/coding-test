package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Q02 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String str = br.readLine();
		
		System.out.print(solution(str));
		
	} //main
	
	private static String solution(String str) {

		String answer = "";

		Stack<Character> st = new Stack();

		for(char c : str.toCharArray()) {

			if(c != ')') {
				st.push(c);

			} else {
				while(!st.isEmpty() && st.pop() != '(') {
				}
			}

		}

		for(int i = 0; i < st.size(); i++) {
			answer += st.get(i);
		}

		return answer;
	}
	
}
