package com.sorrel012.array;

import java.util.Scanner;

public class Q03 {
	
	private String[] solution(int[] a, int[] b) {
		
		String[] answer = new String[a.length];
		
		for(int i = 0; i < a.length; i++) {
			
			if(a[i] == 1) {
				
				switch (b[i]) {
				case 1 :
					answer[i] = "D";
					break;
				case 2 :
					answer[i] = "B";
					break;
				case 3 :
					answer[i] = "A";
					break;
				}
				
			} else if(a[i] == 2) {
				
				switch (b[i]) {
				case 1 :
					answer[i] = "A";
					break;
				case 2 :
					answer[i] = "D";
					break;
				case 3 :
					answer[i] = "B";
					break;
				}
				
			} else {
				
				switch (b[i]) {
				case 1 :
					answer[i] = "B";
					break;
				case 2 :
					answer[i] = "A";
					break;
				case 3 :
					answer[i] = "D";
					break;
				}
				
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
