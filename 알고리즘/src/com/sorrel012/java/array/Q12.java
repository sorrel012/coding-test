package com.sorrel012.array;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Q12 {
	
	public static void main(String[] args) {

		Q12 t = new Q12();

		Scanner scan = new Scanner(System.in);

		int n = scan.nextInt();
		int m  = scan.nextInt();
		
		List<List<Integer>> students = new ArrayList<List<Integer>>();

		
		for(int i = 0; i < m; i++) {
			List<Integer> tmp = new ArrayList<Integer>();
			
			for(int j = 0; j < n; j++) {
				tmp.add(scan.nextInt());
			}
			
			students.add(tmp);
		}
		
		System.out.print(t.solution(m, n, students));

	} //main

	private int solution(int m, int n, List<List<Integer>> students) {
		
		int answer = 0;
		
		for(int i = 1; i <= n; i++) {		//학생1
			
			for(int j = 1; j <= n; j++) {	//학생2
				
				int count = 0;
				for(int k = 0; k < m; k++) {//테스트
					
					int s1 = students.get(k).indexOf(i);
					int s2 = students.get(k).indexOf(j);
					
					if(s1 < s2) {
						count++;
					}
					
				}
				
				if(count == m) {
					answer++;
				}
				
			}
			
		}
		
		return answer;
	}

}
