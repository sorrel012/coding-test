package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Q04 {
	
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		ArrayList<Integer> list = new ArrayList<>();
		
		st = new StringTokenizer(br.readLine());
		
		while(st.hasMoreTokens()) {
			list.add(Integer.parseInt(st.nextToken()));
		}
		
		System.out.print(solution(n, m, list));
				
	}//main

	private static int solution(int n, int m, ArrayList<Integer> list) {
		
		int answer = 0;
		
		for(int i = 0; i < n; i++) {
			
			int count = 0;
			count += list.get(i);
			
			for(int j = i+1; j < n && count <= m; j++) {
				count += list.get(j);
				
				if(count == m) {
					answer++;
					break;
				}
				
			}
			
		}
		
		return answer;
		
	}
}
