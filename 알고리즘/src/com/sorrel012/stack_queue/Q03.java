package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Q03 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		
		int[][] board = new int[n][];
		
		for(int i = 0; i < n; i++) {
			
			int[] tmp = new int[n];
			
			StringTokenizer st = new StringTokenizer(br.readLine());
			
			int cnt = 0;
			while(st.hasMoreTokens()) {
				tmp[cnt++] = Integer.parseInt(st.nextToken());
			}
			
			board[i] = tmp;
			
		}
		
		int m = Integer.parseInt(br.readLine());
		
		int[] moves = new int[m];
		
		StringTokenizer st = new StringTokenizer(br.readLine());

		int cnt = 0;
		while(st.hasMoreTokens()) {
			moves[cnt++] = Integer.parseInt(st.nextToken());
		}
		
		System.out.print(solution(n, board, m , moves));
		
	} //main
	
	private static int solution(int n, int[][] board, int m, int[] moves) {

		int answer = 0;

		Stack<Integer> st = new Stack<>();
		
		for(int i = 0; i < m; i++) {
			
			int column = moves[i]-1;
			int num = 0;
			
			int row = 0;
			while(true) {
				if(board[row][column] != 0) {
					num = board[row][column];
					board[row][column] = 0;
					break;
				}
				if(row == n-1) {
					break;
				}
				row++;
			}
			
			if(!st.isEmpty() && num == st.peek()) {
				answer++;
				st.pop();
			} else if(num != 0){
				st.push(num);
			}
			
		}

		return answer*2;
	}
	
}
