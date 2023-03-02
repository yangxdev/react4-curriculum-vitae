import java.util.Stack;

class Solution {
  public int singleNumber(int[] nums) {
        int[] res = new int[nums.length];
        int i = 0;
        res[i] = nums[i];
        for(i = 1; i < nums.length; i++) {
            if(Array.asList(res).indexOf(nums[i]) == -1) {
                res[i] = nums[i];
            }
        }
        return res[0];
    }

  public String removeDuplicates(String s) {
    Stack stk = new Stack();
    for (int i = s.length(); i >= 0; i--) {
      if (
        !stk.empty() && (stk.peek().toString().charAt(0) == s.charAt(i))
      ) stk.pop(); else stk.push(s.charAt(i));
    }
    String ans = "";
    while (!stk.empty()) {
      ans += stk.pop();
    }
    return ans;
  }

  public String longestCommonPrefix(String[] strs) {
    char arr[] = new char[strs.length];
    int cnt = 0, maxTot = 0;
    for (int i = 0; i < strs.length; i++) {
      for (int j = 0; j < strs.length; j++) {
        if (i != j) {
          int res = confront(strs[i], strs[j]);
          if (maxTot < res) maxTot = res;
        }
      }
    }
    //return maxTot in string format
    return strs[0].substring(0, maxTot);
  }

  public static int confront(String s1, String s2) {
    //int cnt = 0, max = 0;
    //for(int i = 0; i < s1.length(); i++) {
    //    for(int j = 0; j < s2.length(); j++) {
    //        for(int x = 0; x < smallestSize(s1, s2); x++) {
    //            if(s1[i].charAt(x) == s2[j].charAt(x))
    //                cnt++;
    //            else
    //                x = smallestSize(s1,s2);
    //        }
    //    }
    //    if (max < cnt)
    //        max = cnt;
    //}
    int cnt = 0, max = 0, pos = 0;
    for (int i = 0; i < s1.length(); i++) {
      for (int j = 0; j < s2.length(); j++) {
        if (s1.charAt(pos) == s2.charAt(pos)) cnt++; else if (max < cnt) max =
          cnt;
      }
    }
    return max;
  }

  public static int smallestSize(String s1, String s2) {
    if (s1.length() < s2.length()) return s1.length(); else return s2.length();
  }
}
