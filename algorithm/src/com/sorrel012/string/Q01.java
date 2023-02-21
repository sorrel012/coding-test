package com.sorrel012.string;

import java.util.Scanner;

public class Q01 {
	
	public int solution(String str, char t) {
		
		int answer = 0;
		
		str = str.toUpperCase();
		t = Character.toUpperCase(t);
		
		for(int i = 0; i < str.length(); i++) {
			
			if(str.charAt(i) == t) {
				answer++;
			}
			
		}
		
		return answer;
		
	}
	
	public static void main(String[] args) {

		Q01 t = new Q01();
		
		Scanner scan = new Scanner(System.in);
		String str = scan.next();
		char c = scan.next().charAt(0);
		
		System.out.print(t.solution(str,  c));

	} //main
	
}
