/** ******************CREATE OBJ for use in Program****************** */
/**
 * Processing data: Change incoming to # and can delete
 * @param {string} grade
 * @return {Number} goal factorial
 */
function getGoal(grade) {
  let factor;
  switch (grade) {
    case "B":
      factor = 2;
      break;
    case "C":
      factor = 3;
      break;
    case "P":
      factor = 4;
      break;
    default:
      factor = 1;
      break;
  }
  console.log(factor);
  return factor;
}

const letter = document.querySelector("#goal").value;
let userPts = document.querySelector("#user-pts").value;
let classId = document.querySelector("#course").value;
let week = document.querySelector("#week-num").value;
let cllbck = getGoal(letter);
let goal = cllbck;
console.log("user data input from queryS.");
console.log(cllbck);
console.log(letter);
// need to set form to feed back goal directly
// until then use letter and convert to number
console.log(goal);
console.log(userPts);
console.log(classId);
console.log(week);
/**
 *  use form elements to set a PERSON constructor
 * @param {Number} g grade factorial
 * @param {Number} up user Points
 * @param {String} ci classId
 * @param {Number} w week# aka 10
 * @return {void} Object Person constructor
 */
function Person(g, up, ci, w) {
  goal = g;
  userPts = up;
  classId = ci;
  week = w;
  console.log("Inside person constructor");
  console.log(g);
  console.log(up);
  console.log(ci);
  console.log(w);
  // need to set form to feed back goal directly
  // until then use letter and convert to number
  console.log(goal);
  console.log(userPts);
  console.log(classId);
  console.log(week);
}

// initializes a Person from CONSTRUCTOR to use in prog
const myUser = new Person(goal, userPts, classId, week);
console.log("myUser and then .properties ");
console.log(myUser);
console.log(myUser[goal]);
console.log(myUser.goal);
console.log(myUser.letter);
console.log(myUser.userPts);
console.log(myUser.classId);
console.log(myUser.week);
console.log("Person and then .properties");
console.log(Person);
console.log(Person.letter);
console.log(Person.userPts);
console.log(Person.classId);
console.log(Person.week);
console.log(Person.goal);

/** Assign courseMap Obj definitiona with key: classId
 * @param {string} myUser.classId
 * pulling object from map to define OBJECT COURSE
 * Declared then create myClass to use in program.
 */

let Course = courseMap.get(myUser.classId);
console.log("courseMap.get(classId) and 'LA252' values.");
console.log(courseMap.get("LA195"));
console.log(courseMap.get(classId));
console.log(courseMap.get("LA252"));
console.log(courseMap.get("HT299"));
console.log(courseMap.get("HT187"));
console.log(courseMap.get("MM177"));
console.log(courseMap.get("MM177").classId);
console.log(courseMap.get("MM177").className);
console.log(courseMap.get("MM177").scale);
console.log(courseMap.get("MM177").maxPts);
console.log(courseMap.get("MM177").week10);
console.log(".weekTotPts array is undefined. Course is undefined");
console.log(courseMap.get("LA252").weekTotPts);
console.log(Course);

const myClass = courseMap.get(classId);
console.log(myClass);
console.log(myClass.className);
console.log(myClass.maxPts);

// buttons
const classGoalBtn = document.querySelector("#goal-btn");
const trackBtn = document.querySelector("#track-btn");
const marginBtn = document.querySelector("#margin-btn");

/** **********************   PART I  ******************************/
// After data gather for person and course no methods needed. click Handler.

/**
 * PartI Get goalPts points from max pts and week num
 * @param {Person} p from pepI
 * @param {Course} c from courseI
 * @return {Number} GoalPts
 */
function getGoalPts(p, c) {
  console.log("inside getGoalPts");
  console.log(p);
  console.log(c);
  const max = c.maxPts;
  console.log(max);
  const pts = Math.ceil(max * (100 - c.scale * p.goalNum / 100));
  console.log(pts);
  return pts;
}

/** PartI Click Handler : caputures data from html and creates output for PART I
 * @param {Person} pepI input info
 * @param {Course} courseI data from Course
 * @return {void} void; out put of class name and goalPts calculcated from getGoalPts()
 */
function clickHandlerSet(pepI, courseI) {
  const goalPts = getGoalPts(pepI, courseI);
  console.log("inside clickHset");
  console.log(goalPts);
  const needStrPts = goalPts;
  console.log(needStrPts);
  if (goalPts > 0) {
    any = `You chose class ${courseI.className()}.  Your points for your goal = ${needStrPts}.`;
  } else {
    any = `Not clear on your goal for this class. ${courseI.className}, right?`;
  }
  console.log(any);
  document.querySelector("#out-Goal").textContent = any;
}

