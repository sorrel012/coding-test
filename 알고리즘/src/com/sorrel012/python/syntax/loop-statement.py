# a = range(1, 11)
# print(list(a))

#============================for============================
# for i in range(10):
#     print("hello"+str(i))
    
# print()
    
# for i in range(1, 11):
#     print("hello"+str(i))
    
# print()

# for i in range(10, 0, -1):
#     print("hello"+str(i))

#============================while============================

# i = 1
# while i <= 10:
#     print(i)
#     i += 1

# print()

# i = 10
# while i > 0:
#     print(i)
#     i -= 1

#============================break, continue============================    
# i = 1
# while True:
#     print(i)
#     if i == 5:
#         break
#     i += 1

# for i in range(1, 11):
#     if i%2 == 0: 
#         continue #짝수는 건너뛰기
#     print(i)    
    
#============================for else============================

# for i in range(1, 11):
#     print(i)
#     if i > 15 :
#         break
# else: #정상 종료되면 실행, break되면 실행 x
#     print(11)
    

#============================nested for============================ 

# for i in range(5):
#     print("i:", i, end=' ')
#     for j in range(5):
#         print("j:", j, end=' ')
#     print()


# for i in range(5):
#     for j in range(i+1):
#         print("*", end=' ')
#     print()

for i in range(5):
    for j in range(5-i):
        print("*", end=' ')
    print()
