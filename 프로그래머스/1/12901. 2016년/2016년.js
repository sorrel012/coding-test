function solution(a, b) {
    const day = {
        0: 'SUN',
        1: 'MON',
        2: 'TUE',
        3: 'WED',
        4: 'THU',
        5: 'FRI',
        6: 'SAT'
    }
    
    let date = new Date();
    date.setYear(2016);
    date.setMonth(a-1);
    date.setDate(b);
    return day[date.getDay()];
}