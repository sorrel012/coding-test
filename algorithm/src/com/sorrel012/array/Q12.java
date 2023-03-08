package com.sorrel012.array;

import java.util.Scanner;

public class Q12 {
	
	public static void main(String[] args) {

		Q12 t = new Q12();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		int m  = scan.nextInt();
		
		int[][] students = new int[m][n];

		for(int i = 0; i < m; i++) {
			for(int j = 0; j < n; j++) {
				students[i][j] = scan.nextInt();
			}
		}
		
		System.out.print(t.solution(n, students));

	} //main

	private int solution(int n, int[][] students) {
		
		int answer = 0;
		
		
		
		return answer;
	}

}
