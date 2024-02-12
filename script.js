

const getsuperheroes = () => {
    console.log("hello");
    const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    fetch(url)
    .then(res=>res.json())
    .then(json=>document.querySelector(".joke").innerHTML=`<p>${json.joke}</p>`)

}

