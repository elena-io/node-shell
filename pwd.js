process.stdout.write('prompt >');

process.stdin.on('data', () => {
    const pwd = __dirname;
    process.stdout.write(pwd);
    process.stdout.write('\nprompt >');

})

module.exports = function() {
    const pwd = __dirname;
    process.stdout.write(pwd);
    process.stdout.write('\nprompt >');
}
    
