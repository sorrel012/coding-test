package com.sorrel012.twopointers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Q01 {
	
	private List<Integer> solution(int count1, int count2, String[] array1, String[] array2) {
		
		List<Integer> answer = new ArrayList<Integer>();
		
		List<String> list1 = Arrays.asList(array1);
		List<String> list2 = Arrays.asList(array2);
		
		for(String s : list1) {
			answer.add(Integer.parseInt(s));
		}
		
		for(String s : list2) {
			answer.add(Integer.parseInt(s));
		}
		
		Collections.sort(answer);
				
		return answer;
		
	}
	
	public static void main(String[] args) throws IOException {

		Q01 t = new Q01();
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		int count1 = Integer.parseInt(reader.readLine());
		String[] array1 = new String[count1];
		
		array1 = reader.readLine().split(" ");
		
		int count2 = Integer.parseInt(reader.readLine());
		String[] array2 = new String[count2];
		
		array2 = reader.readLine().split(" ");
		
		for(Integer i : t.solution(count1, count2, array1, array2)) {
			System.out.print(i + " ");
		}
		
	} //main
	
}
