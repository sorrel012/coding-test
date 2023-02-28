package com.sorrel012.string;

import java.util.Scanner;

public class Q11 {
	
	public String solution(String str) {
		
		for(int i = 0; i < str.length(); i++) {

			char c = str.charAt(i);
			int count = 0;
			
			for(int j = i; j < str.length(); j++) {
				
				if(str.charAt(j) == c) {
					count++;
				} else {
					break;
				}
			}
			
			if(count != 1) {
				String tmp = "";
				for(int j = 0; j < count; j++) {
					tmp += c;
				}
				str = str.replaceFirst(tmp, c+String.valueOf(count));
			}
			
		}
		
		return str;
	}
	
	public static void main(String[] args) {

		Q11 t = new Q11();
		
		Scanner scan = new Scanner(System.in);
		
		String str = scan.nextLine();
		
		System.out.print(t.solution(str));

	} //main
	
}
