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

// search by name
let inpName = document.getElementById("nameInp");
inpName.addEventListener(
  "keyup",
  // api
  async function getMealsFromApi() {
    let apiResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    console.log("apiResponse");
    let finalResult = await apiResponse.json();
    console.log(finalResult);
    let meals = finalResult.meals;
    let containerMeals = "";
    //   console.log($("#nameInp").val());

    for (let i = 0; i < meals.length; i++) {
      if (
        meals[i].strMeal.toLowerCase().includes(inpName.value.toLowerCase()) ==
        true
      ) {
        containerMeals += ` 
      <div class="col-md-3">
      <div class="card">
          <img src="${meals[i].strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text p1">${meals[i].strMeal}</p>
          </div>
        </div>
  </div>`;
      }
    }
    $("#meals").html(containerMeals);
    if (inpName.value == "") {
      // getDataFromApi();
      $("#meals").html("");
    }

    $("#meals .card-body").click(async function (e) {
      // document.location.href = "../description.html";
      // let element = $(e.target).text();
      let apiResponses = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${$(e.target)
          .children("p")
          .text()}`
      );
      console.log("apiResponses");
      let finalResults = await apiResponses.json();
      console.log(finalResults);
      let mealsDesc = finalResults.meals;
      let containerMealsDesc = "";
      for (let i = 0; i < mealsDesc.length; i++) {
        if (mealsDesc[i].strMeal === $(e.target).children("p").text()) {
          // let tags = mealsDesc[i].strTags.split(",");
          // for (let j = 0; j < tags.length; j++) {
          //   console.log(tags[j]);
          // }
          containerMealsDesc += `<div class="col-md-4">
          <img
            src="${mealsDesc[i].strMealThumb}"
            class="w-100 text-center"
          />
          <h1 class="text-center">${mealsDesc[i].strMeal}</h1>
        </div>
        <div class="offset-md-1 col-md-7">
          <h2 class="fw-bolder">Instructions</h2>
          <p>${mealsDesc[i].strInstructions}</p>
          <p class="fw-bolder">Area : <span class=" fw-lighter"> ${mealsDesc[i].strArea} </span></p>
          <p class="fw-bolder">Category : <span class=" fw-lighter"> ${mealsDesc[i].strCategory} </span></p>
          <p class="fw-bolder">Recipes :</p>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure1} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure2} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure3} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure4} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure5} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure6} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure7} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure8} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure9} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure10} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure11} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure12} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure13} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure14} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure15} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure16} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure17} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure18} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure19} </span>
          <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure20} </span>
          <p></p>
          
          <span class="bg-white text-dark"> </span>
          <div>
            <button class="btn btn-success me-2"><a class="text-white text-decoration-none" href="${mealsDesc[i].strSource}">source</a></button>
            <button class="btn btn-danger"><a class="text-white text-decoration-none" href="${mealsDesc[i].strYoutube}">youtube</a></button>
          </div>
        </div>`;
        }
      }

      $("#mealsDesc").html(containerMealsDesc);

      // return element;
      // console.log(element);
      $("#lightBox").removeClass("d-none");
      $("#mealsCategories").addClass("d-none");
    });
  }
);

//search by letter

let inpLetter = document.getElementById("letterInp");
inpLetter.addEventListener("keyup", function () {
  getMealsByLetterFromApi(inpLetter.value);
});
async function getMealsByLetterFromApi(meals) {
  // let searchLetter = inpLetter.value;
  let apiHttpResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${meals}`
  );
  console.log("apiHttpResponse");
  let finalResults = await apiHttpResponse.json();
  console.log(finalResults);
  let mealsLetter = finalResults.meals;
  console.log(mealsLetter);
  let containerMealsLetter = "";
  //   console.log($("#nameInp").val());

  for (let i = 0; i < mealsLetter.length; i++) {
    if (
      mealsLetter[i].strMeal
        .toLowerCase()
        .includes(inpLetter.value.toLowerCase()) == true
    ) {
      containerMealsLetter += ` 
      <div class="col-md-3">
      <div class="card">
          <img src="${mealsLetter[i].strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text p1">${mealsLetter[i].strMeal}</p>
          </div>
        </div>
  </div>`;
    }
  }
  document.getElementById("meals").innerHTML = containerMealsLetter;
  //   if (inpLetter.value == " ") {
  //     // getDataFromApi();
  //     document.getElementById("meals").innerHTML = containerMealsLetter;
  //   }

  $(".card-body").click(async function (e) {
    // document.location.href = "../description.html";
    // let element = $(e.target).text();
    let apiResponses = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${$(e.target)
        .children("p")
        .text()}`
    );
    console.log("apiResponses");
    let finalResults = await apiResponses.json();
    console.log(finalResults);
    let mealsDesc = finalResults.meals;
    let containerMealsDesc = "";
    for (let i = 0; i < mealsDesc.length; i++) {
      if (mealsDesc[i].strMeal === $(e.target).children("p").text()) {
        // let tags = mealsDesc[i].strTags.split(",");
        // for (let j = 0; j < tags.length; j++) {
        //   console.log(tags[j]);
        // }
        containerMealsDesc += `<div class="col-md-4">
        <img
          src="${mealsDesc[i].strMealThumb}"
          class="w-100 text-center"
        />
        <h1 class="text-center">${mealsDesc[i].strMeal}</h1>
      </div>
      <div class="offset-md-1 col-md-7">
        <h2 class="fw-bolder">Instructions</h2>
        <p>${mealsDesc[i].strInstructions}</p>
        <p class="fw-bolder">Area : <span class=" fw-lighter"> ${mealsDesc[i].strArea} </span></p>
        <p class="fw-bolder">Category : <span class=" fw-lighter"> ${mealsDesc[i].strCategory} </span></p>
        <p class="fw-bolder">Recipes :</p>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure1} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure2} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure3} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure4} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure5} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure6} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure7} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure8} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure9} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure10} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure11} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure12} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure13} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure14} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure15} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure16} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure17} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure18} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure19} </span>
        <span class="bg-white text-dark m-1">${mealsDesc[i].strMeasure20} </span>
        <p></p>
        
        <span class="bg-white text-dark"> </span>
        <div>
          <button class="btn btn-success me-2"><a class="text-white text-decoration-none" href="${mealsDesc[i].strSource}">source</a></button>
          <button class="btn btn-danger"><a class="text-white text-decoration-none" href="${mealsDesc[i].strYoutube}">youtube</a></button>
        </div>
      </div>`;
      }
    }

    $("#mealsDesc").html(containerMealsDesc);

    // return element;
    // console.log(element);
    $("#lightBoxTwo").removeClass("d-none");
    $("#mealsCategories").addClass("d-none");
    $("#lightBox").addClass("d-none");
  });
}

// function validationSearchForm() {
//   searchLetterRegEx = /^[A-Z-a-z]{1}$/;

//     if (searchLetterRegEx.test(inpLetter.value) == true) {
//       return true
//   } else {
//     return false;
//   }
// }
