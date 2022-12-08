import sys

n = sys.stdin.readline().rstrip()
num_list = []

for i in range(len(n)):
    num_list.append(n[i])

num_list.sort()
num_list.reverse()

for i in num_list:
    print(i, end='')
