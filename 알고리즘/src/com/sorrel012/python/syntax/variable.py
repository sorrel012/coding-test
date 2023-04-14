a = 1
A = 2
print(a, A)
print()

a, b, c = 3, 2, 1
print(a, b, c, "\n")

#값 교환

a, b = 10, 20
print(a, b)

a, b = b, a
print(a, b, "\n")


# c, d = input("숫자를 입력하세요 : ").split()
# c = int(c)
# d = int(d)
# print(c + d)


c, d = map(int, input("숫자를 입력하세요 : ").split())
print(c+d)
print(c-d)
print(c*d)
print(c/d)
print(c//d)
print(c%d)
print(c**d)

print()

a=4.3
b=5
c=a+b
print(type(c), c)