import React, { useState,useEffect } from 'react'
import Conflip from './Coinflip.css'

function Coinflip() {
    const [fun, Setfun] = useState(null);
    
    useEffect(()=>{   //first mount
        let r=(Math.floor(Math.random() * 10 + 1))
        let r2=r<7 ? "Heads":"Tails"
        Setfun(r2)// usestate la setted
        if(r2==="Heads"){
        <img src={require('./1 rupee coin back side.png')} alt="No imagee is avaiable" style={{ height: 150, width: 150 }}></img>
        }else{
        <img src={require('./1 rupee coin front side.png')} alt="No imagee is avaiable" style={{ height: 150, width: 150 }}></img> 
        }
    },[])
     
    
    const lists = [{ name: 'Google', src: require('./Google image.png'), url: 'https://www.google.com' },
    { name: 'GeeksforGeeks', src: require('./geeks.png'), url: 'https://www.geeksforgeeks.org/' },
    { name: 'Apple', src: require('./apple.png'), url: 'https://www.apple.com/' }];
    
    function callflip() {
        let a = (Math.floor(Math.random() * 10 + 1))
        let y = a < 6 ? "Heads" : "Tails"
         Setfun(y);
    }


    return (
        <div className='start'>
            <div className='heading01'>
                <h1>Coin Flip Game</h1>
            </div>
            <div style={{                                 // list (array)
                position: 'fixed', // Fix the position
                bottom: 0, // Align to the bottom of the page
                right: 10, // Align to the left of the page
                marginBottom: 10, // Optional: space from the bottom edge
                display: 'flex',  // display the UI elements in a flex ways
                flexDirection: 'column',  //display the array elements in cloumn ways
                gap: 15 // Add gap between elements
            }}>
                {lists.map((data, index) => (
                    <div className='ipl' key={index}>
                        <img src={data.src} alt="no such imgg is avaiable"></img>
                        <a href={data.url} target='_blank' rel='noopener noreferrer'>{data.name}</a>
                    </div>
                ))}
            </div>
            <div style={{      //flip button and flip image
                position: 'fixed',  // Keep the image fixed on the screen
                top: '60%',  // Position it in the center of the screen
                left: '50%',  // Position it in the center horizontally
                transform: 'translate(-50%, -50%)'}}>   {/*Adjust to truly center it-- */}
                <button onClick={callflip}>Flip here</button>
                {fun === "Tails" ? <img src={require('./1 rupee coin front side.png')} alt="No imagee is avaiable" style={{ height: 150, width: 150 }}></img> : <img src={require('./1 rupee coin back side.png')} alt="No imagee is avaiable" style={{ height: 150, width: 150 }}></img>}
            </div>
        </div>
    )
}
export default Coinflip


