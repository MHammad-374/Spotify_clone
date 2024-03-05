import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './Body.css'
import faded from '../Songs/Faded.mp3'
import fadedPic from '../Pics/Faded.jpeg'
import badliar from '../Songs/BadLiar.mp3'
import badliarPic from '../Pics/Badliar.jpeg'
import alonePt2 from '../Songs/Alone_pt-2.mp3'
import alonePt2Pic from '../Pics/Alone_pt2.jpeg'
import onMy from '../Songs/OnMyWay.mp3'
import onMyPic from '../Pics/On_my_way.jpeg'
import beliver from '../Songs/Beliver.mp3'
import believerPic from '../Pics/Believer.jpeg'
import darkside from '../Songs/Darkside.mp3'
import darksidePic from '../Pics/Darkside.jpeg'
import havana from '../Songs/Havana.mp3'
import havanaPic from '../Pics/Havana.jpeg'
import into from '../Songs/Into_Your_Arms.mp3'
import intoPic from '../Pics/IntoYourArms.jpeg'
import letMeDown from '../Songs/Let_Me_Down_Slowly.mp3'
import letMeDownPic from '../Pics/LetMeDown.jpeg'
import unstoppable from '../Songs/Unstoppable.mp3'
import unstoppablePic from '../Pics/Unstoppable.jpeg'

function Body() {
    let songsArr = [
        {
            id: 1,
            image: fadedPic,
            songName: "Faded",
            desc: "Alan Walker",
            url: faded
        },
        {
            id: 2,
            image: badliarPic,
            songName: "Bad Liar",
            url: badliar,
            desc: "Imagine Dragons"
        },
        {
            id: 3,
            image: alonePt2Pic,
            songName: "Alone pt-II",
            url: alonePt2,
            desc: "Alan Walker & Ava Max"
        },
        {
            id: 4,
            image: onMyPic,
            songName: "On My Way",
            url: onMy,
            desc: "Alan Walker & Sabrina Carpenter"
        },
        {
            id: 5,
            image: believerPic,
            songName: "Believer",
            url: beliver,
            desc: "Imagine Dragons"
        },
        {
            id: 6,
            image: darksidePic,
            songName: "Dark Side",
            desc: "Alan Walker",
            url: darkside
        },
        {
            id: 7,
            image: havanaPic,
            songName: "Havana",
            desc: "Camila Cabello",
            url: havana
        },
        {
            id: 8,
            image: intoPic,
            songName: "Into Your Arms",
            desc: "Witt Lowry & Ava Max",
            url: into
        },
        {
            id: 9,
            image: letMeDownPic,
            songName: "Let Me Down Slowly",
            desc: "Alec Benjamin",
            url: letMeDown
        },
        {
            id: 10,
            image: unstoppablePic,
            songName: "Unstoppable",
            desc: "Sia",
            url: unstoppable
        }
    ]
    const [song, setSong] = useState('')

    const selectSong = (songURL) => {
        setSong(songURL)
    }
    return (
        <div className='rightBody font'>
            <h1 className="headingBody">Songs</h1>
            <div className="songs">
                {
                    songsArr.map((song, index) => {
                        return (
                            <>
                                <div className="Card" key={song.id} onClick={() => selectSong(song.url)}>
                                    <img className='coverCard' srcSet={song.image} alt="" />
                                    <h2 className="titleCard">{song.songName}</h2>
                                    <p className="descCard">{song.desc}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <ReactAudioPlayer
                className='audio'
                src={song}
                autoPlay
                controls
            />
        </div>
    )
}



export default Body
