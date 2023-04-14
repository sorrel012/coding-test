package com.sorrel012.array;

import java.util.Scanner;

public class Q11 {

	public static void main(String[] args) {

		Q11 t = new Q11();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		int[][] students = new int[n+1][6];

		for(int i = 1; i <= n; i++) {
			for(int j = 1; j <= 5; j++) {
				students[i][j] = scan.nextInt();
			}
		}
		
		System.out.print(t.solution(n, students));

	} //main

	private int solution(int n, int[][] students) {

		int max = Integer.MIN_VALUE;
		int answer = 0;
		
		for(int i = 1; i <= n; i++) {
			int count = 0;
			
			for(int j = 1; j <= n; j++) {
				
				for(int k = 1; k <= 5; k++) {
					int num1 = students[i][k];
					int num2 = students[j][k];
					
					if(num1 == num2) {
						count++;
						break;
					}
					
				}
				
			}
			
			if(count > max) {
				max = count;
				answer = i;
			}
			
		}
		
		return answer;
	}
}