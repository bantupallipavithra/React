import image from './assets/Image1.jpg'
import video from './assets/video1.mp4'
import audio from './assets/audio1.mp3'
export function Media(){
    return(
        <>
       <img src={image} alt="image" width="500px" /><br />
       
       <audio src={audio} width="500px" controls></audio><br /><br />
       <video src={video} width="500px" controls></video>
        </>
    )
}