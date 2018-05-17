/** *************** FINAL PROJECT CIS-177 SP18  **********************
 *                  CHARLOTTE FEATHERS 16 MAY
 */

// global varibles needed:
let userPts = 1;
let goal;
let classId;
let week;

// for class obj:
let myClass;

// buttons
const doneBtn = document.querySelector("#done-btn");
const trackBtn = document.querySelector("#track-btn");
const marginBtn = document.querySelector("#margin-btn");

/** ********  INITIALIZING : DONE BUTTON  ************************/

/** Retrieves; Tests; Assigns Data Fields.
 * Retrieves user Data from input values
 * Tests if valid data/gives alert if Not
 * Sets the 'myClass' to use for output  *
 */
function clickHandlerDone() {
  // clears output fields ready for new data
  clearOutput();

  // retrieves and tests
  userPts = parseInt(document.querySelector("#user-pts").value);

  if (userPts > 0) {
    // Retrieves remaining
    goal = parseInt(document.querySelector("#goal").value);
    classId = document.querySelector("#course").value;
    week = parseInt(document.querySelector("#week-num").value);

    // assigns values
    let myClassNew = {
      className: courseMap.get(classId).className,
      scale: courseMap.get(classId).scale,
      maxPts: getTotalPts(classId, 17),
      weekPts: getTotalPts(classId, week),
      goalPts: getGoalPts(classId, goal)
    };

    // gives global myClass the new input values
    myClass = myClassNew;
    classGoal();
    console.log(myClass);
  } else {
    /** here I would like to use #output in some way
  to cause the output form to appear. I assume using
  the template tag and replacing would work best.
  document.querySelector("#output")
  could also simulate the buttons are inactive with color change
  UNTIL THEN GIVE WARNING THAT DATA NEEDS ENTERING.
  */
    alert("WARNING: enter current points for this class before continuing.");
  }
}

doneBtn.addEventListener("click", clickHandlerDone);

/** ****************    METHODS  USED ************************/

/** Clear output Fields
 */
function clearOutput() {
  document.querySelector("#out-Goal").textContent = "";
  document.querySelector("#out-Track").textContent = "";
  document.querySelector("#out-Margin").textContent = "";
}

/** Max Points Available USED for obj myClass attribute
 *
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
  return total;
}

/** Target Points Needed USED for obj myClass attribute
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

/** Creates Output of Class's Name and Goal Points
 * need: userPts and class's goalPts
 * @return {void} Outputs to browser;
 * Dev note: this used to be the Goal button
 */
function classGoal() {
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

/** Get the Percentage
 * @param {Number} a user current points ; pts need
 * @param {Number} B class current max pts; pts remaining
 * @return {Number} percent avg for output
 */
function getPercent(a, B) {
  const percent = Math.floor(1000 * a / B) / 10;
  return percent;
}

/** Get the Difference
 * @param {Number} pig GoalPts; maxPts; RemainClass
 * @param {Number} goat user-pts; wkMax; RemainNeed
 * @return {Number} Difference of two numbers
 */
function getDif(pig, goat) {
  const weight = pig - goat;
  return weight;
}

/** *************************  DOM   **************************** */

/** Click Handler Track %  
const trackBtn = document.querySelector("#track-btn");
 * To track; need userPts, weekPts(the total to date)
 * @return {void} outputs to browser
 */
function clickHandlerTrack() {
  let track;
  if (userPts > 0) {
    const percent = getPercent(userPts, myClass.weekPts);
    track = `Currently you have a ${percent}% in the class.`;
  } else {
    track = `Please check your user Points.`;
  }

  document.querySelector("#out-Track").textContent = track;
}
trackBtn.addEventListener("click", clickHandlerTrack);

/**  Click Handler Margin *************
 * -Margin: How many pts you need for goal and how many pts reamin
 * // deleted option for % of remaining assignments.
 * @return {void} outputs to browser
 */
function clickHandlerMargin() {
  const need = getDif(myClass.goalPts, userPts);
  const remain = getDif(myClass.maxPts, myClass.weekPts);
  const margin = getDif(remain, need);

  let marginMsg;
  if (margin > 0) {
    marginMsg = `You are there! You can miss ${margin} points and still get your goal!`;
  } else if (margin == 0) {
    marginMsg = `You have NO room for error for this goal.  You may want to reconsider.`;
  } else if (margin < 0) {
    marginMsg = `You are off your goal by ${margin *
      -1}. A new goal is needed!`;
  } else {
    marginMsg = `Not sure of your status. Check input the items and select Done.`;
  }
  document.querySelector("#out-Margin").textContent = marginMsg;
}
marginBtn.addEventListener("click", clickHandlerMargin);
