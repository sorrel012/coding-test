function solution(order) {
    return order.reduce((total, value) => {
        return total + (value.indexOf('cafelatte') !== -1 ?  5000 : 4500);  
    }, 0);
}