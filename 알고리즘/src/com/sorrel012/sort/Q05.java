package com.sorrel012.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
  
public class Q05 {
  
  public static void main(String[] args) throws IOException {
  
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

      StringTokenizer st = new StringTokenizer(reader.readLine());

      int n = Integer.parseInt(st.nextToken());
      
      int[] arr = new int[n];
      
      st = new StringTokenizer(reader.readLine());
      
      int cnt = 0;
      while(st.hasMoreTokens()) {
          arr[cnt++] = Integer.parseInt(st.nextToken());
      }
      
      System.out.print(solution(n, arr));
      
  }
  
  private static String solution(int n, int[] arr) {
            
      for(int i = 0; i < n-1; i++) {
          for(int j = i + 1; j < n; j++) {
              
              if(arr[i] == arr[j]) {
                  return "D";
              }
          }
      }
      
      return "U";
  }
}