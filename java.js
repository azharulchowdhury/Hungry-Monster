function menuSelection(){
        let letter=document.getElementById("alphabet").value;
        if(letter.length==1){
            const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
        
            fetch(url)
            .then(res => res.json())
            .then(data =>displayMeals(data));
        }
       
        else{
            document.getElementById("notFound").style.display="block";
            document.getElementById("mealList").style.display="none";
        
        }

};
function displayMeals(data){
    const itemName=data.meals;
    mealList=document.getElementById("mealList");
    mealList.innerHTML="";
    for(let i=0;i<itemName.length;i++){
        item=itemName[i];
        console.log(item);
        const meal=document.createElement("div");
        meal.className="food-item";
        const mealInfo= `
        <img src="${item.strMealThumb}">
        <h5>${item.strMeal}</h5>
        <button onclick="ingredientList(${item.idMeal})">Ingredients`
        meal.innerHTML=mealInfo;
        mealList.appendChild(meal);
        
        }
    }

    const ingredientList = idMeal=> {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`
        fetch(url)
        .then(res => res.json())
        .then(data =>displayIdMeal(data));
    }
    
const displayIdMeal = idMeal => {
    const ingredientsDiv = document.getElementById('ingredients');
    ingredientsDiv.innerHTML = `
        <li>${item.strIngredient1}</li>
        <li>${item.strIngredient2}</li>
        <li>${item.strIngredient3}</li>
        <li>${item.strIngredient4}</li>
        <li>${item.strIngredient5}</li>
        <li>${item.strIngredient6}</li>
        <li>${item.strIngredient7}</li>
        <li>${item.strIngredient8}</li>
        <li>${item.strIngredient9}</li>
        <li>${item.strIngredient10}</li>
        <li>${item.strIngredient11}</li>
        <li>${item.strIngredient12}</li>
    `
}
     



