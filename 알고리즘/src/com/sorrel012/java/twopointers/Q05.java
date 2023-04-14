package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q05 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		
		System.out.print(solution(n));

	} //main

	private static int solution(int n) {
		
		int answer = 0;
		int count = 0;
		int lt = 1;
		
		for(int rt = 1; rt < n; rt++) {

			count += rt;
			
			while(count >= n) {
				
				if(count == n) {
					answer++;
				}
				
				count -= lt++;
			}
			
		}
		
		return answer;
	}
	
}
