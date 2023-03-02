package com.sorrel012.array;

import java.util.Scanner;

public class Q05 {

	public static void main(String[] args) {

		Q05 t = new Q05();

		Scanner scan = new Scanner(System.in);

		int num = scan.nextInt();

		System.out.println(t.solution(num));

	} //main

	private int solution(int num) {
		
		int answer = 2;
		
		int[] ch = new int[num+1];
		
		for(int i = 2; i <= num; i++) {
			if(ch[i] == 0) {
				answer++;
				for(int j = i; j <=num; j = j+i) {
					ch[j] = 1;
				}
			}
		}
		
		return answer;
	}
	
}
