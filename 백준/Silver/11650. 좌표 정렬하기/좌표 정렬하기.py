import sys

n = int(sys.stdin.readline())
xy_list = []

for i in range(n):
    xy_list.append(list(map(int,sys.stdin.readline().split())))

xy_list.sort()

for i in range(len(xy_list)-1):
    if xy_list[i][0] == xy_list[i+1][0]:
        if xy_list[i][1] >= xy_list[i+1][1]:
            xy_list[i], xy_list[i+1] = xy_list[i+1], xy_list[i]            
        else:
            pass

for i in range(n):
    print("%d %d" %(xy_list[i][0], xy_list[i][1]))
