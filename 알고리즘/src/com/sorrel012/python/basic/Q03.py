n, k = map(int, input().split())
li = list(map(int, input().split()))

sum_li = []

for i in range(n):
    for j in range(i+1, n):
        for l in range(j+1, n):
            sum = li[i] + li[j] + li[l]
            if(sum_li.count(sum) == 0) :
                sum_li.append(sum)
            
sum_li.sort(reverse=True)

print(sum_li[k-1])