(function($){
var id = 1;
var dojo = new Array();
var stadium = document.getElementById("gameboard");
var maxrow = 6;//6
var maxcol = 6;//7
var currRow;
var currCol;
var currRow;
var currNinja;

startbattle();

function startbattle(){
    initiateDojo();
//  placeDisc(Math.floor(Math.random()*2)+1); //this sets random color if player 1 or player 2
    jutsuNinja(1);
}
function analyzeWinner(row,col){
  if(getAdj(row,col,0,1)+getAdj(row,col,0,-1) > 2){console.log(1); //check horizontal
    return true; 
  } else {
    if(getAdj(row,col,1,0) > 2){console.log(2); //checks vertical
      return true;
    } else {
      if(getAdj(row,col,-1,1)+getAdj(row,col,1,-1) > 2){console.log(3);
        return true;
      } else {
        if(getAdj(row,col,1,1)+getAdj(row,col,-1,-1) > 2){console.log(4);
          return true;
        } else {console.log(5);
          return false;
        }
      }
    }
  }
}
function getAdj(row,col,row_inc,col_inc){
  if(cellVal(row,col) == cellVal(row+row_inc,col+col_inc)){
    return 1+getAdj(row+row_inc,col+col_inc,row_inc,col_inc);
  } 
  return 0;
}

function cellVal(row,col){
  if(dojo[row] == undefined || dojo[row][col] == undefined){
    return -1;
  } 
  return dojo[row][col];
}

function firstFreeRow(col,player){
  for(var i = 0; i<maxrow; i++){
    if(dojo[i][col]!=0){
      break;
    }
  }
  dojo[i-1][col] = player;
  return i-1;
}

function colAvail(){
  var moves_array = new Array();
  for(var i=0; i<maxcol; i++){
    if(dojo[0][i] == 0){
      moves_array.push(i);
    }
  }
  return moves_array;
}

function Disc(player){
//    console.log(player);
  this.player = player;
  this.color = player === 1 ? 'naruto' : 'sasuke';
  this.id = id.toString();
  id++;
  
  this.appendToBattle = function(){
    stadium.innerHTML += '<div id="n'+this.id+'" class="shuriken '+this.color+'"></div>';
  }
  
  var $this = this;
  document.onmousemove = function(evt){
    //if(currentPlayer == 1){
    currCol = Math.floor((evt.clientX - stadium.offsetLeft)/60);
    if(currCol<0){currCol=0;}
    if(currCol>maxrow){currCol=6;}
    $('#n'+$this.id).prop('style').left = (14+60*currCol)+"px";
    $('#n'+$this.id).prop('style').top = "-55px";
   // }
  }
  document.onload = function(evt){
    currCol = Math.floor((evt.clientX - stadium.offsetLeft)/60);
    if(currCol<0){currCol=0;}
    if(currCol>6){currCol=6;}
    document.getElementById('n'+$this.id).style.left = (14+60*currCol)+"px";
    document.getElementById('n'+$this.id).style.top = "-55px";
  }
  
  document.onclick = function(evt){
      if(colAvail().indexOf(currCol) != -1){
        commenceMove($this.id,$this.player);
      }
  }
}

function commenceMove(cid,player){
  currRow = firstFreeRow(currCol,player);
  trans(cid,(14+currRow*60));
  currNinja = player;
  analyzeBattle();
}

function analyzeBattle(){    
  if(!analyzeWinner(currRow,currCol)){
  if($('.shuriken').length === maxrow*maxcol) {
        alert('Match Draw!');
        stadium.innerHTML = "";
        return startbattle();
    }      
    jutsuNinja(3-currNinja);
  } else {
    var ninjaname = currNinja == 2 ? 'Sasuke' : 'Naruto';
    jutsuNinja(3-currNinja);
    alert("Victory " + ninjaname);
    stadium.innerHTML = "";
    startbattle();
  }
}
function insertToBattle() {
    stadium.innerHTML += '<div id="n'+this.id+'" class="shuriken '+this.color+'"></div>';
}
function jutsuNinja(ninja){
  currNinja = ninja;
  var shuriken = new Disc(ninja);
  shuriken.appendToBattle();
}

function initiateDojo(){
  dojo = new Array();
  for(var x=0; x<maxcol; x++){
    dojo[x] = new Array();
    for(var y=0; y<maxrow; y++){
      dojo[x].push(0);
    }
  }
}
function trans(id,loc){
    $('#n'+id).prop('style').top = loc+'px';
}    
})(jQuery);