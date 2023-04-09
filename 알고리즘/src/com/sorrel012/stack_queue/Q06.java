package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Q06 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		System.out.print(solution(n, k));
		
	} //main
	
	private static int solution(int n, int k) {
		
		int answer = 0;

		Queue<Integer> queue = new LinkedList<Integer>();
		
		for(int i = 1; i <= n; i++) {
			queue.offer(i);
		}
		
		int cnt = 1;
		while(queue.size() > 1) {
						
			if(cnt % k == 0) {
				queue.poll();
			} else {
				queue.offer(queue.poll());
			}
			
			cnt++;
		}
		
		answer = queue.peek();
		
		return answer;

	}
	
}