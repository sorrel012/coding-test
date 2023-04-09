import sys

t = int(sys.stdin.readline())

zero_cnt = [1, 0, 1]
one_cnt = [0, 1, 1]

num = []

for i in range(t):
    num.append(int(sys.stdin.readline()))
    
def fibonacci(n):
    if n >= len(zero_cnt) :
        for i in range(len(zero_cnt), n+1):
            zero_cnt.append(zero_cnt[i-1]+zero_cnt[i-2])
            one_cnt.append(one_cnt[i-1]+one_cnt[i-2])
    print(zero_cnt[n], one_cnt[n])


for i in range(t):
    fibonacci(num[i])
            