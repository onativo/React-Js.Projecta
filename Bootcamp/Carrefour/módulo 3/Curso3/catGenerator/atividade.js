const base_url = 'https://cataas.com/cat/says/OlaHumano';
const catBtn = document.getElementById('otro-gato');
const catImg = document.getElementById('cat')

const getCats = async () =>{
    return base_url;
}

const loadImg = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);
//catBtn.addEventListener("click", getCats);

loadImg;