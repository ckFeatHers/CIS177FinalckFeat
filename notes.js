/**
 * Can I?
 *  
 * PART 1               PART 2                      PART 3
 * #course              #user-pts                   #user-pts
 * #goal                #week-num
 * 
 * COURSE               TRACK                       MARGIN
 * -maxPts             -wkMax = WEEKLY(p1)[#wk]    A-GoalPts(p1) - #user-pts
 * -GoalPts             C-GoalPts(p1)-#user-pts     B-maxPts(p1) - wkMax(p2)
 * -WEEKLY[](#course)   D-% #user-pts/wkMax
 *  * 
 * DISPLAY              DISPLAY                     DISPLAY
 * "Set Goal"           "Track Goal"                "Goal Margin"
 * classGoalBtn         trackBtn                    marginBtn
 * #goal-btn            #track-btn                  #margin-btn
 * #out-Goal            #out-track                  #out-Margin
 * Course Info          Pts Away(C)                 Margin (B - A)
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
 *  -INSTRUCTOR
 *  -CLASS #
 *  -MAX_PTS (can calculate from WEEKLY array)
 *  -SCALE_A (based on A%)
 *  -SCALE (can calculate from A_SCALE)
 *  -WEEKLY[] points for class by week
 *      a. will start with Constants to verify function accuracy before using a Map
 *
 * 3. Values Calculations
 *      a. Scale = 100 - SCALE_A (skip and go to D)
 *      b  MAX_PTS = WEEKLY[].Sum
 *      c. Current Max Points = curr-max =+ Weekly[i] where => i < num-week;
 *      d. goal-per = 100 - (Scale*(1 for A, 2 for B, 3 for C and 4 for Pass))
 *          -could use recursion here- stage 3
 *      d. goal-pts = MAX_PTS.ceil * goal-per
 *
 * 4 Create Methods to process output:
 * PART I
 *    1-retrieve value of selected Course #course = pull from map
 *    2-Determine Class pts needed for #goal GoalPts = max.ceil * goal-per
 *    -OUTPUT : print key/value pairs; class, inst, max, scale, GoalPts.
 *
 * PART II
 *    1-retrieve current week values 1-17 - #week-num
 *    2-calculate current week's total pts - use loop to current week-num
 *    3-retrieve (and test) user current week's points #user-pts - test neg, non num, over max pts for class
 *    4-calcualte current percent average with user pts and class current pts
 *    -OUTPUT : #trackin-btn : trackingBtn
 *              Pts away from GoalPts and give current %
 *
 * PART III
 *    1-calculate Margin
 *          -need Diff Max pts to Current Class Pts  (AKA Remaining Pts in class)
 *          -need Diff GoalPts to Current User Pts #user-pts (AKA Remaining Pts needed for Goal)
 *    2-get percent needed for remaining assignments in Class to reach goal(similar to point margin)
 *    -OUTPUT pointMargin  - pt margin and avg % of future assignments
 *
 * 5 BIG QUESTIONS OUTPUTS
 *          a. Class target for goal
 *          b. Current status of pts away from goal
 *          c. Margin for achieving goal
 *
 *
*/
