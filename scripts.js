/** **********************   SET DATA POINTS  **********************
 * Retrieve data from user. Convert to numbers where applicable.
 * */

let goal = parseInt(document.querySelector("#goal").value);
let userPts = parseInt(document.querySelector("#user-pts").value);
let classId = document.querySelector("#course").value;
let week = parseInt(document.querySelector("#week-num").value);

/** **********************   PART I  ******************************/
// use methods to create remaining two values for obj course myClass

/** Max Points Available fxn
 * 2 refrences
 * @param {String} id class Id
 * @param {Number} wk week num; total 17
 * @return {Number} max
 */
function getTotalPts(id, wk) {
  let total = 0;
  const pointsArray = courseMap.get(id).weekPts;
  for (let i = 0; i < wk; i++) {
    total += pointsArray[i];
  }
  return total;
}

/** Target Points
 * @param {Number} id class max
 * @param {Number} X goal; facotr of scale
 * @return {Number} goal points for user in class
 */
function getGoalPts(id, X) {
  const max = getTotalPts(classId, 17);
  const sc = courseMap.get(classId).scale;
  const pts = Math.ceil(max * (100 - sc * X) / 100);
  console.log(pts);
  return pts;
}

/** ** For Chosen Course create OBJECT  ** **/

let myClass = {
  className: courseMap.get(classId).className,
  scale: courseMap.get(classId).scale,
  maxPts: getTotalPts(classId, 17),
  weekPts: getTotalPts(classId, week),
  goalPts: getGoalPts(classId, goal)
};

/** **********************   PART II  ******************************/
// Methods get percent and get Goal points. output click handler: see dom.js

/**
 * Get the Percentage
 * @param {Number} a user current points ; pts need
 * @param {Number} B class current max pts; pts remaining
 * @return {Number} percent avg for output
 */
function getPercent(a, B) {
  const percent = Math.floor(1000 * a / B) / 10;
  return percent;
}

/** **********************   PART III  ******************************/
// Method needed: Percentage from partII, Difference. Click Handler.

/**
 *  Get the Difference
 * @param {Number} pig GoalPts; maxPts; RemainClass
 * @param {Number} goat user-pts; wkMax; RemainNeed
 * @return {Number} Difference of two numbers
 */
function getDif(pig, goat) {
  const weight = pig - goat;
  console.log(weight, "weight ", pig, "pig ", goat);
  return weight;
}

// DOM SCRIPTS **************************************************************

/** buttons*/
const classGoalBtn = document.querySelector("#goal-btn");
const trackBtn = document.querySelector("#track-btn");
const marginBtn = document.querySelector("#margin-btn");

/** ******************************************************************************** */
/**
 * Part III click Handler
 * @param {Number} uPts
 * @param {Course} cIII
 * @return {void} out put to browser
 */
function clickHandlerMargin(uPts, cIII) {
  console.log("Inside clickH Margin", uPts);

  // get points Need for goal AND get points remining in class
  const remainNeed = getDif(uPts, cIII.weekPts);
  const remainClass = getDif(cIII.maxPts, cIII.weekPts);
  console.log("need ", remainNeed, "in class ", remainClass);

  // get info for output: MARGIN for accomplishing grade and %
  const margin = getDif(remainClass, remainNeed);
  const percGoal = getPercent(remainNeed, remainClass);

  // if negative missed margin so flipping sign;
  const x = margin * -1;

  let marginMsg;
  if (margin > 0) {
    marginMsg = `You have a margin of ${margin} to get your goal and need ${percGoal}% on all remaining assignments.`;
  } else if (margin == 0) {
    marginMsg = `You have NO room for margin for this goal.  You may want to reconsider.`;
  } else {
    marginMsg = `You have missed your goal by ${x}. A new goal is needed.`;
  }
  document.querySelector("#out-Margin").textContent = marginMsg;
}

marginBtn.addEventListener("click", clickHandlerMargin(userPts, myClass));
