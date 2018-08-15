var addList = document.getElementById("list");
var keyPressed = document.getElementById("txt");
var buttonPressed = document.getElementById("submit");

function add(){
  var text = document.getElementById('txt').value;
  var listItem = '<li><input type="checkbox"> <em>' + text + '</em><span>X</span></li>';
  if(text === ""){
    alert("Type the list");
    return;
  }
  addList.insertAdjacentHTML('beforeend', listItem);
  document.getElementById('txt').value = "";
}

function dele(e){
  var ele =  e.target;
  if(ele.tagName === "SPAN"){
    ele.parentNode.remove();
  }
}

function enter(e){
  e.preventDefault();
  if(e.keyCode == 13){
    buttonPressed.click();
  }
}

addList.addEventListener("click", dele);
keyPressed.addEventListener("keyup", enter);




