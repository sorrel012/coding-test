 package com.sorrel012.string;

import java.util.Scanner;

public class Q04 {

	public static void main(String[] args) {

		Q04 t = new Q04();

		Scanner scan = new Scanner(System.in);
		
		int num = scan.nextInt();
		scan.nextLine();
		
		String[] words = new String[num];
		
		for(int i = 0; i < num; i++) {
			words[i] = scan.nextLine();
		}
		
		for(String str:words) {
			System.out.println(t.solution(str));
		}
		

	} //main

	public String solution(String str) {
		
		String answer = "";
		
		answer = new StringBuilder(str).reverse().toString();
		
		return answer;
	}
	
}
