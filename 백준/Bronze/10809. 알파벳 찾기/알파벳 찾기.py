import sys

s = list(sys.stdin.readline().rstrip())

abc_list = []

for i in range(97,123): #97~122 소문자의 아스키 코드 값
    abc_list.append(chr(i)) #아스키 코드 값에 해당하는 소문자로 변환하여 리스트에 저장
    
k = [-1]*(len(abc_list)) #[-1,-1,.....,-1]

for i in range(26):
    if abc_list[i] in s:
        k[i] = s.index(abc_list[i])

print(*k)

    