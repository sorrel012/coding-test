n = int(input())

# for i in range(1, n+1):
#     str = input().lower()
#     reStr = ""
#     for c in str:
#         reStr = c + reStr
#     if(str == reStr):
#         print("#%d YES" %i)
#     else:
#         print("#%d NO" %i)

for i in range(1, n+1):
    s = input().lower()
    if s == s[::-1]:
        print("#%d YES" %i)
    else :
        print("#%d NO" %i)