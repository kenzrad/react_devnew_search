function removeSpecialCharacters(str) {
    return str ? str.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '') : '';
}

// would likely build anchor tags and other messages here

module.exports = {
    removeSpecialCharacters,
};
