def solution(my_string, n):
    answer = ''
    
    str_len = len(my_string)
    
    for i in range(str_len - 1, str_len - n - 1, -1):
        answer = my_string[i] + answer    
    
    return answer