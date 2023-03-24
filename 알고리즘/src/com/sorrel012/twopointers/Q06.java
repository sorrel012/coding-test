package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q06 {
	
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		int[] arr = new int[n];
		
		st = new StringTokenizer(br.readLine());
		
		int i = 0;
		while(st.hasMoreTokens()) {
			arr[i++] = Integer.parseInt(st.nextToken());
		}
		
		System.out.print(solution(n, k, arr));

	} //main

	private static int solution(int n, int k, int[] arr) {
		
		int answer = 0;
		int count = 0;
		int lt = 0;
		
		for(int rt = 0; rt < n; rt++) {
			
			if(arr[rt] == 0) {
				count++;
			}
			
			while(count > k) {
				if(arr[lt++] == 0) {
					count--;
				}
			}
			
			answer = Math.max(answer, rt-lt+1);
			
		}
		
		return answer;
	}
	
}
