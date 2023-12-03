const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod augue auctor, tristique est at, sagittis leo.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vel eleifend nulla.",
    "Suspendisse potenti. Vivamus ut semper ante. Donec auctor justo et dolor dignissim, vel sodales odio ullamcorper.",
    "Fusce malesuada ligula eget ante facilisis, nec tempor nulla faucibus. Integer id ligula sed odio suscipit ultricies nec at elit.",
    "Vestibulum consectetur justo a sapien sagittis tempus. Sed consequat metus non mi fermentum, quis ultrices lorem tristique.",
    "Etiam fringilla risus vitae massa malesuada, vitae ultricies est volutpat. Nullam nec diam vitae lectus ultricies posuere.",
    "Curabitur dapibus felis ac odio consequat, non fermentum nisl mattis. Phasellus dignissim odio in enim convallis, a efficitur sapien malesuada.",
    "Sed at metus eget urna congue suscipit non nec odio. Mauris id sapien sed lacus eleifend posuere.",
    "Integer lobortis arcu at libero mattis, ac tincidunt neque pulvinar. Vivamus eget augue sed purus tincidunt finibus."
];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}



const item = document.querySelector("#items")
const datacontainer = document.querySelector("#data")
const generate = () => {
    if (isNaN(item.value) || item.value < 0 || item.value > 9) {
        const randomindex = Math.floor(Math.random() * text.length)
        datacontainer.innerHTML = `<p>${text[randomindex]}</p>`
    } else {
      const localtext = shuffle(text);
        const data = localtext.slice(0, item.value);
        const parars = data.map(
            (d) => {
                return `<P>${d}</P>`
            }
        )
        datacontainer.innerHTML = parars.join("");
        //array to strign converstion
    }
}


