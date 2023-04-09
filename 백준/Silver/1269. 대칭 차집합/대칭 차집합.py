import sys
n, m = map(int,sys.stdin.readline().split())

a = set(list(map(int,sys.stdin.readline().split())))
b = set(list(map(int,sys.stdin.readline().split())))

dif_set1 = a-b
dif_set2 = b-a

union = dif_set1|dif_set2

print(len(union))