package com.sorrel012.collections;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class Q02 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String str1 = br.readLine();
		String str2 = br.readLine();
		
		System.out.print(solution(str1, str2));
		
	} //main

	private static String solution(String str1, String str2) {
		
		String answer = "NO";
		
		HashMap<Character, Integer> map1 = new HashMap<>();
		HashMap<Character, Integer> map2 = new HashMap<>();
		
		for(char c : str1.toCharArray()) {
			map1.put(c, map1.getOrDefault(c, 0)+1);
		}
		
		for(char c : str2.toCharArray()) {
			map2.put(c, map2.getOrDefault(c, 0)+1);
		}
		
		if(map1.equals(map2)) {
			answer = "YES";
		}
		
		return answer;
	}
	
}
