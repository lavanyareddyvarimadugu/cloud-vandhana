import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
      
        input = input.replaceAll(" ", "").toLowerCase();
        
        
        HashSet<Character> charSet = new HashSet<>();


        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                charSet.add(c);
            }
        }

     
        return charSet.size() == 26;
    }
}
