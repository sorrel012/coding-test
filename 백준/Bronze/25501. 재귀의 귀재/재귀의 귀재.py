import sys

t = int(sys.stdin.readline())

def recursion(s, l, r) :
    if l >= r:
        return 1 #한 글자면 무조건 팰린드롬   
    elif s[l] != s[r]: return 0 #제일 앞글자와 제일 뒷글자가 같지 않으면 팰린드롬 x
    else:
        recursion_num[l+1] = 1
        return recursion(s, l+1, r-1)

def isPalindrome(s):
    recursion_num[0] = 1
    return recursion(s, 0, len(s)-1)


for i in range(t):
    s = sys.stdin.readline().rstrip()
    recursion_num = [0]*len(s)
    print(isPalindrome(s), recursion_num.count(1))