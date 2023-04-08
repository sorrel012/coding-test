package com.sorrel012.array;

import java.util.Scanner;

public class Q05 {

	public static void main(String[] args) {

		Q05 t = new Q05();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();

		System.out.println(t.solution(n));

	} //main

	private int solution(int n) {
		
		int answer = 0;
		
		int[] ch = new int[n+1];
		
		for(int i = 2; i <= n; i++) {
			if(ch[i] == 0) {
				answer++;
				for(int j = i; j <=n; j = j+i) {
					ch[j] = 1;
				}
			}
		}
		
		return answer;
	}
	
}
