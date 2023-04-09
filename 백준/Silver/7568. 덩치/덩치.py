import sys

n = int(sys.stdin.readline())
xy_list = []
for i in range(n):
    xy_list.append(list(map(int,sys.stdin.readline().split())))

grade_list = []

for i in range(n):
    grade = 0
    for j in range(n):
        if xy_list[i][0] < xy_list[j][0] and xy_list[i][1] < xy_list[j][1] :
            grade += 1
    grade_list.append(grade+1)

for i in grade_list:
    print(i, end =" ")