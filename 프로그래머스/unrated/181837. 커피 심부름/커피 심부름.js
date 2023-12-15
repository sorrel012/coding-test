function solution(order) {
    return order.reduce((total, value) => {
        return value.indexOf('cafelatte') !== -1 ? total + 5000 : total + 4500;  
    }, 0);
}