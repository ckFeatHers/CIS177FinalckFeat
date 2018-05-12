
const goal = document.querySelector("#goal").value;
const classId = document.querySelector("#course").value;
const currentPts = document.querySelector("#user-pts").value;
const week = document.querySelector("#week-num").value;

const myUser = new Person(goal, classId, currentPts, week);
const myClass = new Course(myUser.classId());


  /************************   PART I  ******************************/
  // After data gather for person and course no methods needed. click Handler.

/** PartI Click Handler : caputures data from html and creates output for PART I
 * @param {Person} pepI input info
 * @param {Course} courseI data from Course
 * @return {void} void; out put of class name and goalPts calculcated from getGoalPts()
 */
function clickHandlerSet(pepI, courseI) {
  const needStrPts = courseI.goalPts(pepI.goal).textContent;
  if (courseI.goalPts(pepI.goal) > 0) {
    any = `You chose class ${courseI.className()}.  Your points for your goal is ${needStrPts} `;
  } else {
    any = `Not clear on your goal for this class. ${myCourseI.className()}, right?`;
  }
  document.querySelector("#out-Goal").textContent = any;
}

classGoalBtn.addEventListener("click", clickHandlerSet(myUser, myClass));

  /* 
  Developer's Note: Consider separating out part 2 and 3 into their own JS files. Just be wary of the order in which the code is loaded in from index.html or you may get 'undefined' issues.
  */
 /* Dev note: Noted. The use of map and obj has kept code to min.   Will try one script.js for now. ckf*/
  

  /************************   PART II  ******************************/
  // Methods get percent and get Goal points with combo of person and course data. click handler.

  /**
   *Part II method: Get percentage
   * @param {number} a user current points ; pts need
   * @param {number} B class current max pts; pts remaining
   * @return {string} percent avg for output
   */
  function getPercent(a, B) {
    const percent = a/B;
    str = percent.toString("nl") + "%" ;
    return str;
  }
  
  /**
   * PartII method: Get current class pts up to this week
   * @param {Number} wkNum = week10 now, later use num array and wk-num   * 
   * @return {Number} total points in the range 1-wk.
   */
    // @param {Number} num number of weeks
   // use this with array in course obj @param {listofNumbers[]} wkPts points of class's syllibus
  function getCurrentPts(wkNum){
    let total = 0;
    // const wkPts = myClass.week10();
    // for(i = 0; i < wk; i++)
    // {
    // total += wkPts[i];
    // }
    total = week10;
    return total;
  }
  
  /** 
   * Part II Click Handler
   * use person and cours info to produce results
   * @param {Person} pepII user person Obj data
   * @param {Course} courseII course's data info
   * return { } void but inserts results to DOM
   */
  
  function clickHandler(pepII, courseII) {
    //const week = pepII.getweekNum;
    //need array of wkly pts for class; create here? const byWeekPts[] = new myCourse.weekPts();
    const currentPts = getCurrentPts(byWeekPts[], week);
    const percent = getPercent(userPts, currentPts);
  
    const track = `Currently you have a ${percent}%.`;
    document.querySelector("#out-track").textContent = track;
  }
  
  trackBtn.addEventListener("click", clickHandler(myUser, myClass));
  
  
  /************************   PART III  ******************************/
  // Method needed: Percentage from partII, Difference. Click Handler.

  /**
   * Part III method : get Difference 
   * @param {Number} pig GoalPts; maxPts; RemainClass
   * @param {Number} goat user-pts; wkMax; RemainNeed
   * @return {Number} Difference of two numbers 
   */
  function getDif(pig, goat) {
    const weight = pig - goat;
    return weight;
  }

  /**
   * Part III click Handler
   * @param {Person} pepIII
   * @param {Course} courseIII
   * @returns {void} out put to browser
   */
function clickHandlerMargin(pepIII, courseIII) {
  
  const remainNeed = getDif(myClass.goalPts, myUser.currentPts);
  const remainClass = getDif(myClass.maxPts, myClass.week);
  const margin = getDif(remainClass, remainNeed);
  const percGoal = getPercent(remainNeed, remainClass);

  let marginMsg; 
  if (margin > 0)
  { marginMsg = `You have a margin of ${margin} to get your goal and need ${percGoal}% on all remaining assignments.`;}
  else if (margin == 0)
  { marginMsg = `You have NO room for margin for this goal.  You may want to reconsider.`;}
  else {
  marginMsg = `You have missed your goal by ${x}. A new goal is needed.`;}
  document.querySelector("#out-Margin").textContent = marginMsg;
}

trackBtn.addEventListener("click", clickHandler(myUser, myClass));
