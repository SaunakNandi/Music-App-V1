let music = document.querySelector('audio')
let image = document.querySelector("img")
let artist = document.getElementById('artist')
let title = document.getElementById("title")
let next = document.getElementById('next')
let play = document.getElementById('play')
let prev = document.getElementById('prev')

 // For Play
let isPlaying = false
/*
play.addEventListener('click', () =>
{
    isPlaying=true;
    music.play();// playing the music
    
    play.classList.replace('fa-play','fa-pause')        // replace the play button with pause one
    image.classList.add("anime")  // using classList we are telling that add class anime to <img
})

// For Pause 
play.addEventListener('click', () =>
{
    isPlaying=false;
    music.play();// playing the music
    
    play.classList.replace('fa-play','fa-pause')        // replace the play button with pause one
    image.classList.add("anime")  // using classList we are telling that add class anime to <img
})
*/

const pauseMusic= () =>
{
    isPlaying=false;
    music.pause();// playing the musicplay.classList.replace('fa-pause','fa-play')     // replace the play button with pause one
    play.classList.replace('fa-pause','fa-play')
    image.classList.remove("anime")  // using classList we are telling that remove class anime 
}

const playMusic= ()=>
{
    isPlaying=true;             // that is when play is pressed again isPLaying become true and pauseMusic is called
    music.play();
    play.classList.replace('fa-play', 'fa-pause')        // replace the play button with pause one
    image.classList.add("anime")// using classList we are telling that add class anime to <img/image
}

play.addEventListener("click", () =>
{
    // using ternary operator
    isPlaying ? pauseMusic() : playMusic();  
})


 // array of object
let song = [{
    name: "Attention",
    title: "Attention",
    artist: "Charlie Puth",
},
{
    name: "History",
    title: "History",
    artist: "One Direction",
},
{
    name: "How Long",
    title: "How Long",
    artist: "Charlie Puth",
},
{
    name: "Electric",
    title: "Electric",
    artist: "Katy Perry",
},
{
    name: "Astronaut in The Ocean",
    title: "Astronaut in The Ocean",
    artist: "Masked Wolf",
}
]

const loadSong = (song) =>
{
        // change the content of title and artist
    title.textContent = song.title
    artist.textContent = song.artist
    music.src = "Music/" + song.name + ".mp3"
    image.src="PICS/"+song.name+".jfif"
}
//loadSong(song)

let songIndex=0
const nextSong = () =>
{
    songIndex=(songIndex+1)%song.length
    loadSong(song[songIndex])
    playMusic()
}

const prevSong = () => {
    songIndex=(songIndex-1 + song.length)%song.length
    loadSong(song[songIndex])
    playMusic()
}

next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)




