def solution(myString):
    answer = ''
    
    for s in myString :
        if ord(s) < 108 :
            answer += 'l'
        else :
            answer += s
    
    return answer