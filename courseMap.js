const courseMap = new Map();

courseMap.set("LA195", {
  classNum: 195,
  className: "CIS-195: Intro to Database with Appelbaum",
  scale: 10,
  weekPts: [0, 16, 23, 28, 10, 73, 20, 22, 16, 16, 64, 29, 24, 37, 25, 30, 100],
  week10: 224,
  maxPts: 533
});

courseMap.set("LA252", {
  classNum: 252,
  className: "CIS-252 C# with Appelbaum",
  scale: 10,
  weekPts: [2, 16, 14, 18, 64, 16, 21, 16, 64, 16, 14, 14, 64, 14, 14, 0, 95],
  maxPts() {},
  *generator() {
    weekPts.sum();
  },
  week10: 247,
  maxPts: 469
});

courseMap.set("HT187", {
  classNum: 187,
  className: "CIS-187 Java with Thomas",
  scale: 7,
  weekPts: [
    0,
    25,
    25,
    100,
    0,
    125,
    225,
    0,
    125,
    25,
    125,
    225,
    0,
    125,
    0,
    125,
    225
  ],
  maxPts: 1525,
  week10: 650
});

// 'prettier' had issue with had issue with the array above until I
// changed it to that format.  the one below is doing the same error
// I could not figure out difference from the other courseMap sets.?

courseMap.set("HT299", {
  classNum: 165,
  className: "CIS-165 Python with Thomas",
  scale: 7,
  weekPts: [0, 25, 25, 125, 125, 225, 0, 125, 25, 125, 225, 0, 125, 25, 125, 25, 225],
  maxPts: 1550,
  week10: 800
});

courseMap.set("MM177", {
  classNum: 177,
  className: "CIS-177 JavaScript with Misra",
  scale: 10,
  weekPts: [0, 10, 10, 10, 10, 10, 10, 5, 5, 100, 10, 10, 10, 10, 15, 20, 200],
  maxPts: 445,
  week10: 170
});

/** dev note: check out mdn computed property name
 * could use this with instrucotor Lawerance Appelbaum
 * (instructor.charAt(0).toUpperCase() + classNum.ToString())
 *   maxPts: function() {
    weeklyPts.sum();
  },
  get maxPts() {
    return maxPts;
  },
 */
