const sanitize = (input) => {
    const encodedCharacters = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
    };

    return input.replace(/[&<>"'/]/g, match => encodedCharacters[match]);
}

const userInput = '<script>alert("Hello, world!")</script>';
const sanitizedUserInput = sanitize(userInput);
console.log(sanitizedUserInput);
