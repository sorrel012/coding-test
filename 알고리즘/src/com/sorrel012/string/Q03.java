package com.sorrel012.string;

import java.util.Scanner;

public class Q03 {
	
	public static void main(String[] args) {

		Q03 t = new Q03();
		
		Scanner scan = new Scanner(System.in);
		
		String input = scan.nextLine();
		
		System.out.print(t.solution(input));
		

	} //main

	public String solution(String input) {
		
		String answer = "";
		
		String[] sentence = input.split(" ");
		
		for(String str:sentence) {
			
			if(answer.length() < str.length()) {
				answer = str;
			}
			
		}
		
		return answer;
	}
	
}