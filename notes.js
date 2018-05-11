/**
 * Can I?
 *
 * 1. user inputs of 
 * -currentPts in class
 * -currentWk on the sylibi
 * - gradeGoal
 * -class/instructor
 *
 * 2. program const use MAP or double array
 *  -INSTRUCTOR 
 *  -CLASS # 
 *  -MAX_PTS 
 *  -SCALE for A
 *  -WEEKLY[] points for class by week
 *      a. will start with Constants to verify function accuracy before using a Map
 *
 * 3  Create Object with values above : recommended by MDN to use obj for unknowns until programming time
 *      a  may be easier with methods
 *      b  class course can have consts w/method 
 *          -scale value 100 - scale for A; 
 *          -current wk max pts for loop through weekly array      
 *
 * 4 Create Methods to process output:
 * PART I 
 *    -retrieve value of letter grade
 *    -Determine Class pts needed for Goal
 *    -OUTPUT gradeGoal 
 * 
 * PART II
 *    -retrieve current week values 1-17 - 
 *    -calculate current week total class pts - use for loop to current week
 *    -retrieve (and test) user current week's points - test neg, non num, over max pts for class
 *    -calcualte current percent average with user pts and class current pts
 *    -OUTPUT traking - current % state points left in class
 * 
 * PART III
 *    -Compare Diff of Max pts to Current Class Pts to Diff
 *    -get percent needed for remaining points in Class to reach goal(similar to point margin)
 *    -OUTPUT pointMargin  - pt margin and avg % of future assignments
 *
 * 5 BIG QUESTIONS OUTPUTS
 *          a. Class target for goal
 *          b. Current status 
 *          c. Margin for achieving goal
 *
*/
