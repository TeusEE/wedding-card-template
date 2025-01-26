import audioFile from './assets/background_music.weba'
import audioIcon from './assets/audio.svg'
import { useEffect, useRef, useState } from 'react';
const Audiocomp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const handleAudioToggle = () => {
    //버튼을 누르는 순간 load되게 만들어줌
    //미리 load할 경우 iphone에서 문제가 발생함
    if (!audioRef.current) {
        audioRef.current = new Audio(audioFile);
        audioRef.current.load()
        audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    if (isPlaying) {
        audioRef.current.pause();
    } else {
        audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    };
    useEffect(() => {
    //페이지를 나갈 경우 음악이 종료되게 설정
        return () =>{
            if (audioRef.current){
            audioRef.current.pause();
            audioRef.current = null;
            }
        }
    }, [])
    return (
        <>
            <img
                src={audioIcon} 
                width={"20px"} 
                style={{ marginRight: "10px", marginTop: "10px" }} 
                onClick={()=>handleAudioToggle()}
            />
        </>
    )
}
export default Audiocomp