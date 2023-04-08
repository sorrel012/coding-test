package com.sorrel012.stack_queue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Q08 {
    public static void main(String[] args) throws IOException {

         BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
         
         StringTokenizer st = new StringTokenizer(reader.readLine());
         
         int n = Integer.parseInt(st.nextToken());
         int m = Integer.parseInt(st.nextToken());
         
         int[] patients = new int[n];
         st = new StringTokenizer(reader.readLine());

         int cnt = 0;
         while(st.hasMoreTokens()) {
             patients[cnt++] = Integer.parseInt(st.nextToken());
         }
         
         System.out.print(solution(n, m, patients));

    } //main
    
    private static int solution(int n, int m, int[] patients) {
        
        int answer = 0;
        
        
        Queue<Person> q = new LinkedList<Person>();
        
        for(int i = 0; i < n; i++) {
            Person p = new Person();
            
            p.setId(i);
            p.setPriority(patients[i]);
            
            q.offer(p);
        }
        
        
        while(!q.isEmpty()) {

            Person tmp = q.poll();

            for(Person ps : q) {
                if(ps.getPriority() > tmp.getPriority()) {
                    q.offer(tmp);
                    tmp = null;
                    break;
                }
            }
            if(tmp != null) {
                answer++;
                if(tmp.getId() == m) {
                    return answer;
                }
            }

        }
        return answer;
    }
    
}

class Person {
    
    private int id;
    private int priority;
    
    public int getId() {
        return id;
    }
    
    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public void setId(int id) {
        this.id = id;
    }
    
}
