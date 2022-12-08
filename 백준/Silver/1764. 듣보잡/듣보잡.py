import sys
n, m = map(int,sys.stdin.readline().split())

didnt_hear = []
didnt_see = []

for i in range(n):
    didnt_hear.append(sys.stdin.readline().rstrip())

for j in range(m):
    didnt_see.append(sys.stdin.readline().rstrip())

intersection = list(set(didnt_hear) &set(didnt_see))

print(len(intersection))

intersection.sort()

for i in intersection:
    print(i)