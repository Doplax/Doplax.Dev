import React from 'react' 

function HomeSection (){

    return(
        <section              style={{  height: '100%' ,width: '100%'}}         
        >

        <video
            //className="w-screen h-full"   
            style={{  height: '100%' ,width: '100%'}}         
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