// form elements

// buttons
const classGoalBtn = document.querySelector("#goal-btn");
// const trackBtn = document.querySelector("#track-btn");
// const marginBtn = document.querySelector("#margin-btn");

/** Caputures data from html and creates output for PART I
 * @param {Person} pep input info
 * @param {Course} myCourse data from Course
 * @return {void} void; out put of class name and goalPts calculcated from getGoalPts()
 */
function clickHandlerSet(pep, myCourse) {
  const needStrPts = myCourse.goalPts(user.goal).textContent;
  if (myCourse.goalPts(user.goal) > 0) {
    any = `You chose class ${myCourse.className()}.  Your points for your goal is ${needStrPts} `;
  } else {
    any = `Not clear on your goal for this class. ${myCourse.className()}, right?`;
  }
  document.querySelector("#out-Goal").textContent = any;
}
// Developer's Note: This functionality can be reviewed here: https://jsfiddle.net/visweb/1j1dod11/2/

classGoalBtn.addEventListener("click", clickHandlerSet);
