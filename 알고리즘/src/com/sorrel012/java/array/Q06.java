package com.sorrel012.array;

import java.util.ArrayList;
import java.util.Scanner;

public class Q06 {

	public static void main(String[] args) {

		Q06 t = new Q06();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		scan.nextLine();
		String[] nums = scan.nextLine().split(" ");

		for(Integer i : t.solution(nums)) {
			System.out.print(i + " ");
		}

	} //main

	private ArrayList<Integer> solution(String[] nums) {

		ArrayList<Integer> answer = new ArrayList<Integer>();

		for(String str : nums) {
			int num = Integer.parseInt(new StringBuilder(str).reverse().toString());
			boolean prime = true;
			
			for(int j = 2; j < num; j++) {
				if(num % j == 0) {
					prime = false;
				}
			}
			
			if(prime && num != 1) {
				answer.add(num);
			}
			
		}

		return answer;
	}

}
