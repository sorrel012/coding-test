package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Q01 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String str = br.readLine();
		
		System.out.print(solution(str));
		
	} //main

	private static String solution(String str) {
				
		Stack<Character> stack = new Stack();
		
		for(Character c : str.toCharArray()) {
			
			if(c.equals('(')) {
				stack.push(c);
				
			} else {
				if(stack.isEmpty() || !stack.pop().equals('(')) {
					return "NO";
				}
			}
			
		}
		
		if(!stack.isEmpty()) {
			return "NO";
		}
		
		return "YES";
	}
	
}
