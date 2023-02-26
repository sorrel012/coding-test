package com.sorrel012.string;

import java.util.Scanner;

public class Q08 {

	private String solution(String input) {
		
		String originStr = "";
		String reverseStr = "";
		
		for(int i = 0; i < input.length(); i++) {
			char c = input.charAt(i);
			
			if(Character.isAlphabetic(c)) {
				originStr += c;
			}
			
		}
		
		for(int i = input.length()-1; i >= 0 ; i--) {
			char c = input.charAt(i);

			if(Character.isAlphabetic(c)) {
				reverseStr += c;
			}
		}
		
		if(originStr.equalsIgnoreCase(reverseStr)) {
			return "YES";
		}
		
		return "NO";
	}
	
	public static void main(String[] args) {

		Q08 t = new Q08();
		
		Scanner scan = new Scanner(System.in);
		
		String input = scan.nextLine();
		
		System.out.print(t.solution(input));
		
	} //main
	
}
