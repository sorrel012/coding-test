function solution(players, callings) {
    let ranks = {};
    players.forEach((player, i) => {
        ranks[player] = i;
    });
    
    callings.forEach((name) => {
        const rank = ranks[name];
        const prevPlayerName = players[rank - 1];
        
        players[rank-1] = name;        
        players[rank] = prevPlayerName;
        
        ranks[prevPlayerName] = rank;
        ranks[name] = rank - 1;
    });
    
    return players;
}