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
		
		while(lt < rt) {
			
			if( !Character.isAlphabetic(inputArr[lt]) ) {
				lt++;

			} else if( !Character.isAlphabetic(inputArr[rt]) ) {
				rt--;

			} else {
				char tmp = inputArr[lt];
				inputArr[lt] = inputArr[rt];
				inputArr[rt] = tmp;
				
				lt++;
				rt--;
			}
		}
		
		return String.valueOf(inputArr);
	}
	
}
