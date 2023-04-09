package com.sorrel012.array;

import java.util.Scanner;

public class Q04 {

	public static void main(String[] args) {

		Q04 t = new Q04();
		
		Scanner scan = new Scanner(System.in);
		
		int num = scan.nextInt();
		
		t.solution(num);

	} //main

	private void solution(int num) {
		
		int a = 1;
		int b = 1;
		int c;
		
		System.out.print(a + " " + b + " ");
		
		for(int i = 2; i < num; i++) {
			c = a + b;
			System.out.print(c + " ");
			a = b;
			b = c;
		}
	}
	
}
