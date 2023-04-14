package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Q02 {
	
	public static void main(String[] args) throws IOException {
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(reader.readLine());
		ArrayList<Integer> a = new ArrayList<Integer>();
				
		StringTokenizer st = new StringTokenizer(reader.readLine());
		while(st.hasMoreTokens()) {
			a.add(Integer.parseInt(st.nextToken()));
		}
		
		int m = Integer.parseInt(reader.readLine());
		ArrayList<Integer> b = new ArrayList<Integer>();
		
		st = new StringTokenizer(reader.readLine());
		while(st.hasMoreTokens()) {
			b.add(Integer.parseInt(st.nextToken()));
		}
		
		for(Integer i : solution(n, m, a, b)) {
			System.out.print(i + " ");
		}

	} //main
	
	private static ArrayList<Integer> solution(int n, int m, ArrayList<Integer> a, ArrayList<Integer> b) {
		
		Collections.sort(a);
		Collections.sort(b);

		
		ArrayList<Integer> answer = new ArrayList<Integer>();
		
		int p1 = 0;
		int p2 = 0;
		
		while(p1 < n && p2 < m) {
			
			if(a.get(p1) < b.get(p2)) {
				p1++;
			} else if(a.get(p1).equals(b.get(p2))) {
				answer.add(a.get(p1));
				p1++;
				p2++;
				
			} else {
				p2++;
			}
			
		}
		
		return answer;
		
	}

}
