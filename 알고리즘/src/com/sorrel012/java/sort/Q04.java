package com.sorrel012.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
  
public class Q04 {
  
  public static void main(String[] args) throws IOException {
  
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

      StringTokenizer st = new StringTokenizer(reader.readLine());

      int s = Integer.parseInt(st.nextToken());
      int n = Integer.parseInt(st.nextToken());
      
      int[] arr = new int[n];
      
      st = new StringTokenizer(reader.readLine());
      
      int cnt = 0;
      while(st.hasMoreTokens()) {
          arr[cnt++] = Integer.parseInt(st.nextToken());
      }
      
      
      for(int i : solution(s, n, arr)) {
          System.out.print(i + " ");
      }
      
  }
  
  private static int[] solution(int s, int n, int[] arr) {
      
      int[] answer = new int[s];
      for(int x : arr) {
          int pos = -1;
          
          for(int i = 0; i < s; i++) {
              if(x == answer[i]) { //일치하는 수 o
                  pos = i; //일치하는 수의 인덱스 저장
                  break;
              }
          }
          
          if(pos == -1) { //일치하는 수 x
              for(int i = s-1; i > 0; i--) {
                  answer[i] = answer[i-1];
              }
              answer[0] = x;
          } else { //일치하는 수 o
              for(int i = pos; i > 0; i--) {
                  answer[i] = answer[i-1];
              }
              answer[0] = x;
          }
          
      }
      
      return answer;
  }
}