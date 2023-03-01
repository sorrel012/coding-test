package com.sorrel012.array;

import java.util.Scanner;

public class Q02 {
	
	private String[] solution(int[] a, int[] b) {
		
		String[] answer = new String[a.length];
		
		for(int i = 0; i < a.length; i++) {
			
			if(a[i] == 1 || a[i] == 2) {
				
				if(a[i] > b[i]) {
					answer[i] = "A";
				} else if(a[i] < b[i]) {
					answer[i] = "B";
				} else {
					answer[i] = "D";
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

		Q02 t = new Q02();
		
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
