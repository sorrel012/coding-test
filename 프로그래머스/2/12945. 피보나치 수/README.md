# [level 2] 피보나치 수 - 12945

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12945) 

### 성능 요약

메모리: 33.87 MB, 시간: 0.45 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0 / 100.0

### 제출 일자

2024년 2월 21일 12:36:35
<br>

### 문제 설명
피보나치 수는 `F(0) = 0, F(1) = 1`일 때, `1` 이상의 `n`에 대하여 `F(n) = F(n-1) + F(n-2)` 가 적용되는 수 입니다.

예를 들어

- `F(2) = F(0) + F(1) = 0 + 1 = 1`
- `F(3) = F(1) + F(2) = 1 + 1 = 2`
- `F(4) = F(2) + F(3) = 1 + 2 = 3`
- `F(5) = F(3) + F(4) = 2 + 3 = 5`

와 같이 이어집니다.

`2` 이상의 `n`이 입력되었을 때, `n`번째 피보나치 수를 `1234567`으로 나눈 나머지를 리턴하는 함수, `solution`을 완성해 주세요.

### 제한 사항
- `n`은 `2` 이상 `100,000` 이하인 자연수입니다.

### 입출력 예
| n   | return |
| --- | ------ |
| 3   | 2      |
| 5   | 5      |

## 입출력 예 설명
피보나치수는 `0`번째부터 `0, 1, 1, 2, 3, 5, ...` 와 같이 이어집니다.
