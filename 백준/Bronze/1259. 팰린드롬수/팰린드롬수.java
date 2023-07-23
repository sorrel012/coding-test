import java.io.IOException;
import java.util.Scanner;

public class Main {
  
  public static void main(String[] args) throws IOException {

    Scanner sc = new Scanner(System.in);
    
    while (true) {      
      
      String num = sc.nextLine();
      
      if (num.equals("0")) {
        break;
      }
      
      String reverse = "";
      
      for (int i=num.length()-1; i>=0; i--) {
        reverse += num.charAt(i);
      }
      
      if (reverse.equals(num)) {
        System.out.println("yes");
      } else {
        System.out.println("no");
      }
      
    }

  } //main

}
