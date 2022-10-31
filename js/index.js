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
    //let iBtn = document.querySelectorAll("#colorBtn i");
    $("#close").removeClass("d-none");
    $("#toggle").addClass("d-none");

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

$("a[href^= '#']").click(function (e) {
  let aHref = $(e.target).attr("href");
  console.log(aHref);
  let sectionTop = $(aHref).offset().top;
  console.log(sectionTop);

  $("html,body").animate({ scrollTop: sectionTop }, 2000);
});

// api
async function getmealsFromApi() {
  var apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  console.log("apiResponse");
  var finalResult = await apiResponse.json();
  console.log(finalResult);
  let meals = finalResult.meals;
  let containerMeals = "";

  for (let i = 0; i < meals.length; i++) {
    containerMeals += ` 
    <div class="col-md-3" id="cards">
    <div class="card">
        <img src="${meals[i].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text p1">${meals[i].strMeal}</p>
        </div>
      </div>
</div>`;
  }
  $("#meals").html(containerMeals);
  $("#meals .card-body p").click(async function (e) {
    // document.location.href = "../description.html";
    // let element = $(e.target).text();
    let apiResponses = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${$(
        e.target
      ).text()}`
    );
    console.log("apiResponses");
    let finalResults = await apiResponses.json();
    console.log(finalResults);
    let mealsDesc = finalResults.meals;
    let containerMealsDesc = "";
    for (let i = 0; i < mealsDesc.length; i++) {
      if (mealsDesc[i].strMeal === $(e.target).text()) {
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

    $("#meals").html(containerMealsDesc);

    // return element;
    // console.log(element);
    // $("#lightBox").removeClass("d-none");
    // $("#mealsCategories").addClass("d-none");
  });
}
getmealsFromApi();
// export { getmealsFromApi };
