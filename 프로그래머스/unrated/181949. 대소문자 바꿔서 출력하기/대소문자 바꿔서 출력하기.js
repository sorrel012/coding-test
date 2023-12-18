const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str = [...str].map((char) => {
        let charCode = char.charCodeAt();
        return String.fromCharCode(charCode + (charCode < 97 ? 32 : -32))
    }).join('')
    console.log(str);
});