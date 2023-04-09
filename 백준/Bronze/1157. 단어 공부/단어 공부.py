import sys
word = list(sys.stdin.readline().rstrip())


for i in range(len(word)):
    if 97 <=ord(word[i]) <= 122:
        word[i] = chr(ord(word[i])-32)
        
remove_word = list(set(word))

count_word=[]
max_word = remove_word[0]

for j in range(len(remove_word)):
    count_word.append(word.count(remove_word[j]))
    if word.count(remove_word[j]) > word.count(max_word):
        max_word = remove_word[j]

if count_word.count(max(count_word))  == 1:
    print(max_word)

else:
    print("?")


