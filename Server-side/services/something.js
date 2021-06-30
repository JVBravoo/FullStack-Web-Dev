// write a function to retrieve a blob of json
// make an ajax request. Use the "fetch" function.
// https://rallycoding.herokuapp.com/api/music_albums, not working

// function fetchAlbums() {
//     // will return a promise
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then( res => res.json())
//     .then(json => console.log(json));
// }

// just an example, will not use this file

async function fetchAlbums() {
    // will return a promise
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log(json);
}

fetchAlbums();