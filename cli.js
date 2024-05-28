const fintervals = require("./fintervals.js");

function showOutput(output) {
  if (!output) {
    return;
  }
  let result = "";
  let n = output.length;
  for (let i = 0; i < n - 1; i++) {
    result += output[i][0] + "-" + output[i][1] + ", ";
  }
  result += output[n - 1][0] + "-" + output[n - 1][1];
  console.log(result);
}

function prepareInput(input) {
  return input.split(",").map((x) => x.split("-").map(Number));
}

const prompt = require("prompt");
prompt.start();

prompt.get(["includes", "excludes"], (e, result) => {
  includes = fintervals.getActualIntervals(prepareInput(result.includes));
  excludes = fintervals.getActualIntervals(prepareInput(result.excludes));
  if(!result.includes) {
    return;
  }
  if (result.excludes) {
    showOutput(fintervals.removeExcludes(includes, excludes));
  } else {
    showOutput(includes);
  }
});
