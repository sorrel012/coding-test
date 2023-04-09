package com.sorrel012.string;

import java.util.Scanner;

public class Q10 {
	
	private String solution(String str) {
		
		String answer = "";
		
		String s = str.split(" ")[0];
		char t = str.split(" ")[1].charAt(0);
				
		int[] right = new int[s.length()];
		int[] left = new int[s.length()];
		
		int count = 100;
		
		for(int i = 0; i < right.length; i++) {
			
			if(s.charAt(i) == t) {
				count = 0;
			} else {
				count++;
			}
			
			right[i] = count;
			
		}

		for(int i = left.length - 1 ; i >= 0; i--) {

			if(s.charAt(i) == t) {
				count = 0;
			} else {
				count++;
			}

			left[i] = count;

		}

		for(int i = 0; i < right.length; i++) {

			answer += right[i] < left[i] ? right[i] + " " : left[i] + " ";

		}
		
		return answer;
		
	}

	public static void main(String[] args) {

		Q10 t = new Q10();
		
		Scanner scan = new Scanner(System.in);
		
		String str = scan.nextLine();
		
		System.out.print(t.solution(str));

	} //main
	
}
