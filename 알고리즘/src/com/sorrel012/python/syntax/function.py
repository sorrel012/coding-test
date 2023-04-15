# def add(a, b):
#     return a+b

# sum = add(2, 3)
# print(sum)
# print()

# def calc(a, b):
#     c = a+b
#     d = a-b
#     return c,d 

# print(calc(5,2))

def isPrime(x):
    for i in range(2, x):
        if(x%2 == 0):
            return False
        else:
            return True



a = [12, 13, 7, 9, 19]

for x in a:
    print(x, isPrime(x))
