// loading
$(document).ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("#loading").remove();
    $("body").css("overflow", "auto");
  });
});
//menu
let navWidth = $("nav").outerWidth();
console.log(navWidth);
$("header").css("left", `-${navWidth}px`);

$("header .menu-item").click(function () {
  if ($("header").css("left") === "0px") {
    $("#toggle").removeClass("d-none");
    $("#close").addClass("d-none");
    $("header").animate({ left: `-${navWidth}` }, 1000);
    $("nav ul .homes").animate({ top: `50%`, opacity: 0 }, 200, function () {
      $("nav ul .search").animate({ top: `50%`, opacity: 0 }, 200, function () {
        $("nav ul .categories").animate(
          { top: `50%`, opacity: 0 },
          200,
          function () {
            $("nav ul .area").animate(
              { top: `50%`, opacity: 0 },
              200,
              function () {
                $("nav ul .ingredients").animate(
                  { top: `50%`, opacity: 0 },
                  200,
                  function () {
                    $("nav ul .contact").animate(
                      { top: `50%`, opacity: 0 },
                      200
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  } else {
    $("#toggle").addClass("d-none");
    $("#close").removeClass("d-none");
    $("header").animate({ left: `0px` }, 1000, function () {
      $("nav ul .homes").animate({ top: `0`, opacity: 1 }, 200, function () {
        $("nav ul .search").animate({ top: `0`, opacity: 1 }, 200, function () {
          $("nav ul .categories").animate(
            { top: `0`, opacity: 1 },
            200,
            function () {
              $("nav ul .area").animate(
                { top: `0`, opacity: 1 },
                200,
                function () {
                  $("nav ul .ingredients").animate(
                    { top: `0`, opacity: 1 },
                    200,
                    function () {
                      $("nav ul .contact").animate(
                        { top: `0`, opacity: 1 },
                        200
                      );
                    }
                  );
                }
              );
            }
          );
        });
      });
    });
  }
});

let nameInp = document.getElementById("nameInp");
let emailInp = document.getElementById("emailInp");
let passwordInp = document.getElementById("passwordInp");
let signUp = document.getElementById("signUp");
let validName = document.getElementById("validName");
let validEmail = document.getElementById("validEmail");
let validPassword = document.getElementById("validPassword");
// signUp.setAttribute("disabled", "disabled");

// signUp.addEventListener("click", RegistrationForm);

function validationNameInp() {
  nameInpRegex = /^[a-z]{3,8}$/;

  if (nameInp.value == "") {
    document.getElementById("nameAlert").classList.remove("d-none");
    document.getElementById("nameAlert").classList.add("d-flex");
    validName.innerHTML = "<b>Attention!</b> Enter Your Name";
    return false;
  } else {
    if (nameInpRegex.test(nameInp.value) == true) {
      document.getElementById("nameAlert").classList.remove("d-flex");
      document.getElementById("nameAlert").classList.add("d-none");

      validName.innerHTML = "";
      return true;
    } else {
      document.getElementById("nameAlert").classList.remove("d-none");
      document.getElementById("nameAlert").classList.add("d-flex");

      validName.innerHTML = "<b>Attention!</b> invalid Name";
      return false;
    }
  }
}
nameInp.addEventListener("keyup", validationNameInp);

function validationEmailInp() {
  emailInpRegex = /^[a-z]+\@(gmail|yahoo|hotmail)(\.com)$/;

  if (emailInp.value == "") {
    document.getElementById("emailAlert").classList.remove("d-none");
    document.getElementById("emailAlert").classList.add("d-flex");
    validEmail.innerHTML = "<b>Attention!</b> Enter Your Email";
    return false;
  } else {
    if (localStorage.getItem("UserAccounts") != null) {
      registrationContainer = JSON.parse(localStorage.getItem("UserAccounts"));

      for (let i = 0; i < registrationContainer.length; i++) {
        if (emailInp.value == registrationContainer[i].email) {
          console.log(registrationContainer[i].email);
          document.getElementById("emailAlert").classList.remove("d-none");
          document.getElementById("emailAlert").classList.add("d-flex");

          validEmail.innerHTML = "<b>Attention!</b> This Email Already Exist";
          return false;
        }
      }
    }
    if (emailInpRegex.test(emailInp.value) == true) {
      document.getElementById("emailAlert").classList.remove("d-flex");
      document.getElementById("emailAlert").classList.add("d-none");

      validEmail.innerHTML = "";
      return true;
    } else {
      document.getElementById("emailAlert").classList.remove("d-none");
      document.getElementById("emailAlert").classList.add("d-flex");

      validEmail.innerHTML = "<b>Attention!</b> invalid Email";
      return false;
    }
  }
}
emailInp.addEventListener("keyup", validationEmailInp);

if (validationNameInp() == true && validationEmailInp() == true) {
  $("#signUp").removeAttr("disabled");
  // signUp.setAttribute("disabled");
  //   } else {
  //     signUp.removeAttribute("disabled");
  //   }
}
nameInp.addEventListener("keyup", function () {
  if (validationNameInp() == true && validationEmailInp() == true) {
    $("#signUp").removeAttr("disabled");
  } else {
    $("#signUp").attr("disabled", "true");
  }
});
emailInp.addEventListener("keyup", function () {
  if (validationNameInp() == true && validationEmailInp() == true) {
    $("#signUp").removeAttr("disabled");
  } else {
    $("#signUp").attr("disabled", "true");
  }
});
