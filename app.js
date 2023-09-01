var myMovies = [
    {
        title: "john wick",
        published: 2014,
        genres: ["action"],
        actors: ["keaneu reeves"]
    },
    {
        title: "harry potter",
        published: 2001,
        genres: ["fantasy"],
        actors: ["daniel radcliffe"]
    },
    {
        title: "bladerunner",
        published: 1982,
        genres: ["action"],
        actors: ["harrison ford"]
    },
    {
        title: "the dark knight",
        published: 2008,
        genres: ["action"],
        actors: ["christian bale"]
    },
    {
        title: "avatar",
        published: 2009,
        genres: ["action"],
        actors: ["sam worthington"]
    },
    {
        title: "no time to die",
        published: 2022,
        genres: ["action"],
        actors: ["daniel craig"]
    },
    {
        title: "the Shawshank Redemption",
        published: 1994,
        genres: ["Drama"],
        actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
        title: "pulp Fiction",
        published: 1994,
        genres: ["Crime", "Drama"],
        actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        published: 2001,
        genres: ["Adventure", "Drama", "Fantasy"],
        actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
    },
    {
        title: "Forrest Gump",
        published: 1994,
        genres: ["Drama", "Romance"],
        actors: ["Tom Hanks", "Robin Wright"]
    }
]

// Select the HTML form element with the class "searchForm" and store it in the constant FORM
const FORM = document.querySelector(".searchForm");

FORM.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();

    const RESULTS = myMovies.filter(function (element) {

        return searchTitle(event.target.search.value, element.title)
            || compare(element.published, event.target.search.value)
            || findInArray(element.genres, event.target.search.value) // function invokation
            || findInArray(element.actors, event.target.search.value)

    });

    const MOVIELIST = document.querySelector('.results__list')
    MOVIELIST.innerHTML = ""
    RESULTS.forEach(function (movie) {

        MOVIELIST.innerHTML += `
    <ul class="movies__group">
        <h3 class="movies__title">${movie.title}</h3>
        <ul class="movies__item">
                <li class="movies__published">${movie.published}</li>
        </ul>
        <ul class="movies__item">            
                <li class="movies__genre">${movie.genres.join(', ')}</li>
        </ul>
        <ul class="movies__item">
                <li class="movies__actors">${movie.actors.join(', ')}</li>
        </ul>
    </ul>`
    })
    console.log(RESULTS);
}

function searchTitle(keyword, title) {
    return title
        .toLowerCase()
        .includes(
            keyword.toLowerCase()
        )
}

const compare = (a, b) => a == b

function findInArray(arr, keyword) { // tages 2 arguement
    return arr.find(function (item) { // returns true or false if it finds the "keyword" in the array
        return item.toLowerCase().includes(keyword.toLowerCase()) // sends a message to the "find" method if it finds it
    })
}



/*
const mouseEnter = document.getElementsByClassName(".nav")

mouseEnter.addEventListener("mouseenter", () => {
    mouseEnter.
})



function enterFunction() {
    document.getElementsByClassName (".nav")

   
 console.log(enterFunction)
}*/