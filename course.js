const classObj(key) = {
  classId: 101,
  className: "CIS-101: Class with Instructor",
  scale: 1,
  // weekPts: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  // points: [scale][weekPts]
  week10: 1,
  maxPts: 2,
  getGoal(goalNum) {Math.ceil(maxPts * (100 - (scale * goalNum) / 100))}
}

const courseMap = new Map();

courseMap.set("LA195", {
  classId: 195,
  className: "CIS-195: Intro to Database with Appelbaum",
  max: 533,
  scale: 10,
  // weekPts: [0, 16, 23, 28, 10, 73, 20, 22, 16, 16, 64, 29, 24, 37, 25, 30, 100]
  week10: 224,
  maxPts: 533
});

coursesMap.set("LA252", {
  className: "CIS-252 C# with Appelbaum",
  max: 533,
  scale: 10,
  // weekPts: [2, 16, 14, 18, 64, 16, 21, 16, 64, 16, 14, 14, 64, 14, 14, 0, 95]
  week10: 247,
  maxPts: 469
});

coursesMap.set("HT187", {
  classId: 252,
  className: "CIS-187 Java with Thomas",
  scale: 10,
  // weekPts: [0,25,25,100,0,125,225,0,125,25,125,225,0,125,0,125,225]
  maxPts: 1525,
  week10: 650
});

coursesMap.set("HT299", {
  classId: 165,
  className: "CIS-165 Python with Thomas",
  scale: 7,
  // weekPts:[0, 25, 25, 125, 125, 225, 0, 125, 25, 125, 225, 0, 125, 25, 125, 25, 225]
  maxPts: 1550,
  week10: 800
});

coursesMap.set("MM177", {
  classId: 177,
  className: "CIS-177 JavaScript with Misra",
  scale: 10,
  // weekPts: [0,10,10,10,10,10,10,5,5,100,10,10,10,10,15,20,200]
  maxPts: 445,
  week10: 170
});
