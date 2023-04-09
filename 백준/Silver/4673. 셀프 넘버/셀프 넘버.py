num_list=list(range(1,10001))

def d(n):
  d_num=list(str(n)) # 자릿수를 분리해서 리스트에 담음
  d_num=list(map(int,d_num)) # 리스트에 담긴 문자열을 정수로 형변환
  init_num = n #생성자가 있는 수

  for i in d_num:
    init_num+=i #n+각 자릿수의 숫자 합 -> 다음 수

  return init_num

for n in range(1,10001):   
  if d(n) in num_list:
    num_list.remove(d(n)) #생성자가 있는 수(init_num) 삭제

for i in num_list:
    print(i)