import React, { useEffect } from "react";
import './styles/MemeCreate.css'
import memesData from "../memesData.js"

const MemeCreate = () => {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  useEffect(() => {

    async function getMemes(){
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setAllMemeImages(data)
    }
    getMemes()
  }, [])

  function getMemeImage(event) {
    event.preventDefault()
    const allMemes = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <section>
      <form className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button 
            className="form--button"
            onClick={getMemeImage}
        >Get a new meme image 😉
        </button>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </form>
    </section>
  )
}

export default MemeCreate