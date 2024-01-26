function solution(new_id) {
    new_id = new_id.toLowerCase()
                    .replace(/[^a-z0-9-_.]/g, '')
                    .replace(/\.{2,}/g, '.')
                    .replace(/^/, '')
                    .replace(/^\./, '')
                    .replace(/\.$/, '');
    
    if(new_id === '') {
        new_id = 'a';
    }
    
    if(new_id.length >= 16) {
        new_id = new_id.slice(0, 15).replace(/\.$/, '');
    }
    
    while(new_id.length <= 2) {
        new_id += new_id[new_id.length - 1];
    }
    
    return new_id;    
}