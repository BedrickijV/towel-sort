// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === [] || arguments.length === 0) return [];
    if (matrix.length === 1) return matrix;
    let array = [];
    let counter = true;
    matrix.forEach(function (item, i, matrix) {
        if (counter) {
            item.forEach(function (j, index, item) {
                array.push(j);
            });
            counter = false;
        } else {
            item.reverse().forEach(function (j, index, item) {
                array.push(j);
            });
            counter = true;
        }

    });
    return array;
};
