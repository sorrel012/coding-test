package com.sorrel012.array;

import java.util.Scanner;

public class Q10 {

	public static void main(String[] args) {

		Q10 t = new Q10();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		int[][] grid = new int[n+2][n+2];

		for(int i = 1; i < n+1; i++) {
			for(int j = 1; j < n+1; j++) {
				grid[i][j] = scan.nextInt();
			}
		}
		
		System.out.print(t.solution(n, grid));

	} //main

	private int solution(int n, int[][] grid) {

		int answer = 0;
		
		for(int i = 1; i < n+1; i++) {
			for(int j = 1; j < n+1; j++) {
				
				int up = grid[i-1][j];
				int down = grid[i+1][j];
				int left = grid[i][j-1];
				int right = grid[i][j+1];
				
				if( (grid[i][j] > up) && (grid[i][j] > down) && (grid[i][j] > left) && (grid[i][j] > right)) {
					answer++;
				}
				
			}

		}

		return answer;
	}
}