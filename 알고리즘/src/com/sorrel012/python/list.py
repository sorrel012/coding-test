import random as r

a = []
# print(a)

b = []
# print(b)

a = [1, 2, 3, 4, 5]
# print(a)
# print(a[0])
# print()

b = list(range(1, 11))
# print(b)
# print()

c = a + b
# print(c)

# a.append(6)
# print(a)
# print()

# a.insert(3, 7)
# print(a)
# print()

# a.pop()
# print(a)
# print()

# a.pop(3)
# print(a)
# print()

# a.remove(4)
# print(a)
# print()

# print(a.index(5))

# a = list(range(1, 11))
# print(sum(a))
# print(max(a))
# print(min(a))
# print()

# r.shuffle(a)
# print(a)
# print()

# a.sort()
# print(a)

# a.sort(reverse=True)
# print(a)

a = [23, 12, 36, 53, 19]
print(a[:3])
print(a[1:4])
print(len(a))
print()

for i in range(len(a)):
    print(a[i], end = ' ')
print()

for x in a:
    print(x, end = ' ')
print()

for x in enumerate(a): #인덱스 번호까지 함꼐 튜플 형식으로 출력 가능
    print(x)
print()

for x in enumerate(a):
    print(x[0], x[1])
print()

for index, value in enumerate(a):
    print(index, value)
print()

if all(60 > x for x in a):
    print("모두 60보다 작습니다.")
if any(20 > x for x in a):
    print("20보다 작은 수가 있습니다.")
print()