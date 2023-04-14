package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Q01 {
	
	private ArrayList<Integer> solution(int count1, int count2, ArrayList<Integer> list1, ArrayList<Integer> list2) {
		
		ArrayList<Integer> answer = new ArrayList<Integer>();
		
		int p1 = 0;
		int p2 = 0;
		
		while(p1 < count1 && p2 < count2) {
			if(list1.get(p1) < list2.get(p2)) {
				answer.add(list1.get(p1++));
			} else {
				answer.add(list2.get(p2++));
			}
		}
		
		while(p1 < count1) {
			answer.add(list1.get(p1++));
		}
		
		while(p2 < count2) {
			answer.add(list2.get(p2++));
		}
				
		return answer;
		
	}
	
	public static void main(String[] args) throws IOException {

		Q01 t = new Q01();
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		int count1 = Integer.parseInt(reader.readLine());
		ArrayList<Integer> list1 = new ArrayList<Integer>();
		
		StringTokenizer st = new StringTokenizer(reader.readLine());
		while(st.hasMoreTokens()) {
			list1.add(Integer.parseInt(st.nextToken()));
		}

		int count2 = Integer.parseInt(reader.readLine());
		ArrayList<Integer> list2 = new ArrayList<Integer>();

		st = new StringTokenizer(reader.readLine());
		while(st.hasMoreTokens()) {
			list2.add(Integer.parseInt(st.nextToken()));
		}
		
		for(Integer i : t.solution(count1, count2, list1, list2)) {
			System.out.print(i + " ");
		}
		
	} //main
	
}
