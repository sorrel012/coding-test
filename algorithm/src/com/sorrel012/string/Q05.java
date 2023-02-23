package com.sorrel012.string;

import java.util.Scanner;

public class Q05 {

	public static void main(String[] args) {

		Q05 t = new Q05();
		
		Scanner scan = new Scanner(System.in);
		
		String input = scan.nextLine();

		System.out.print(t.solution(input));
		
	} //main

	private String solution(String input) {
		
		char[] inputArr = input.toCharArray();
		
		int lt = 0;
		int rt = inputArr.length - 1;
		
		while(lt <= rt) {
			
			if( (inputArr[lt] >= 'a' && inputArr[lt] <= 'z' || inputArr[lt] >= 'A' && inputArr[lt] <= 'Z')
					&& (inputArr[rt] >= 'a' && inputArr[rt] <= 'z' || inputArr[rt] >= 'A' && inputArr[rt] <= 'Z') ) {
				
				char tmp = inputArr[lt];
				inputArr[lt] = inputArr[rt];
				inputArr[rt] = tmp;
				
			}
			
			lt++;
			rt--;
			
		}
		
		return new String(inputArr);
	}
	
}
