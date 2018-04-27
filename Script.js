var XScore = 0
var OScore = 0
var Turn = "X";
var End = false;
var Box_score = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
var Com = new Array();
function clicked(Box_name, Box_id) {
 if (Box_score[Box_id] == 0) {
    if (Turn == "o") {
      document.getElementById(Box_name).innerHTML = "o";
      Box_score[Box_id] = 7;
      Turn = "x";
      Winner();
    } else {
      document.getElementById(Box_name).innerHTML = "x";
      Box_score[Box_id] = 5;
      Turn = "o";
      Winner();
    }
  }
}
function Winner() {
Com[0] = (Box_score[0] + Box_score[1] + Box_score[2]);
Com[1] = (Box_score[3] + Box_score[4] + Box_score[5]);
Com[2] = (Box_score[6] + Box_score[7] + Box_score[8]);

Com[3] = (Box_score[0] + Box_score[3] + Box_score[6]);
Com[4] = (Box_score[1] + Box_score[4] + Box_score[7]);
Com[5] = (Box_score[2] + Box_score[5] + Box_score[8]);

Com[6] = (Box_score[0] + Box_score[4] + Box_score[8]);
Com[7] = (Box_score[2] + Box_score[4] + Box_score[6]);

	End = true;
  for (i = 0; i < 9;i++) {
  if(Box_score[i]==0){
  	End = false;
  }
  }
  for (i = 0; i < 9;i++) {
    if (Com[i] ==15){
      alert("X wins!!!");
       Clear();
       XScore += 3;
       document.getElementById("X").innerHTML = "X Score: " + XScore;
      break;
    }else if(Com[i]==21){
      alert("O Wins!!!");
      Clear();
      OScore += 3;
       document.getElementById("O").innerHTML = "O Score: " + OScore;
      break;
     }else if (End == true){
     alert("No winner");
     OScore += 1;
     XScore += 1;
     document.getElementById("O").innerHTML = "O Score: " + OScore;
     document.getElementById("X").innerHTML = "X Score: " + XScore;

     Clear();
     break;
    }
  }
}

function Clear() {
Turn = "X"
  Box_score = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById("TL").innerHTML = "";
  document.getElementById("TM").innerHTML = "";
  document.getElementById("TR").innerHTML = "";
  document.getElementById("ML").innerHTML = "";
  document.getElementById("MM").innerHTML = "";
  document.getElementById("MR").innerHTML = "";
  document.getElementById("BL").innerHTML = "";
  document.getElementById("BM").innerHTML = "";
  document.getElementById("BR").innerHTML = "";
}
function NewGame(){
$(".Box").show(10000, "easeOutBounce");
$(".Score").show(3000, "easeOutBounce");
Start();
}
function Start(){
Clear();
OScore = 0;
XScore = 0;
document.getElementById("O").innerHTML = "O Score: " + OScore;
document.getElementById("X").innerHTML = "X Score: " + XScore;
}