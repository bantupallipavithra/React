import Audio1 from "/assets/audio1.mp3"
export function Audio(){
    return(
        <>
        <audio>
            <source src={Audio1} type="audio/mpeg" />
        </audio>
        </>
    )
}