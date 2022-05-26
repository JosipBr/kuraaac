

//=======Filtering (inspiration from w3schools: https://www.w3schools.com/howto/howto_js_filter_elements.asp)=========
filterSelection('all');
function filterSelection(c){
  var x,i;
  x=document.getElementsByClassName("filterDiv");
  for(i=0;i<x.length;i++){
    RemoveClass(x[i], "show");
    if(x[i].className.indexOf(c)>-1) AddClass(x[i], "show");
  }
}




//=======Showing filtered elements=======
function AddClass(element,name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

//=======Hiding elements that are not selected=======
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// =======Add active class to the current control button (highlight it)========
var btnContainer = document.getElementsByClassName("filtercontainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//scroll navbar
window.addEventListener("scroll", function(){
  var nav =this.document.getElementById("navbar");
  nav.classList.toggle("sticky",window.scrollY > 0);

});


//=======part of the code for the searchbar====
function myFunction(){
  let input=document.getElementById('searchbar').value;
  input=input.toLowerCase();
  let x  =document.getElementsByClassName('filterDiv');
  let y=document.getElementsByClassName('title');
  for (i = 0; i < x.length; i++) { 
    if (!y[i].innerHTML.toLowerCase().includes(input)) {
      RemoveClass(x[i], "show");
    }
    else {
      AddClass(x[i], "show");               
    }
}
}