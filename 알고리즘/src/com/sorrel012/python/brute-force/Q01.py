n = int(input())

def binary(x):
    if x > 0:
        mod = x % 2
        x = x // 2
        binary(x)
        print(mod, end="")

binary(n)