import React from 'react'

function PlayScreen({handleGamePlay}) {
  return (
    <>
    <div className='play-screen full-screen full-screen-area flex align-item-center'>
        <div className='left-side'>
          <div className='game-box'>
            <p>I am thinking of a number between 1 to 100, 
              <br/> Can you Guess it ?
            </p>
            <button className='play-button' onClick={handleGamePlay}> Play Now </button>
          </div>
        </div>

        <div className='right-side'>
          <div className='round-circle'></div>
          {/* <div className='round-circle'></div>
          <div className='round-circle'></div>
          <div className='round-circle'></div>
          <div className='round-circle'></div> */}
            <h1 className='Game-text text-white' style={{textShadow:"2px 1px 2px black"}}>Guess The <p>NUMBER</p> Javascript Game </h1>
        </div>
    </div>
    </>
  )
}

export default PlayScreen