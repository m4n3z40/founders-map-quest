export function sortBy(tableData, columnName, reverse) {
    const column = tableData.header.indexOf(columnName);
    const key = line => line[column];

    return (a, b) => {
        const A = key(a);
        const B = key(b);
        let result = 0;

        if (A < B) {
            result = -1;
        } else if (A > B) {
            result = 1;
        }

        return result * [-1, 1][+!!reverse];
    };
}
