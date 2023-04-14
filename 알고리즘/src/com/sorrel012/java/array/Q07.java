package com.sorrel012.array;

import java.util.Scanner;

public class Q07 {
	
	public static void main(String[] args) {

		Q07 t = new Q07();
		
		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		String[] nums = scan.nextLine().split(" ");

		System.out.print(t.solution(n, nums));

	} //main

	private int solution(int n, String[] nums) {
		
		int answer = 0;
		int count = 0;
		
		for(int i = 0; i < n; i++) {
			
			if(nums[i].equals("1")) {
				count++;
				answer += count;
			} else {
				count = 0;
			}
			
		}
		
		return answer;
	}

}
