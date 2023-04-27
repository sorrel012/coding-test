n = int(input())

for i in range(1, n+1):
    str = input().lower()
    reStr = ""
    for c in str:
        reStr = c + reStr
    if(str == reStr):
        print("#%d YES" %i)
    else:
        print("#%d NO" %i)
  
    