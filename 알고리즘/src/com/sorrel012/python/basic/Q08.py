n = int(input())

a = list(map(int, input().split()))

def reverse(x):
    txt = ''    
    for c in str(x):
        txt = c + txt
        
    return int(txt)
    
def isPrime(x):
    a = [0]*(x+1)
    
    for i in range(2, x) :
        if(x%i == 0):
            return False       
                         
    return True

for x in a:
    if(reverse(x) != 1 & isPrime(reverse(x)) == True):
        print(reverse(x), end=' ')