
const course = new Map(document.querySelector("#course").value);

/**
 * Convert a letter grade from user input.
 * @param {String} l letter grade
 * @param {Object} c - course object from courses map. 
 * @return {Number} pts return the converted pts from letter grade
 */
function getGoal(c) {
    const goal = document.querySelector("#goal").value();
    let less;
    switch (goal) {
      case "A":
        less = 1;
        break;
      case "B":
        less = 2;
        break;
      case "C":
        less = 3;
        break;
      case "P":
        less = 4;
        break;
      default:
        less = 0;
        break;
    }
        const pts = Math.ceil(c.max * (100 - (less*c.scale) / 100);
    return pts;
  }

  console.log(getGoal(course));
  
  /* 
  Developer's Note: Consider separating out part 2 and 3 into their own JS files. Just be wary of the order in which the code is loaded in from index.html or you may get 'undefined' issues.
  */
  
  /************************   PART II  ******************************/
  /**
   *Get percent of current Week's in class avg
   * @param {number} user current points 
   * @param {number} currentPts class current max pts
   * @return {Number} percent avg 
   */
  function getPercent() {
    const percent = user/currentPts;
    return percent;
  }
  
  /**
   * Get current class pts up to this week
   * @param {Array[]} wkPts points of class's syllibus
   * @param {Number} wk
   * @return {Number} range 
   */
  function getCurrentPts() {
    let total = 0;
    for(i = 0; i < wk; i++)
    {
      total += wkPts[i];
    }
    return total;
  }
  
  /** get points
   * need in multiple functions so call it
   * @param{} void
   * return {Number} userPts
   */
  function getUserPts()
  {  
    const up = document.querySelector("#user-ptsNow").value;
    return up;
  }
  
  
  function clickHandler() {
    const userPoints = getUserPts();
    const week = document.querySelector("#user-weekNum").value;
    //need array of wkly pts for class; create here? const byWeekPts[] = new myCourse.weekPts();
    const currentPts = getCurrentPts(byWeekPts[], week);
    const percent = getPercent(userPts, currentPts);
  
    const track = `Currently you have a ${percent}%.`;
    document.querySelector("#out-tracking").textContent = track;
  }
  
  trackingBtn.addEventListener("click", clickHandler);
  
  
  /************************   PART III  ******************************/
  
  /**
   *Get the margin for error differnce of max pts and pts left in class and the user current pts and the goal Pts
   * @return {Number} error
   */
  function getDiffUser() {
    return (myCourse.getGoal() - getuserPts());
  }
  /**
   *Get the margin for error differnce of max pts and pts left in class and the user current pts and the goal Pts
   * @return {Number} error
   */
  function marginForError() {
    const error = (myCourse.maxPts() - getCurrentPts()) - getDiffUser();
    return error;
  }
  
  
  function clickHandlerPts() {
    let num;
    num = 95; //NEED to use percent func for pts of need/remaining
    let msg;
    const playPoints = marginForError()
    if (playPoints < 0)
      msg = `You need a new goal.`;
    else if (playPoints < 20)
      msg = `You have ${playPoints} points and need an average of ${num}% on the rest of your assignments.`
  
    else
      msg = `You have ${playPoints} points to play with.`;
    
    const resultSq = `Square value of this is ${squareValue} ft*ft.`;
    document.querySelector("#goalMargin-btn").textContent = resultSq;
  }
  