package com.sorrel012.string;

import java.util.Scanner;

public class Q09 {

	private int solution(String input) {
		
		int answer = 0;
		String num = "";
		
		for(char c : input.toCharArray()) {
			
			if (Character.isDigit(c)) {
				num += c;
			}
			
		}
		
		answer = Integer.parseInt(num);
		
		return answer;
	}
	
	public static void main(String[] args) {

		Q09 t = new Q09();
		
		Scanner scan = new Scanner(System.in);
		
		String input = scan.nextLine();
		
		System.out.print(t.solution(input));
		
	} //main
	
}
