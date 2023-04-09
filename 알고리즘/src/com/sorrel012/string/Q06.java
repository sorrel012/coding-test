package com.sorrel012.string;

import java.util.Scanner;

public class Q06 {

	private String solution(String input) {

		String answer = "";
		
		for(int i = 0; i < input.length(); i++) {
			
//			if(!answer.contains(input.charAt(i)+"")) {
//				answer += input.charAt(i);
//			}
			
			if(input.indexOf(input.charAt(i)) == i) {
				answer += input.charAt(i);
			}
			
		}
		
		return answer;
	}

	public static void main(String[] args) {

		Q06 t = new Q06();
		
		Scanner scan = new Scanner(System.in);
		
		String input = scan.nextLine();

		System.out.print(t.solution(input));
		
	} //main
	
}
