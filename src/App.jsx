import { useState } from 'react'
import './App.css'
import Left from './Components/Left'
import Right from './Components/Right'

function App() {

  const [song, setSong] = useState()
  const playSong = (song) => {
    console.log(song)
  }


  // const [playlistName, setPlaylistName] = useState('')
  // const handleChildClick = (playlist) => {
  //   setPlaylistName(playlist)
  // };
  return (
    <>
      <main>
        <Left playSong={playSong}/>
        {/* <Right handleChildClick={handleChildClick} /> */}
        <Right />
      </main>
    </>
  )
}

export default App
