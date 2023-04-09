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
		
		String answer = "YES";
		
		HashMap<Character, Integer> map = new HashMap<>();
		
		for(char c : str1.toCharArray()) {
			map.put(c, map.getOrDefault(c, 0)+1);
		}
		
		for(char c : str2.toCharArray()) {
			if(!map.containsKey(c) || map.get(c) == 0) {
				return "NO";
			}
			map.put(c, map.get(c)-1);
		}
		
		return answer;
		
	}
	
}
