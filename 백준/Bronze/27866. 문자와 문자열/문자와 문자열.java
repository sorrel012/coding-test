import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char[] s = scanner.next().toCharArray();
        int i = scanner.nextInt();

        System.out.println(s[i-1]);
    }
}