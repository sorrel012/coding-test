from collections import deque

MAX = 10000

ch = [0]*(MAX+1)
dis = [0]*(MAX+1)

s, e = map(int, input().split())

ch[s] = 1
dis[e] = 0

a = deque()
a.append(s)

while a:
    now = a.popleft()
    if now == e:
        break
    for next in(now-1, now+1, now+5):
        if 0 < next <= MAX:
            if ch[next] == 0:
                a.append(next)
                ch[next]=1
                dis[next]=dis[now]+1
                
print(dis[e])