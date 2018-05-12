/**
 * Can I?
 *  
 * PART 1               PART 2                      PART 3
 * #course              #user-pts                   #user-pts
 * #goal                #week-num
 * 
 * COURSE               TRACK                       MARGIN
 * -maxPts              -wkMax = WEEKLY(p1)[#wk]    A-GoalPts(p1)- #user-pts
 * -GoalPts             C-GoalPts(p1)-#user-pts     B-maxPts(p1) - wkMax(p2)
 * -WEEKLY[](#course)   D-% #user-pts/wkMax
 *  * 
 * DISPLAY              DISPLAY                     DISPLAY
 * "Set Goal"           "Track Goal"                "Goal Margin"
 * classGoalBtn         trackBtn                    marginBtn
 * #goal-btn            #track-btn                  #margin-btn
 * #out-Goal            #out-Track                  #out-Margin
 * 
 * Course Info          Pts Away(C)                 Margin (RemainClass(B) - RemainNeed(A))
 * GoalPts              %Current(D)                 %Remaining(A/B)
 * 
 * 
 *
 * 1. user inputs
 * -course #course -pulldown list
 * -current week #week-num - entry (prefer pulldown list)
 * -user's current pts #user-pts - entry (validate not over max for class)
 * -grade goal #goal - pull down
 *
 * 2. program const use MAP or double array
 *  -CLASS id
 *  -CLASSNAME
 *  -MAX_PTS (can calculate from WEEKLY array - set until stage 2)
 *  -SCALE (can be used to calculate goal grade)
 *  -WEEKLY[] points for class by week(set to week10 for testing and add array at stage 2)
 *      a. will start with Constants to verify function accuracy at stage 1.
 *
 * 3. Values Calculations
 *      a. MAX_PTS = WEEKLY[].Sum
 *      c. Current Max Points (@ 10)= curr-max =+ Weekly[i] where => i < num-week;
 *      d. goal-pts = MAX_PTS.ceil * (100 - scale*goal/100)
 *          from user input (1 for A, 2 for B, 3 for C and 4 for Pass)
 *      e. Percentages
 *      f. Differences
 *
 * 4 Create Methods to process output:
 * PART I
 *    1-retrieve user's input values TEST input:
 *      -(neg, non num, over max pts).
 *    2-Create Person obj with user tested data.
 *    2-use class id as key for Map to build Course obj.
 *    -OUTPUT : #goal-btn : goalBtn
 *              Class name, goal pts for class
 *
 * PART II
 *    1-retrieve current week values 1-17 - #week-num
 *    2-calculate current week's total pts - use loop to current week-num
 *    4-calcualte current percent average with user pts and class current pts
 *    -OUTPUT : #track-btn : trackBtn
 *              Pts away from GoalPts and give current %
 *
 * PART III
 *    1-calculate Margin
 *          -need Diff Max pts to Current Class Pts  (AKA Remaining Pts in class)
 *          -need Diff GoalPts to Current User Pts #user-pts (AKA Remaining Pts needed for Goal)
 *    2-get percent needed for remaining assignments in Class to reach goal(similar to point margin)
 *    -OUTPUT : #margin-btn : marginBtn
 *             Pts margin and avg % of future assignments
 *
 * 5 BIG QUESTIONS OUTPUTS
 *          a. Class target for goal
 *          b. Current status of pts away from goal
 *          c. Margin for achieving goal
 *
 *
*/
