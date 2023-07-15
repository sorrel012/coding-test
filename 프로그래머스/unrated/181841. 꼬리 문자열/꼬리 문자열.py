def solution(str_list, ex):
    answer = ''
    
    for str in str_list :
        if str.count(ex) == 0 :
            answer += str
    
    return answer