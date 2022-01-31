//Question 1: Create an object called cat.

var cat = {
    name: "rocky",
    age: "1 years",
    color: "white",
    complain: function () {
        console.log("Meow!");
    }
}
cat.complain();

//Question 2: Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3: Use the style property on the heading variable from the question above to change its font size to "2em".

const h3 = document.querySelector("h3");
heading.style.fontSize = "2em";

// question 4: Add a class to the heading variable called subheading.

const subheading = document.querySelector(".subheading");
subheading.innerHTML = "Uptated Title";

//Question 5: Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
//Loop through the p elements and change the colour of each to "red".

const div = document.getElementById("container");
div.style.color = "red";

// Question 6:  Select the div with a class of results, assign it to a variable called resultsContainer and set
// its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.

const results = document.querySelector('.results');
const resultsContainer = document.querySelector('.results');
results.style.backgroundColor = "yellow";
resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";

// question 7: Create a function that has one parameter called list.
//Inside the function, loop through the list parameter and console log the name property in each object.
//Call the function and pass in the cats variable in the script.js file in the repo.

function greatList(cats) {
    is.name = Bobs;
    is.age = 3;
    is.color = white;
}
for (let i = 0; i < greatList.length; i++) {
    console.log(greatList);
}

// question 8: Create a function called createCats. The function will have one parameter called cats.
//Inside the function loop through the value passed in as cats and create HTML for each object in the array.

const cats = [{
        name: "Mari",
        age: 5
    },
    {
        name: "Rocky",
    },
    {
        name: "Bob",
        age: 11
    }
];

function createCats(cats) {

    for (let i = 0; i < cats.length; i++) {

        const catsAge = cats[i].age;
        const catsName = cats[i].name;

        if (catsAge === "number") {

            document.querySelector(".cat-container").innerHTML += `<div><h5> 
     ${catsName}</h5> <p> ${catsAge} </p> </div>
     `;

        } else {
            document.querySelector(".cat-container").innerHTML += `<div><h5>
      ${catsName}</h5> <p> ${catsAge} </p></div>`;

        }
    }
}
createCats(cats);