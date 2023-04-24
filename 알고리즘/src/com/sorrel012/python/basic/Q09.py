n = int(input())

rewards = []

for i in range(n):
    dice = [0]*6
    a = list(map(int, input().split()))
    for x in a:
        dice[x-1] += 1
    if max(dice) == 3 :
        rewards.append(10000+(dice.index(3)+1)*1000)
    elif max(dice) == 2 :
        rewards.append(1000+(dice.index(2)+1)*100)
    else :
        rewards.append(max(a)*100)
        
rewards.sort(reverse=True)

print(rewards[0])