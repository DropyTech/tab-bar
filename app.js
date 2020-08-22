const clickTab = (a, b) => {
  let i, x, tablinks;
  x = document.getElementsByClassName("con");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(b).style.display = "block";
  a.currentTarget.className += " active";
};
