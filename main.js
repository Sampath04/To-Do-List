var addList = document.getElementById("list");

function add(){
  var text = document.getElementById('txt').value;
  var listItem = '<li><em>' + text + '</em><input type="checkbox"><span>X</span></li>';
  if(text === ""){
    alert("Type the list");
    return;
  }
  addList.insertAdjacentHTML('beforeend', listItem);
  
}

addList.addEventListener("click", dele);

function dele(e){
  var ele =  e.target;
  if(ele.tagName === "SPAN"){
    ele.parentNode.remove();
  }
}


