import sys

n, m = map(int,sys.stdin.readline().split())

card_num = list(map(int,sys.stdin.readline().split()))
card_num_sum = 0

for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            if card_num[i]+card_num[j]+card_num[k] <= m and card_num[i]+card_num[j]+card_num[k] > card_num_sum:
                card_num_sum = card_num[i]+card_num[j]+card_num[k]

print(card_num_sum)