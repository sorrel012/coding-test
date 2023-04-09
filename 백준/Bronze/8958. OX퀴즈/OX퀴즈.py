n = int(input())


for i in range(n):
    ox = input()
    score = 0
    continuescore = 0
    sum = 0
    for j in range(len(ox)):
        if ox[j] == 'O':
            score = 1
            continuescore += score
            sum += continuescore
        else :
            score = 0
            continuescore = 0
            
    print(sum)
        
    