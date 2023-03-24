package com.sorrel012.collections;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class Q01 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		
		String str = br.readLine();
		
		System.out.print(solution(n, str));
		
	} //main

	private static char solution(int n, String str) {
		
		char answer = ' ';
		
		HashMap<Character, Integer> map = new HashMap<>();
		
		for(char c : str.toCharArray()) {
			map.put(c, map.getOrDefault(c, 0)+1);
		}
		
		int max = Integer.MIN_VALUE;
		
		for(char c : map.keySet()) {
			if(map.get(c) > max) {
				max = map.get(c);
				answer = c;
			}
			
		}
		
		return answer;
	}
	
}
