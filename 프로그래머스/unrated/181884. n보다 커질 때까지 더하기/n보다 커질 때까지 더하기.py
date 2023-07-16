def solution(numbers, n):
    answer = 0
    
    cnt = 0
    while answer <= n :
        answer += numbers[cnt]
        cnt +=1 
    
    return answer