import sys

number = list(map(int, sys.stdin.readline().split()))
number_square = []

for i in range(5):
    number_square.append(number[i]*number[i])

print(sum(number_square)%10)