/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package weeklyex;

import java.util.ArrayList;

/**
 * This is week 27 exercise. The task is to take a string as input
 * and transform it to a list with each word added in it's own
 * index. Don't use string methods to archive this.
 */
public class WeeklyEx {
    
    public static void createList(String input) {
        ArrayList<String> list = new ArrayList();
        String word = "";
        for (int i=0; i<input.length(); i++) {
            switch(input.charAt(i)) {
                case ' ': 
                    if (!"".equals(word)) list.add(word);
                    word = "";
                    break;
                default:
                    word += input.charAt(i);
            }            
        }
        if (!"".equals(word)) list.add(word);
        System.out.println(list.toString());
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String string1 = "Viikko harjoitus viikolle numero 27";
        
        createList(string1);
    }
    
}
