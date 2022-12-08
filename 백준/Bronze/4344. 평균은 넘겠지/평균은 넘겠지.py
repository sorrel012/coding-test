c = int(input())
for i in range(c):
    sum = 0
    count = 0
    average = 0
    percent = 0
    scorelist = list(map(int,input().split()))
    for j in scorelist[1:]:
        sum += j
    average = sum / scorelist[0]
    for k in scorelist[1:]:
        if k > average :
            count +=1
    percent = count/scorelist[0]*100

    print("%0.3f%s" % (percent, "%"))
    
