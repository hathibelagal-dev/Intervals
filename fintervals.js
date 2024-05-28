function getActualIntervals(a) {    
    const sa = a.toSorted((x, y) => x[0] - y[0]);
    let minv = sa[0][0];
    let maxv = sa[0][1];
    let i = 1;
    let actualIntervals = [];
    while (i < a.length) {
        if (sa[i][0] > maxv) {
            actualIntervals.push([minv, maxv]);
            minv = sa[i][0];
        }
        if (sa[i][1] > maxv) {
            maxv = sa[i][1];
        }
        i += 1;
    }
    actualIntervals.push([minv, maxv]);
    return actualIntervals;
}


