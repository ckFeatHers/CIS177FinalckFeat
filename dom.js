// DOM SCRIPTS **************************************************************

/** buttons*/
const classGoalBtn = document.querySelector("#goal-btn");
const trackBtn = document.querySelector("#track-btn");
const marginBtn = document.querySelector("#margin-btn");

/** ******************************************************************************** */
/** PART I Click Handler
 * @param {myClass} courseI data from Course
 * @return {void} void; out put of class name and goalPts calculcated from getGoalPts()
 */
function clickHandlerSet(courseI) {
  const gp = courseI.goalPts;
  if (gp > 0) {
    any = `Course: ${
      courseI.className
    } needs ${gp} points to achieve your goal.`;
  } else {
    any = `Not clear on your goal for this class. ${courseI.className}, right?`;
  }
  document.querySelector("#out-Goal").textContent = any;
}

classGoalBtn.addEventListener("dbclick", clickHandlerSet(myClass));

/** ******************************************************************** */
/**
 * Part II Click Handler
 * @param {Number} uPts user points from input
 * @param {Course} courseII course's data info
 * @return {void} inserts results to DOM
 */
function clickHandlerTrack(uPts, courseII) {
  const percent = getPercent(uPts, courseII.weekPts);
  const track = `Currently you have a ${percent}% in the class.`;
  document.querySelector("#out-Track").textContent = track;
}

trackBtn.addEventListener("click", clickHandlerTrack(userPts, myClass));

/** ******************************************************************** */
/**
 * Part III click Handler
 * -Margin: How many pts you need for goal and how many pts reamin
 * -% for remaining in class
 * @param {Number} uPts
 * @param {Course} cIII
 * @return {void} out put to browser
 */
function clickHandlerMargin(uPts, cIII) {
  const need = getDif(cIII.goalPts, uPts);
  const remain = getDif(cIII.maxPts, cIII.weekPts);
  const percGoal = getPercent(need, remain);

  const margin = getDif(
    getDif(cIII.maxPts, cIII.weekPts),
    getDif(cIII.goalPts, uPts)
  );

  let marginMsg;
  if (margin > 0) {
    marginMsg = `You have a margin of ${margin} points.  You can miss that many and still get your goal! Just get ${percGoal}% on all remaining assignments.`;
  } else if (margin == 0) {
    marginMsg = `You have NO room for error for this goal.  You may want to reconsider.`;
  } else {
    marginMsg = `You have missed your goal by ${margin * -1}. A new goal is needed!`;
  }
  document.querySelector("#out-Margin").textContent = marginMsg;
}

marginBtn.addEventListener("click", clickHandlerMargin(userPts, myClass));
