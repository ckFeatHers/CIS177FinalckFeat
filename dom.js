/** PART I Click Handler
 * @param {Course} courseI data from Course
 * @return {void} void; out put of class name and goalPts calculcated from getGoalPts()
 */
function clickHandlerSet(courseI) {
  const gp = courseI.goalPts;
  if (gp > 0) {
    any = `You chose class ${courseI.className}.  ${gp} points are needed for your goal.`;
  } else {
    any = `Not clear on your goal for this class. ${courseI.className}, right?`;
  }
  document.querySelector("#out-Goal").textContent = any;
}

classGoalBtn.addEventListener("click", clickHandlerSet(myClass));

/** ******************************************************************** */

/**
 * Part II Click Handler
 * use person and course info to produce results
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
