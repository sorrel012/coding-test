package com.sorrel012.string;

import java.util.Scanner;

public class Q02 {
	
	public static void main(String[] args) {

		Q02 t = new Q02();
		
		Scanner scan = new Scanner(System.in);
		String str = scan.nextLine();
		
		System.out.print(t.solution(str));
		
	} //main

	private String solution(String str) {
		
		String answer = "";
		
		for(char c:str.toCharArray()) {
			
			if(Character.isLowerCase(c)) {
				answer += Character.toUpperCase(c);
				
			} else {
				answer += Character.toLowerCase(c);
			}
			
		}
		
		return answer;
	}
	
}
