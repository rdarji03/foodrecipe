const searchbtn = document.querySelector(".search-btn");
const foodlist = document.querySelector(".display");
const fbtn = document.querySelector(".button-6");
const recipelist = document.querySelector(".get_recipe");
const mainhead = document.querySelector(".heading")
const search = document.querySelector(".search")
const APP_ID = "65f8da3b";
const APP_KEY = "a8d19589033daabef1363597e7011487";
const load = document.querySelector(".loadimg")

searchbtn.addEventListener("click", showfeed);



function showfeed() {

    let inptext = document.querySelector("#search-input").value.trim();
    const url = `https://api.edamam.com/search?q=${inptext}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    mainhead.innerHTML = "loadingdish...."
    load.src = "loading.gif"
    search.style.minHeight = "30vh"
    fetch(url)
        .then((resposne) => resposne.json())
        .then((data) => {
            console.log(data.hits)
            let html = "";
            if (data.hits.length >= 1) {

                data.hits.forEach((meal) => {
                    html += `<div class="displaymeal">
        <div class="content">
        
            <img src="${meal.recipe.image}" alt="" srcset="">
            <p class="m_name">${meal.recipe.label.slice(0,30)}</p>
            
            <div class="dishinfo">
           
                
                <p class="type">MealType:${meal.recipe.mealType}</p>
                <p class="dishtype">Cuisine Type:${meal.recipe.cuisineType[0]}</p>
                <p class="callories">Calories:${meal.recipe.calories.toFixed(2)}</p>
                </div>
                <button class="button-6 " role="button"><a href="${meal.recipe.url}">Get Recipe</a></button>
                
        </div>
    </div>`;
                    foodlist.innerHTML = html
                    mainhead.innerText = "Your Dishes Are Ready"
                    load.src = ""
                })

            } else {
                mainhead.innerText = "Recipe Not Found"
                load.src = ""
            }
        })
}