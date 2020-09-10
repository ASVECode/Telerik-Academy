const timeConversion = (array) => {
    const arr = array[0].split(':');
    const amPm = arr[2].split('');
    const some = amPm.splice(2, 2);

    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    console.log(matrix.join(' '));
};
timeConversion(['07:05:45PM']);