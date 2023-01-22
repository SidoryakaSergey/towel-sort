// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length < 1) {
        return [];
    }
    let even = 1;
    const result = [];
    for (let el of matrix) {
        if (even % 2) {
            result.push(...el);
        } else {
            result.push(...el.reverse());
        }
        even++;
    }
    return result;
};
