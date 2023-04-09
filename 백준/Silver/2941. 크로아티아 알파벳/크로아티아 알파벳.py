import sys
a = sys.stdin.readline().rstrip()

cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

cnt = 0

for i in cro:
    cnt += a.count(i)
    a = a.replace(i,",")

a = a.replace(",","")

cnt += len(a)
print(cnt)