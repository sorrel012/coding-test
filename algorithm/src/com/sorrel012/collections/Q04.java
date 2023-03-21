package com.sorrel012.collections;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;

public class Q04 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String s = br.readLine();
		String t = br.readLine();
		
		System.out.print(solution(s, t));
		
	} //main
	
	private static int solution(String s, String t) {

		int answer = 0;
		char[] arr = s.toCharArray();
		ArrayList<Character> str = new ArrayList<>();


		for(int rt = 0; rt < t.length(); rt++) {
			str.add(arr[rt]);
		}

		if(anagram(str.toString(), t)) {
			answer += 1;
		}

		for(int rt = t.length(); rt < s.length(); rt++) {

			str.add(arr[rt]);
			str.remove(0);

			if(anagram(str.toString(), t)) {
				answer += 1;
			}

		}

		return answer;
	}
//
//	private static int solution(String s, String t) {
//
//		int answer = 0;
//		int lt = 0;
//		int rt = t.length()-1;
//
//		while(rt < s.length()) {
//
//			String txt = "";
//
//			for(int i = lt; i <= rt; i++) {
//				txt += s.charAt(i);
//			}
//
//			lt++;
//			rt++;
//
//			if(anagram(txt, t)) {
//				answer += 1;
//			}
//
//		}
//
//		return answer;
//	}

	private static boolean anagram(String str, String t) {
				
		HashMap<Character, Integer> map = new HashMap<>();
		
		for(char c : str.toCharArray()) {
			map.put(c, map.getOrDefault(c, 0)+1);
		}
		
		for(char c : t.toCharArray()) {
			if(!map.containsKey(c) || map.get(c) == 0) {
				return false;
			}
			map.put(c, map.get(c)-1);
		}
		
		return true;
		
	}
}