classGoalBtn.addEventListener("click", clickHandlerSet(myUser, myClass));

/* 
  Developer's Note: Consider separating out part 2 and 3 into their own JS files. Just be wary of the order in which the code is loaded in from index.html or you may get 'undefined' issues.
  */
/* Dev note: Noted. The use of map and obj has kept code to min.   Will try one script.js for now. ckf*/

/** **********************   PART II  ******************************/
// Methods get percent and get Goal points with combo of person and course data. click handler.

/**
 * Part II method: Get percentage
 * @param {Number} a user current points ; pts need
 * @param {Number} B class current max pts; pts remaining
 * @return {String} percent avg for output
 */
function getPercent(a, B) {
  const percent = a / B;
  str = percent + "%";
  console.log("a", a, "B", B, "str", str, "inside get Percent");
  return str;
}

/**
 * PartII method: Get current class pts up to this week
 * @param {Number} wkNum = week10 now, later use num array and wk-num   *
 * @param {Course} cII courseII total points in the range 1-wk.
 * @return {Number} num number of weeks
 */
function getCurrentPts(wkNum, cII) {
  let total = 0;
  // const wkPts = myClass.week10();
  // for(i = 0; i < wk; i++)
  // {
  // total += wkPts[i];
  // }
  total = cII.week10;
  console.log(total);
  return total;
}
// use this with array in course obj @param {listofNumbers[]} wkPts points of class's syllibus

/**
 * Part II Click Handler
 * use person and cours info to produce results
 * @param {Person} pepII user person Obj data
 * @param {Course} courseII course's data info
 * @return {void} inserts results to DOM
 */
function clickHandlerTrack(pepII, courseII) {
  console.log("inside clickHtrack");
  // const week = pepII.getweekNum;
  // need array of wkly pts for class; create here? const byWeekPts[] = new myCourse.weekPts();
  console.log(week);
  console.log(pepII);
  console.log(pepII.userPts);
  const weekTotPts = getCurrentPts(week, courseII);
  const percent = getPercent(pepII.userPts, weekTotPts);

  console.log(weekTotPts);
  console.log(percent);

  const track = `Currently you have a ${percent}%.`;
  console.log(track);
  document.querySelector("#out-Track").textContent =
    "223 wont assign track with NaN%";
}

trackBtn.addEventListener("click", clickHandlerTrack(myUser, myClass));

/** **********************   PART III  ******************************/
// Method needed: Percentage from partII, Difference. Click Handler.

/**
 * Part III method : get Difference
 * @param {Number} pig GoalPts; maxPts; RemainClass
 * @param {Number} goat user-pts; wkMax; RemainNeed
 * @return {Number} Difference of two numbers
 */
function getDif(pig, goat) {
  const weight = pig - goat;
  console.log(weight, "weight ", pig, "pig ", goat);
  return weight;
}

/**
 * Part III click Handler
 * @param {Person} pepIII
 * @param {Course} courseIII
 * @return {void} out put to browser
 */
function clickHandlerMargin(pepIII, courseIII) {
  // retieve goalPts again or maybe move to Obj method.?
  const pepGoalPts = getGoalPts(pepIII, courseIII);
  console.log("Inside clickH Margin", pepGoalPts);
  // get points Need for goal AND get points remining in class
  const remainNeed = getDif(pepGoalPts, pepIII.currentPts);
  const remainClass = getDif(courseIII.maxPts, courseIII.week);
  console.log("need ", remainNeed, "in class ", remainClass);
  // get info for output: MARGIN for accomplishing grade and %
  const margin = getDif(remainClass, remainNeed);
  console.log(margin, "!");
  const percGoal = getPercent(remainNeed, remainClass);
  console.log(percGoal);
  const x = margin * -1; // if negative missed margin so flipping sign;
  let marginMsg;
  if (margin > 0) {
    marginMsg = `You have a margin of ${margin} to get your goal and need ${percGoal}% on all remaining assignments.`;
  } else if (margin == 0) {
    marginMsg = `You have NO room for margin for this goal.  You may want to reconsider.`;
  } else {
    marginMsg = `You have missed your goal by ${x}. A new goal is needed.`;
  }
  console.log(marginMsg);
  document.querySelector("#out-Margin").textContent = marginMsg;
}

marginBtn.addEventListener("click", clickHandlerMargin(myUser, myClass));
