package com.sorrel012.collections;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Q03 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		int[] arr = new int[n];
		
		st = new StringTokenizer(br.readLine());
		
		int c = 0;
		while(st.hasMoreTokens()) {
			arr[c++] = Integer.parseInt(st.nextToken());
		}
		
		for(int i : solution(n, k, arr)) {
			System.out.print(i + " ");
		}
		
	} //main
	
	private static ArrayList<Integer> solution(int n, int k, int[] arr) {
		
		ArrayList<Integer> answer = new ArrayList<>();
		
		int lt = 0;
		HashMap<Integer, Integer> map = new HashMap<>();
		
		for(int rt = 0; rt < k; rt++) {
			map.put(arr[rt], map.getOrDefault(arr[rt], 0)+1);
		}
		
		answer.add(map.size());
		
		for(int rt = k; rt < n; rt++) {
			map.put(arr[rt], map.getOrDefault(arr[rt], 0)+1);
			map.put(arr[lt], map.getOrDefault(arr[lt], 0)-1);
			
			if(map.get(arr[lt]) == 0) {
				map.remove(arr[lt]);
			}
			
			lt++;

			answer.add(map.size());
		}
		
		return answer;
	}
	
}
