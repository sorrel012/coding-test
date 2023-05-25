def preOrder(v):
    if v > 7:
        return
    else:
        print(v, end=" ")
        preOrder(v*2)
        preOrder(v*2+1)
 
def inOrder(v):    
    if v > 7:
        return
    else:
        inOrder(v*2)
        print(v, end=" ")
        inOrder(v*2+1)
        
def postOrder(v):
    if v > 7:
        return
    else:
        postOrder(v*2)
        postOrder(v*2+1)      
        print(v, end=" ") 

        
if __name__ == "__main__":
    preOrder(1)
    print()
    inOrder(1)
    print()
    postOrder(1)