

const img= document.querySelector("img")
const button= document.querySelector("div")
const getDogPhotos= async()=>{
	const res= await fetch("https://cute-dogs-photos.herokuapp.com/api")
	const data= await res.json()
	console.log(data) 
	const randomNum= Math.floor(Math.random()* data.length)
	console.log(randomNum)
	img.src=data[randomNum]
}
getDogPhotos()

button.addEventListener("click",getDogPhotos)
