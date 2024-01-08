function solution(name, yearning, photo) {
    let score = new Map();    
    for (let i = 0; i < name.length; i++) {
        score.set(name[i], yearning[i]);
    }
    return photo.map(row => {
        return row.reduce((acc, cur) => {
            return acc + (score.get(cur) || 0);
        }, 0);
    })
}