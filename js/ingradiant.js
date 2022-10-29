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

// api
async function getIngradiantsFromApi() {
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  console.log("apiResponse");
  let finalResult = await apiResponse.json();
  console.log(finalResult);
  let mealsIngredient = finalResult.meals;
  let containermealsIngredient = "";
  for (let i = 0; i < mealsIngredient.length; i++) {
    // let ingradiantDesc = `${mealsIngredient[i].strDescription
    //   .split(" ")
    //   .slice(0, 20)
    //   .join(" ")}`;
    if (i <= 20) {
      containermealsIngredient += ` 
        <div class="col-md-3">
        <div class="card text-center">
            <i class="fa-solid fa-bowl-food fa-3x card-img-top text-white"></i>
            <div>
              <h4 class="text-white pt-4">${
                mealsIngredient[i].strIngredient
              }</h4>
              <span class="text-white pt-4">${JSON.stringify(
                mealsIngredient[i].strDescription
              )
                .split(" ")
                .slice(0, 10)
                .join(" ")}</span>
            </div>
          </div>
    </div>`;
    } else {
      break;
    }
  }
  $("#ingredients").html(containermealsIngredient);

  $("#ingredients .card").click(async function (e) {
    // document.location.href = "../description.html";
    // let element = $(e.target).text();
    let apiResponses = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${$(
        e.target
      ).text()}`
    );
    console.log("apiResponses");
    let finalResults = await apiResponses.json();
    console.log(finalResults);
    let mealsDesc = finalResults.meals;
    let containerMealsDesc = "";
    for (let i = 0; i < mealsDesc.length; i++) {
      if (`${mealsDesc[i].strMeal.includes($(e.target).text()) === true}`) {
        // let tags = mealsDesc[i].strTags.split(",");
        // for (let j = 0; j < tags.length; j++) {
        //   console.log(tags[j]);
        // }
        containerMealsDesc += ` <div class="col-md-3 catContainer">
        <div class="card cardCat">
            <img src="${mealsDesc[i].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body categoryBody">
              <p class="card-text categoryText p1">${mealsDesc[i].strMeal}</p>
            </div>
          </div>
    </div>`;
      }
    }

    $("#mealsCategory").html(containerMealsDesc);

    // return element;
    // console.log(element);
    $("#lightBox").removeClass("d-none");
    $("#mealsCategories").addClass("d-none");
    //description

    $(".catContainer .cardCat .categoryBody .categoryText").click(
      async function (e) {
        // document.location.href = "../description.html";
        // let element = $(e.target).text();
        console.log(`dxx ${$(e.target).text()}`);
        let response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${$(
            e.target
          ).text()}`
        );
        console.log("response");
        let final = await response.json();
        console.log(final);
        let mealsCatDesc = final.meals;
        let containerMealsCatDesc = "";
        for (let i = 0; i < mealsCatDesc.length; i++) {
          if (
            `${mealsCatDesc[i].strMeal.includes($(e.target).text()) === true}`
          ) {
            // let tags = mealsCatDesc[i].strTags.split(",");
            // for (let j = 0; j < tags.length; j++) {
            //   console.log(tags[j]);
            // }
            containerMealsCatDesc += `  <div class="col-md-4">
      <img
        src="${mealsCatDesc[i].strMealThumb}"
        class="w-100 text-center"
      />
      <h1 class="text-center">${mealsCatDesc[i].strMeal}</h1>
    </div>
    <div class="offset-md-1 col-md-7">
      <h2>Instructions</h2>
      <p>${mealsCatDesc[i].strInstructions}</p>
      <p>Area : ${mealsCatDesc[i].strArea}</p>
      <p>Category : ${mealsCatDesc[i].strCategory}</p>
      <p>Recipes :</p>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure1} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure2} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure3} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure4} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure5} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure6} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure7} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure8} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure9} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure10} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure11} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure12} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure13} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure14} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure15} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure16} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure17} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure18} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure19} </span>
      <span class="bg-white text-dark m-1">${mealsCatDesc[i].strMeasure20} </span>
      <p></p>
      
      <span class="bg-white text-dark"> </span>
      <div>
        <button class="btn btn-success"><a class="text-white text-decoration-none" href="${mealsCatDesc[i].strSource}">source</a></button>
        <button class="btn btn-danger"><a class="text-white text-decoration-none" href="${mealsCatDesc[i].strYoutube}">youtube</a></button>
      </div>
    </div>`;
          }
        }

        $("#mealsCategoryDesc").html(containerMealsCatDesc);

        // return element;
        // console.log(element);
        $("#lightBoxTwo").removeClass("d-none");
        $("#mealsCategories").addClass("d-none");
        $("#lightBox").addClass("d-none");
      }
    );
  });
}
getIngradiantsFromApi();
