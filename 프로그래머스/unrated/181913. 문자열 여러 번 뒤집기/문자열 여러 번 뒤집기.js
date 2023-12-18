function solution(my_string, queries) {    
    queries.forEach(([s, e]) => {
        let chars = [...my_string];
        my_string = [...chars.slice(0, s), ...chars.slice(s, e + 1).reverse(), ...chars.slice(e + 1)].join('');
    })
    return my_string;
}