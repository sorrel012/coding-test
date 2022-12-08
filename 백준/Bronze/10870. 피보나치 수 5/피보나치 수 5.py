import sys

n = int(sys.stdin.readline())

def fib(n) :
    if n >= 2 :
        return fib(n-1) +  fib(n-2)
    if n == 1 :
        return 1
    if n == 0 :
        return 0


print(fib(n))