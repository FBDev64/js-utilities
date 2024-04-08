const capitalizeText = (text) => {
    return text.toLowerCase()
    .replace(/(^|\s)\w/g, c => c.toUpperCase());
};

console.log(capitalizeText('learn to rest, not to quit'));
