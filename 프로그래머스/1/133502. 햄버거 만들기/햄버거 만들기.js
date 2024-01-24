function solution(ingredient) {
    let answer = 0; 
    const order = '1231'
    let stack = []; 

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (stack.length >= 4) { 
            let lastFourIngredients = stack.slice(-4).join('');

            if (lastFourIngredients === order) {
                stack.splice(stack.length - 4, 4);
                answer++;
            }
        }
    }

    return answer;
}