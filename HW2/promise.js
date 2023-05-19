const urlApi="https://striveschool-api.herokuapp.com/api/deezer/search?q=";

function fishingServer(){
    fetch(urlApi+"eminem")
    .then((res) => {
        return res.json();
    })

    .then((res)=>{
        createHtml(res.data);
    })

    .catch((err)=>{
        console.log(err + " riprova dopo");
    })
}

function createHtml(songs){
    const myHtmlDiv=document.getElementById("myDiv");
    for (const song of songs) {
        const songDiv=document.createElement('div');
        
        const imgDiv=document.createElement('img');
        
        
        
        
        const cardBodY=document.createElement('div');
        cardBodY.innerText=song.title;
        cardBodY.classList.add('card-body');
       

        songDiv.appendChild(cardBodY);
        songDiv.classList.add('card');
        songDiv.classList.add('col-3');
        songDiv.classList.add('mx-2');
        songDiv.classList.add('d-flex');
        songDiv.classList.add('mb-2');

        myHtmlDiv.appendChild(songDiv);
    }
}

fishingServer();