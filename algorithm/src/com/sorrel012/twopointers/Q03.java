package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Q03 {
	
	public static void main(String[] args) throws IOException {

		BufferedReader rd = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(rd.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		ArrayList<Integer> list = new ArrayList<>();

		st = new StringTokenizer(rd.readLine());
		while(st.hasMoreTokens()) {
			list.add(Integer.parseInt(st.nextToken()));
		}
		
		System.out.print(soluion(n, k, list));
		
	} //main

	private static int soluion(int n, int k, ArrayList<Integer> list) {
		
		int p1 = 0; //n개의 수
		int p2 = 0; //k만큼 더하기
		
		int max = Integer.MIN_VALUE;
		int tmp = 0;
		
		while(p1 < n-k) {
			
			tmp += list.get(p2);
			p2++;
			
			if(p2 == p1+k) {
				p2 = ++p1;
				if(tmp > max) {
					max = tmp;
				}
				tmp = 0;
			}
			
		}
		
		return max;
	}
}
