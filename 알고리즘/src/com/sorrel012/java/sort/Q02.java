package com.sorrel012.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
  
public class Q02 {
  
  public static void main(String[] args) throws IOException {
  
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
      
      int n = Integer.parseInt(reader.readLine());
      
      int[] arr = new int[n];
      
      StringTokenizer st = new StringTokenizer(reader.readLine());
      
      int cnt = 0;
      while(st.hasMoreTokens()) {
          arr[cnt++] = Integer.parseInt(st.nextToken());
      }
      
      for(int i : solution(n, arr)) {
          System.out.print(i + " ");
      }
      
  }
  
  private static int[] solution(int n, int[] arr) {
      
      for(int i = 0; i < n - 1 ; i++) {
          for(int j = 0; j < n - i - 1; j++) {
              
              if(arr[j] > arr[j+1]) {
                  int tmp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = tmp;
              }
              
          }
      }
      
      return arr;
  }
}