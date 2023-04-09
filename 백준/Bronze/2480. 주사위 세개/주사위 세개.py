A, B, C = map(int,input().split())

if A==B==C :
    print(10000+A*1000)
    
elif A==B and A!=C and B!=C :
    print(1000+A*100)

elif B==C and A!=C and A!=B :
    print(1000+B*100)
    
elif A==C and A!=B and C!=B :
    print(1000+A*100)

else :
    if A>=B and A>=C:
        print(A*100)
    elif B>=A and B>=C:
        print(B*100)
    elif C>=A and C>=B:
        print(C*100)
    