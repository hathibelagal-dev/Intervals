function getActualIntervals(intervals) {
  const sortedIntervals = intervals.toSorted((x, y) => x[0] - y[0]);
  let actualIntervals = [sortedIntervals[0]];
  let previousInterval = sortedIntervals[0];
  for (let interval of sortedIntervals) {
    if (interval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], interval[1]);
    } else {
      actualIntervals.push(interval);
      previousInterval = interval;
    }
  }
  return actualIntervals;
}

function removeExcludes(include, exclude) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < include.length && j < exclude.length) {
    if (exclude[j][0] > include[i][1]) {
      result.push(include[i]);
      i++;
    } else if (exclude[j][1] < include[i][0]) {
      j++;
    } else {
      if (exclude[j][0] > include[i][0]) {
        result.push([include[i][0], exclude[j][0] - 1]);
      }
      if (exclude[j][1] < include[i][1]) {
        include[i][0] = exclude[j][1] + 1;
        j++;
      } else {
        i++;
      }
    }
  }
  while (i < include.length) {
    result.push(include[i]);
    i++;
  }
  return result;
}

exports.getActualIntervals = getActualIntervals;
exports.removeExcludes = removeExcludes;

