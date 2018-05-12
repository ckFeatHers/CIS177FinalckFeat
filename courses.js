const cPts = [2,16,14,18,64,16,21,16,64,16,14,14,64,14,14,0,95];

const weekly = new Map();

weekly.set("LA252", cPts);  //OR:
weekly.set("HT299", [0, 25,25,125,125,225,0,125,25,125,225,0,125,25,125,25,225]);
weekly.set("LA195", [0, 16, 23, 28, 10, 73, 20, 22, 16, 16, 64, 29, 24, 37, 25, 30, 100]);
weekly.set("HT187", [0,25,25,100,0,125,225,0,125,25,125,225,0,125,0,125,225]);
weekly.set("MM177", [0,10,10,10,10,10,10,5,5,100,10,10,10,10,15,20,200]);

/**
 * @param {string} Key from input on form
 * @returns {array} info for filling Course info
 */

function getInfo(key) {  
const dbInfo = [ 'LA195','CIS-195 Intro to Database', 533, 10, 224];
const cInfo = ['LA252', 'CIS-252 C#', 469, 10, 247];
const jvInfo = ['HT187', 'CIS-187 Java', 1525, 7, 650];
const pyInfo = ['HT299','CIS-165 Python', 1550, 7, 800];
const jsInfo = ['MM177','CIS-177 JavaScript', 445, 10, 170];

if(key == dbInfo[0])
  return dbInfo;
if(key == cInfo[0])
  return cInfo;
if (key == jvInfo[0])
  return jvInfo;
if (key == pyInfo[0])
  return pyInfo;
if (key == jsInfo[0])
  return jsInfo;
}//end of get info


/**
 * get weekly[] sum
 * @param {string} key point values of the class pts array
 * @return {Number} class total = sum of all week's points

function getMaxTotal(key) {
  const wkarray = weekly.get(key);
  console.log(wkarray);
  const tempVar = wkarray.sum;
  console.log(tempVar);
  console.log(wkarray.value.sum)
  const sum = weekly(key).value.sum;
  console.log(sum)
  return sum;
} */

/**
 * Get the max points available for the current week.
 * @param {string} key from classid and will retrive from Map weekly
 * @retuns {Number} total total weekly points at this time

function getWkPts(key) {
  let total = 0;
  const week = weekly.get(key);
  // assume this is and array
  console.log(week.isArray());
  const wk = document.querySelector("#week-num").value;
  for (i = 0; i < wk; wk++) {
    total += week[i];
  }
  return total;
} */

/**
 * using a constructor for an object empty object
 * will fill it with array 
 */
const Course(key) = {
  classinfo: getInfo(key),
  classid: info[0],
  name: info[1],
  scale: info[3],
  wkPts: info[4],
  max: info[2]
  // getMaxTotal(classid) change once working with const
  // weeks: getWkPts(classid)
};
