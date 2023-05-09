import React from 'react' 

function HomeSection (){

    return(
        <section  className="w-screen">

        <video
            className="w-screen"            
            preload="auto"
            autoPlay
            loop
            muted
        >
            <source
                src="https://raw.githubusercontent.com/Doplax/doplax/main/img/video-bg.mp4"
                type="video/mp4"
            />
        </video>
    </section>
    )
}

export {HomeSection}