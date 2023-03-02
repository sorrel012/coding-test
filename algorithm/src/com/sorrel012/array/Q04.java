package com.sorrel012.array;

import java.util.Scanner;

public class Q04 {

	public static void main(String[] args) {

		Q04 t = new Q04();
		
		Scanner scan = new Scanner(System.in);
		
		int num = scan.nextInt();
		
		for(int i : t.solution(num)) {
			System.out.print(i + " ");
		}

	} //main

	private int[] solution(int num) {
		
		int[] answer = new int[num];
		
		answer[0] = 1;
		answer[1] = 1;
		
		for(int i = 1; i < num-1; i++) {
			answer[i+1] = answer[i] + answer[i-1];
		}
		
		return answer;
	}
	
}
