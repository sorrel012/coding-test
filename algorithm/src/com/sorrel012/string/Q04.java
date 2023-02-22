 package com.sorrel012.string;

import java.util.Scanner;

public class Q04 {

	public static void main(String[] args) {

		Q04 t = new Q04();

		Scanner scan = new Scanner(System.in);
		
		int num = scan.nextInt();
		scan.skip("\r\n");
		
		for(int i = 0; i < num; i++) {
			String str = scan.nextLine();
			System.out.print(t.solution(str));
		}

	} //main

	public String solution(String str) {
		
		String answer = "";
		
		for(int i = str.length() - 1; i >= 0 ; i--) {
			answer += str.charAt(i);
		}
		
		return answer;
	}
	
}
