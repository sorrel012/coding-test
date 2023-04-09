package com.sorrel012.string;

import java.util.Scanner;

public class Q12 {

	private String solution(int count, String str) {
		
		String answer = "";
		
		str = str.replace("#", "1").replace("*", "0");
		
		for(int i = 0; i < count; i++) {
			
			String tmp = str.substring(i*7, i*7+7);
			
			int num = Integer.parseInt(tmp, 2);
			
			answer += (char)num;
			
		}
		
		return answer;
	}

	public static void main(String[] args) {

		Q12 t = new Q12();
		
		Scanner scan = new Scanner(System.in);
		
		int count = scan.nextInt();
		scan.nextLine();
		
		String str = scan.nextLine();
		
		System.out.print(t.solution(count, str));

	} //main
	
}
