let prop;

function imaged() {
  $(document).ready(function () {
    $("img").click(function (event) {
      let pop = event.target.name;
      console.log(pop);
      document.getElementById(pop).checked = false;
      document.getElementById(pop).style.display = "block";
      document.getElementById(event.target.className).style.opacity = 0;
    });
  });
}

const varv = document.getElementById("increaser");
const delll = document.getElementById("delll");
$("#form input:checkbox").click(function () {
  if ($("#form input:checkbox:checked").length > 0) {
    const array1 = [
      "pizza1",
      "pizza2",
      "pizza3",
      "pizza4",
      "pizza5",
      "pizza6",
      "burger1",
      "burger2",
      "burger3",
      "Colddrink",
      "Dew",
      "Fanta",
      "Pepsi",
      "Sprite",
    ];
    const array2 = [
      "tsom1",
      "tsom2",
      "tsom3",
      "tsom4",
      "tsom5",
      "tsom6",
      "tsom7",
      "tsom8",
      "tsom9",
      "tsom10",
      "tsom11",
      "tsom12",
      "tsom13",
      "tsom14",
    ];
    for (let i = 0; i < array1.length; i++) {
      if (document.getElementById(array1[i]).checked) {
        document.getElementById(array2[i]).style.opacity = 1;
        document.getElementById(array1[i]).style.display = "none";
      }
    }

    // any one is checked
    console.log("check");
  } else {
    // none is checked
    console.log("nocheck");
  }
});

$(function () {
  $("#checkout").click(function () {
    var features = [];
    var features2 = [];

    $('form input[type="checkbox"]:checked').each(function () {
      //features.push($(this).val());
      features.push(document.getElementById($(this).val()).value);
      features2.push($(this).attr("name"));
    });
    $("#itemname").html(features.join("<br>"));
    $("#itemprice").html(features2.join("<br>"));

    for (let r = 0; r < features.length; r++) {
      console.log(features[r]);
    }

    function myq(array) {
      let total = 0;
      for (i = 0; i < array.length; i++) {
        let arra = array[i].split("x");
        let fb = parseInt(arra[0]) * parseInt(arra[1]);
        console.log(fb);
        total = total + fb;
      }
      return total;
    }
    var num = myq(features);
    console.log(num);
    if (num != 0) {
      document.getElementById("proceed").disabled = false;
      document.getElementById("demo2").innerHTML = num;
      prop = num;
    } else {
      document.getElementById("proceed").disabled = true;
      document.getElementById("demo2").innerHTML = "Cart empty";
    }
  });
});

const toggleButton = document.getElementsByClassName("togglebtn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

$("[type='number']").keypress(function (evt) {
  evt.preventDefault();
});

// document.getElementById('getdata').style.display='none'
document.getElementById("proceed").addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("getdata").style.display = "block";
});

document.getElementById("paybtn").addEventListener("click", () => {
  document.getElementById("visabtn").click();
});

const prcheck1 = document.getElementById("prcheck1");
prcheck1.checked = true;

const prcheck2 = document.getElementById("prcheck2");

prcheck2.addEventListener("click", () => {
  
  document.getElementById("visabtn").click();
  if (prcheck2.checked == false) {
    prcheck1.checked = true;
    
  } else{ prcheck1.checked = false;
    
  
  }
});
prcheck1.addEventListener("click", () => {
  if (prcheck1.checked == false) {
    prcheck2.checked = true;
    
    document.getElementById("visabtn").click();
    
  } else {
    prcheck2.checked = false;
   
    document.getElementById("visabtn").click();
  }
});

