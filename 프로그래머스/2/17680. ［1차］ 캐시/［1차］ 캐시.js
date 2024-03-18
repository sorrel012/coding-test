function solution(cacheSize, cities) {
    let answer = 0;
    let cache = new Map();

    if (cacheSize === 0) return cities.length * 5;

    for (let city of cities) {
        city = city.toLowerCase();
        if (cache.has(city)) { 
            answer += 1;            // cache hit
            cache.delete(city);
        } else {                    // cache miss
            if (cache.size >= cacheSize) {
                const lruCity = cache.keys().next().value; 
                cache.delete(lruCity);
            } 
            answer += 5;
        }
        cache.set(city, true); 
    }

    return answer;
}
