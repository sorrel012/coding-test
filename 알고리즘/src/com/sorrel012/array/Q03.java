package com.sorrel012.array;

import java.util.Scanner;

public class Q03 {
	
	private String[] solution(int[] a, int[] b) {
		
		String[] answer = new String[a.length];
		
		for(int i = 0; i < a.length; i++) {
			
			if(a[i] == b[i]) {
				answer[i] = "D";
				
			} else if( (a[i] == 1 && b[i] == 3) || (a[i] == 2 && b[i] == 1) || (a[i] == 3 && b[i] == 2) ) {
				answer[i] = "A";
				
			} else {
				answer[i] = "B";
			}
			
		}
				
		return answer;
	}
	
	public static void main(String[] args) {

		Q03 t = new Q03();
		
		Scanner scan = new Scanner(System.in);
		
		int count = scan.nextInt();
		
		int[] a = new int[count];
		int[] b = new int[count];
		
		for(int i = 0; i < count; i++) {
			a[i] = scan.nextInt();
		}
		
		for(int i = 0; i < count; i++) {
			b[i] = scan.nextInt();
		}
		
		for(String str : t.solution(a, b)) {
			System.out.println(str);
		}

	} //main
	
}
