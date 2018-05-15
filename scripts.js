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
  const ptsArray = courseMap.get(id).weekPts;
  for (let i = 0; i < wk; i++) {
    total += ptsArray[i];
  }
  console.log(total);
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

  return weight;
}
// DOM SCRIPTS **************************************************************

/** buttons*/
// const classGoalBtn = document.querySelector("#goal-btn");
// const trackBtn = document.querySelector("#track-btn");
// const marginBtn = document.querySelector("#margin-btn");

/** ******************************************************************************** */
/** PART I Click Handler
 * userPts and class's goalPts needed.
 * @return {void} void; out put of class name and goalPts calculcated from getGoalPts()
 */
function clickHandlerSet() {
  const gp = myClass.goalPts;

  if (gp > 0) {
    any = `${myClass.className} has a total of ${
      myClass.maxPts
    } points. You will need ${gp} points to achieve your goal.`;
  } else {
    any = `Not clear on your goal for this class. ${myClass.className}, right?`;
  }
  document.querySelector("#out-Goal").textContent = any;
}

const classGoalBtn = document.querySelector("#goal-btn");
classGoalBtn.addEventListener("click", clickHandlerSet);

/** ******************************************************************** */

/**
 * Part II Click Handler
 * To track; need userPts, weekPts(the total to date)
 * @return {void} inserts results to DOM
 */
function clickHandlerTrack() {
  let track;
  if (myClass.weekPts != 0) {
    const percent = getPercent(userPts, myClass.weekPts);
    track = `Currently you have a ${percent}% in the class.`;
  } else {
    track = `Please check your user Points.`;
  }

  document.querySelector("#out-Track").textContent = track;
}

const trackBtn = document.querySelector("#track-btn");
trackBtn.addEventListener("click", clickHandlerTrack);
/** ******************************************************************** */
/**
 * Part III click Handler
 * -Margin: How many pts you need for goal and how many pts reamin
 * -% for remaining in class
 * @return {void} out put to browser
 */
function clickHandler() {
  const margin = getDif(
    getDif(myClass.maxPts, myClass.weekPts),
    getDif(myClass.goalPts, userPts)
  );

  let marginMsg;
  if (margin > 0) {
    marginMsg = `You have a margin of ${margin} points.  You can miss that many and still get your goal!`;
  } else if (margin == 0) {
    marginMsg = `You have NO room for error for this goal.  You may want to reconsider.`;
  } else {
    marginMsg = `You have missed your goal by ${margin *
      -1}. A new goal is needed!`;
  }
  document.querySelector("#out-Margin").textContent = marginMsg;
}

const marginBtn = document.querySelector("#margin-btn");
marginBtn.addEventListener("click", clickHandler);
