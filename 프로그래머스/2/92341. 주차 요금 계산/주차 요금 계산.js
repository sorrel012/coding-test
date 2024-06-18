function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const parkingTime = {};
    const inTime = {}; 
    
    function getMinutes(time) {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }
    
    records.forEach(record => {
        const [time, carNum, type] = record.split(' ');
        if (type === 'IN') {
            inTime[carNum] = getMinutes(time);
        } else {
            const parking = getMinutes(time) - inTime[carNum];
            if (parkingTime[carNum]) {
                parkingTime[carNum] += parking;
            } else {
                parkingTime[carNum] = parking;
            }
            delete inTime[carNum]; 
        }
    });
    
    for (const carNum in inTime) {
        const parked = getMinutes('23:59') - inTime[carNum];
        if (parkingTime[carNum]) {
            parkingTime[carNum] += parked;
        } else {
            parkingTime[carNum] = parked;
        }
    }
    
    function calculateFee(time) {
        if (time <= baseTime) return baseFee;
        return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
    }
    
    const result = Object.keys(parkingTime)
        .sort((a, b) => a.localeCompare(b))
        .map(carNum => calculateFee(parkingTime[carNum]));
    
    return result;
}