//hey there will practice typscript here!!
function greet(name: string, callback: (message: string) => void) {
    const message = `Hello, ${name}!`;
    callback(message);
}

greet("Alice", (msg) => {
    console.log(msg);
});
