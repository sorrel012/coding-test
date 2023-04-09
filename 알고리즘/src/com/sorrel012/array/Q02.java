package com.sorrel012.array;

import java.util.Scanner;

public class Q02 {
	
	private int solution(int[] nums) {
		
		int answer = 1;
		
		int tmp = nums[0];
		
		for(int i = 1; i < nums.length; i++) {
			
			if(nums[i] > tmp) {
				answer++;
				tmp = nums[i];
			}
			
		}
		
		return answer;
		
	}
	
	public static void main(String[] args) {

		Q02 t = new Q02();
		
		Scanner scan = new Scanner(System.in);
		
		int count = scan.nextInt();
		
		int[] nums = new int[count];
		
		for(int i = 0; i < count; i++) {
			nums[i] = scan.nextInt();
		}
		
		System.out.println(t.solution(nums));

	} //main
	
}
