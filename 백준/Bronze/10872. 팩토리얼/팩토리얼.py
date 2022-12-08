import sys

n = int(sys.stdin.readline())

def factorial(n) :
    if (n > 1) :
        return n *  factorial(n-1)
    else :
        return 1 #종료 조건


print(factorial(n))
