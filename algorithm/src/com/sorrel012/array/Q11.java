package com.sorrel012.array;

import java.util.ArrayList;
import java.util.Scanner;

public class Q11 {

	public static void main(String[] args) {

		Q11 t = new Q11();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		int[][] students = new int[n][n];

		for(int i = 0; i < n; i++) {
			for(int j = 0; j < n; j++) {
				students[i][j] = scan.nextInt();
			}
		}
		
		System.out.print(t.solution(n, students));

	} //main

	private int solution(int n, int[][] students) {
		
		ArrayList<Integer> countClass = new ArrayList<Integer>();
		
		for(int i = 0; i < n; i++) {
			int count = 0;
			
			for(int j = 0; j < n; j++) {
				
				for(int k = 0; k < n; k++) {
					int standard = students[i][j];
					int compare = students[k][j];
					if(standard == compare) {
						count++;
					}
					
				}
				
			}
			countClass.add(count);
		}
		
		int max = Integer.MIN_VALUE;
		int answer = 0;
		
		for(int i = 0; i < n; i++) {
			if(countClass.get(i) > max) {
				max = countClass.get(i);
				answer = i+1;
			}
		}
		System.out.println(countClass);
		
		return answer;
	}
}