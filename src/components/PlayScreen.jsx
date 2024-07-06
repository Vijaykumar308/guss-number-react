import React from 'react'

function PlayScreen({handleGamePlay}) {
  return (
    <>
    <div className='full-screen'>
        <div className='left-side'>
            {/* <img src="" alt="" /> */}
        </div>

        <div className='right-side'>
            <h1>Guss the Number</h1>
            <button className='playButton' onClick={handleGamePlay}> Play Now </button>
        </div>

    </div>
    </>
  )
}

export default PlayScreen