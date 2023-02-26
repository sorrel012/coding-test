package com.sorrel012.string;

import java.util.Scanner;

public class Q08 {

	private String solution(String input) {
		
		input = input.toUpperCase().replaceAll("[^A-Z]", ""); //알파벳 대문자가 아닌 것은 제거
		
		String tmp = new StringBuilder(input).reverse().toString(); // StringBuilder로 reverse한 후 다시 String으로 변환
		
		if(input.equals(tmp)) {
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
