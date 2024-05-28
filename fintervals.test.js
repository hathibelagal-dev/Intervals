const fintervals = require("./fintervals.js");

test("Test 1", () => {
  expect(fintervals.removeExcludes([[100, 150]], [[120, 130]]).toString()).toBe(
    [
      [100, 119],
      [131, 150],
    ].toString()
  );
});

test("Test 2", () => {
  expect(
    fintervals
      .removeExcludes(
        [
          [50, 75],
          [100, 150],
          [300, 400],
        ],
        [[120, 130]]
      )
      .toString()
  ).toBe(
    [
      [50, 75],
      [100, 119],
      [131, 150],
      [300, 400],
    ].toString()
  );
});

test("Test 3", () => {
  expect(
    fintervals
      .removeExcludes([
        [5, 15],
        [19, 119],        
      ], [[12, 18]])
      .toString()
  ).toBe([
    [[5, 11], [19, 119]]
  ].toString());
});

test("Test 4", () => {
    expect(fintervals
        .removeExcludes([
          [10, 100],          
        ], [[20, 30]])
        .toString()).toBe([[10, 19], [31, 100]].toString());
});