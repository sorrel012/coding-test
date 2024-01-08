function solution(k, score) {
    const stack = []
    return score.reduce((acc,cur) => {
        if(stack.length < k) {
            stack.push(cur)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(cur)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        acc.push(stack[0])
        return acc
    },[])
}