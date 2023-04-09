package com.sorrel012.collections;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.StringTokenizer;
import java.util.TreeSet;

public class Q05 {

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
	
//	private static int solution(int n, int k, int[] arr) {
//
//		int answer = 0;
//		ArrayList<Integer> sum = new ArrayList<>();
//
//		for(int i = 0; i < n; i++) {
//
//			for(int j = i+1; j < n; j++) {
//				for(int l = j+1; l < n; l++) {
//					int cnt = 0;
//					cnt += arr[i];
//					cnt += arr[j];
//					cnt += arr[l];
//
//					if(!sum.contains(cnt)) {
//						sum.add(cnt);
//					}
//
//				}
//			}
//
//		}
//
//		sum.sort((n1,n2) -> n2 - n1);
//
//		if(sum.size() >= k-1) {
//			answer = sum.get(k-1);
//		} else {
//			answer = -1;
//		}
//
//		return answer;
//	}
	
	private static int solution(int n, int k, int[] arr) {

		TreeSet<Integer> sum = new TreeSet<>(Collections.reverseOrder());
		
		for(int i = 0; i < n; i++) {
			
			for(int j = i+1; j < n; j++) {
				for(int l = j+1; l < n; l++) {
					int cnt = 0;
					cnt += arr[i];
					cnt += arr[j];
					cnt += arr[l];
					
					sum.add(cnt);
					
				}
			}
			
		}
		
		int cnt = 1;
		for(int i : sum) {
			if(cnt++ == k) {
				return i;
			}
			
		}
				
		return -1;
	}
}