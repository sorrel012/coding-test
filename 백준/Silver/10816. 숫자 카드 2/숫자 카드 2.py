from collections import Counter
import sys
n = int(sys.stdin.readline())
num_list = list(map(int, sys.stdin.readline().split())) #n개
m = int(sys.stdin.readline())
checknum_list = list(map(int, sys.stdin.readline().split())) #m개

count = Counter(num_list)

for i in range(len(checknum_list)):
    if checknum_list[i] in count:
        print(count[checknum_list[i]], end=' ')
    else:
        print(0, end=' ')