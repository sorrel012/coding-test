package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Q07 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String EssentialSub = br.readLine();
		String subPlan = br.readLine();
		
		System.out.print(solution(EssentialSub, subPlan));
		
	} //main
	
	private static String solution(String EssentialSub, String subPlan) {
		
		String answer ="YES";
		
		Queue<Character> q1 = new LinkedList<Character>();
		
		for(char c : EssentialSub.toCharArray()) {
			q1.offer(c);
		}
		
		for(char c : subPlan.toCharArray()) {
			
			if(q1.contains(c) && q1.peek() != c) {
				answer = "NO";
				break;
			} else if(q1.contains(c) && q1.peek() == c) {
				q1.poll();
			}
			
		}
		
		if(!q1.isEmpty()) {
			answer = "NO";
		}
		
		return answer;
	}
	
}