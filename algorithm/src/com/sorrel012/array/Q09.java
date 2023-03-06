package com.sorrel012.array;

import java.util.ArrayList;
import java.util.Scanner;

public class Q09 {
	
	public static void main(String[] args) {

		Q09 t = new Q09();
		
		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		int[][] grid = new int[n][n];
		
		for(int i = 0; i < n; i++) {
			for(int j = 0; j < n; j++) {
				grid[i][j] = scan.nextInt();
			}
		}

		System.out.print(t.solution(n, grid));

			} //main

	private int solution(int n, int[][] grid) {
		
		ArrayList<Integer> sum = new ArrayList<Integer>();
		
		for(int i = 0; i < n; i++) {
			int count1 = 0;
			int count2 = 0;
			
			for(int j = 0; j < n; j++) {
				count1 += grid[i][j];
				count2 += grid[j][i];
			}
			
			int max = (count1 > count2) ? count1 : count2;
			
			sum.add(max);
		}
		
		int count = 0;
		
		for(int i = 0; i < n; i++) {
			count += grid[i][i];
		}
		sum.add(count);

		count = 0;

		for(int i = 0; i < n; i++) {
			count += grid[i][n-i-1];
		}
		sum.add(count);
		
		sum.sort((a,b) -> b - a);
		
		return sum.get(0);
		
	}
}
