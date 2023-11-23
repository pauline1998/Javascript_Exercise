function displayPattern(rows, columns) {
    for (let i = rows; i > 0; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '1 ';
        }
        console.log(row);
    }
}

displayPattern(4);