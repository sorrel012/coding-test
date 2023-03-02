package com.sorrel012.array;

import java.util.Scanner;

public class Q05 {

	public static void main(String[] args) {

		Q05 t = new Q05();

		Scanner scan = new Scanner(System.in);

		int num = scan.nextInt();

		System.out.println(t.solution(num));

	} //main

	private int solution(int num) {
		
		int answer = 1;
		
		for(int i = 3; i <= num; i++) {
			boolean prime = true;
			
			for(int j = 2; j < i; j++) {
				
				if(i % j == 0) {
					prime = false;
					break;
				}
			}
			
			if(prime) {
				answer++;
			}
		}
		
		return answer;
	}

}
