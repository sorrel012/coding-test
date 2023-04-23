package com.sorrel012;

public class Q01 {

    public static void main(String[] args) {

        int a = 10;
        
        Static.b = a;
        Static st = new Static();
        
        System.out.println(Static.b++);
        System.out.println(st.b);
        System.out.println(a);
        System.out.println(st.a);
        

    } //main
    
}

class Static {
    
    int a = 20;
    static int b;
    
}
