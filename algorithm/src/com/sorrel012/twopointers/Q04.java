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
		int sum = 0;
		int lt = 0;
		
		for(int rt = 0; rt < n; rt++) {
			
			sum += list.get(rt);
			
			if(sum == m) {
				answer++;
			}
			
			while(sum >= m) {
				
				sum -= list.get(lt++);
				if(sum == m) {
					answer++;
				}
				
			}
			
		}
		
		return answer;
		
	}
}
