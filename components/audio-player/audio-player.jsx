export const AudioPlayer = () => {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')

    const onPlay = () => audio.play()

    return <div>
        <button onClick={onPlay}>Play</button>
    </div>
}