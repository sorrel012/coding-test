package com.sorrel012.array;

import java.util.Scanner;

public class Q01 {
	
	private String solution(int[] nums) {
		
		String answer = String.valueOf(nums[0]) + " ";
		
		for(int i = 1; i < nums.length; i++) {
			
			if(nums[i] > nums[i-1]) {
				answer = new StringBuilder(answer).append(String.valueOf(nums[i])).append(" ").toString();
			}
			
		}
		return answer.trim();
		
	}
	
	public static void main(String[] args) {

		Q01 t = new Q01();
		
		Scanner scan = new Scanner(System.in);
		
		int count = scan.nextInt();
		
		int[] nums = new int[count];
		
		for(int i = 0; i < count; i++) {
			nums[i] = scan.nextInt();
		}
		
		System.out.print(t.solution(nums));

	} //main
	
}
