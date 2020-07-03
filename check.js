let fs = require('fs');
let source = fs.readFileSync('./chars.txt').toString();
let chars=[];
for (let i = 19968; i <= 40869; i++) {
    let c = String.fromCharCode(i);
    if (!source.includes(c)) {
        console.log(i, c);
        chars.push(c);
    }
}
console.log(chars.join(''));