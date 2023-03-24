package com.sorrel012.array;

import java.util.Scanner;

public class Q08 {
	
	public static void main(String[] args) {

		Q08 t = new Q08();
		
		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		String[] nums = scan.nextLine().split(" ");

		for(int i : t.solution(n, nums)) {
			System.out.print(i + " ");
		}

	} //main

	private int[] solution(int n, String[] nums) {
		
		int[] answer = new int[n];
		
		for(int i = 0; i < n; i++) {
			int count = 1;
			int num1 = Integer.parseInt(nums[i]);
			
			for(int j = 0; j < n; j++) {
				int num2 = Integer.parseInt(nums[j]);
				
				if(num2 > num1) {
					count++;
				}
				
			}
			answer[i] = count;
			
		}
		
		return answer;
	}

}
