const resetBtn = document.querySelector("#reset");

function clickHandlerNew() {
  let goal = parseInt(document.querySelector("#goal").value);
  let userPts = parseInt(document.querySelector("#user-pts").value);
  let classId = document.querySelector("#course").value;
  let week = parseInt(document.querySelector("#week-num").value);

  // needs to create a new myClass!
  // use addEventListener to entry boxes
  // determin best type:
  // week.addEventListener("", clickHandlerNew);??

}

resetBtn.addEventListener("click", clickHandlerNew);


<div>
<button id="reset-btn" type="button" value="Reset">Reset</button>
</div>
