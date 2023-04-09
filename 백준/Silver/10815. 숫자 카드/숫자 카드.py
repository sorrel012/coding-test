import sys
n = int(sys.stdin.readline())
num_list = set(map(int, sys.stdin.readline().split())) #n개
m = int(sys.stdin.readline())
checknum_list = list(map(int, sys.stdin.readline().split())) #m개

for i in checknum_list:
    if i in num_list:
        print(1, end = " ")
    else:
        print(0, end= " ")