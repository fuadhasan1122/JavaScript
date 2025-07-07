function permuteString(str, prefix = '', results = []) {
    if (str.length === 0) {
        if (!results.includes(prefix)) {
            results.push(prefix);
        }
        return results;
    }

    for (let i = 0; i < str.length; i++) {
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        permuteString(remainingChars, prefix + str[i], results);
    }

    return results;
}