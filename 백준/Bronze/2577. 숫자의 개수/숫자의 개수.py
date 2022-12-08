import sys

num1 = int(sys.stdin.readline())
num2 = int(sys.stdin.readline())
num3 = int(sys.stdin.readline())

result = str(num1 * num2 * num3)
result_list = []


for i in range(len(result)):
    result_list.append(int(result[i]))

for i in range(10):
    print(result_list.count(i))
