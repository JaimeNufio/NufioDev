import React from 'react'
import './Project.css'
import Terminal from "../Terminal/Terminal.js"
import ProjectItem from "../Project/Project-Item/Project-Item.js"

const items = [
    {
        "heading":"Streaming Twitter Sentiment Analysis",
        "thumb": "/assets/twittersentiment.png",
        "app": "Github",
        "text": "Streaming sentiment analysis solution using the Twitter API, Apache Spark, MLlib and Firebase",
        "title": "Spark & MLlib",
        "icon": "fab fa-python",
        "tech": "Python",
        "link": "https://github.com/JaimeNufio/TwitterStreamingSentimentAnalysis"
    },
    {
        "heading":"MTG Sentiment Analysis",
        "thumb": "/assets/mtg.png",
        "app": "Github",
        "text": "Sentiment analysis of Magic the Gathering cards for color-pie classification of custom fan cards.",
        "title": "MTGAI",
        "icon": "fas fa-hat-wizard",
        "link": "https://github.com/JaimeNufio/MTGAI"
    },
    {
        "heading":"Playlist Organizer for Spotify",
        "thumb": "/assets/Nufio.png",
        "app": "Youtube",
        "text": "Multi-featured application for organizing your Spotify Playlists and discovering music and artists.",
        "title": "Spotify Multitool",
        "icon": "fab fa-spotify",
        "link": "https://www.youtube.com/watch?v=o8D2g7Zujis"
    },
    {
        "heading":"Gonk: a Discord Bot",
        "thumb": "/assets/gonk.jpg",
        "app": "Github",
        "text": "Third iteration of my personal discord bot. Complete rewrite in Python (previously, Nodejs).",
        "title": "Gonk Bot",
        "icon": "fab fa-discord",
        "tech": "Python",
        "link": "https://github.com/JaimeNufio/Gonk"
    },
    {
        "heading":"Music Visualizer for Spotify",
        "thumb": "/assets/musicvisualizer.png",
        "app": "Youtube",
        "text": "Music visualizer based on data from the Spotify API.",
        "title": "Spotify Visualizer",
        "icon": "fab fa-spotify",
        "link": "https://www.youtube.com/watch?v=HZkfDTDCeXs"
    },
    {
        "heading":"Markov Trump",
        "thumb": "/assets/trump.png",
        "app": "Twitter",
        "text": "Twitter bot that auto-generates tweets based on a markov chain developed from an archived collection of @realDonaldTrump",
        "title": "@MarkovTrump_",
        "icon": "fab fa-twitter",
        "link": "https://twitter.com/MarkovTrump_"
    },


// song attributes     
//playlist manager https://www.youtube.com/watch?v=o8D2g7Zujis
]


function func(txt){
    console.log(txt)
}

const project = (props) =>{

    return (
        <div className=" mt-3 p-2 container">
            <div className="row">
               {items.map((arr) => (
                   
                    <ProjectItem items={arr}>
                    </ProjectItem>
               ))}
            </div>
        </div>
    )
}

export default project