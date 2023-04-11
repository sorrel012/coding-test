package com.sorrel012.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
  
public class Q03 {
  
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
      
      for(int i = 1; i < n; i++) {
          int tmp = arr[i];
          int j;
          
          for(j = i-1; j >= 0; j--) {
              
              if(arr[j] > tmp) {
                  arr[j+1] = arr[j];
              } else {
                  break;
              }
              
          }
          arr[j+1] = tmp;
      }
      
      return arr;
  }
}