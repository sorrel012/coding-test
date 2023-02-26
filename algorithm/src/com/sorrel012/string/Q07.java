package com.sorrel012.string;

import java.util.Scanner;

public class Q07 {

	private String solution(String input) {
		
		String reverseStr = "";
		
		for(int i = input.length()-1; i >= 0 ; i--) {
			reverseStr += input.charAt(i);
		}
		
		if(input.equalsIgnoreCase(reverseStr)) {
			return "YES";
		}
		
		return "NO";
	}
	
	public static void main(String[] args) {

		Q07 t = new Q07();
		
		Scanner scan = new Scanner(System.in);
		
		String input = scan.nextLine();
		
		System.out.print(t.solution(input));
		
	} //main
	
}
