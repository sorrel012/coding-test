package com.sorrel012.array;

import java.util.ArrayList;
import java.util.Scanner;

public class Q01 {
	
	private ArrayList<Integer> solution(int[] nums) {
		
		ArrayList<Integer> answer = new ArrayList<Integer>();
		
		answer.add(nums[0]);
		
		for(int i = 1; i < nums.length; i++) {
			
			if(nums[i] > nums[i-1]) {
				answer.add(nums[i]);
			}
			
		}
		return answer;
		
	}
	
	public static void main(String[] args) {

		Q01 t = new Q01();
		
		Scanner scan = new Scanner(System.in);
		
		int count = scan.nextInt();
		
		int[] nums = new int[count];
		
		for(int i = 0; i < count; i++) {
			nums[i] = scan.nextInt();
		}
		
		for(int i : t.solution(nums)) {
			System.out.print(i + " ");
		}

	} //main
	
}
