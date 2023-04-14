package com.sorrel012.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q01 {
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

    } //main

    private static int[] solution(int n, int[] arr) {
                        
        for(int i = 0; i < n-1; i++) {
            for(int j = i+1; j < n; j++) {
                
                if(arr[i] > arr[j]) {
                    int tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
                
            }
        }
        
        return arr;
    }
}
