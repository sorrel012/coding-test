import sys

n = int(sys.stdin.readline())
members_list = []

for i in range(n):
    a,b = sys.stdin.readline().split()
    members_list.append([int(a),b])

members_list.sort(key=lambda x:x[0])

for i in range(n):
    print(members_list[i][0], members_list[i][1])