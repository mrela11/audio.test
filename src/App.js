import './App.css';
import audio_1 from './audio/3e3fc081726eb67.mp3'
import audio_2 from './audio/cat-meow_g1oerneo.mp3'
import audio_3 from './audio/jg-032316-sfx-cat-meow.mp3'
import audio_4 from './audio/3e3fc081726eb67.mp3'
import audio_5 from './audio/playful-cat-sounds_z1wz-rnd.mp3'

function App() {

  const playAudio1 = () => {
    new Audio(audio_1).play();
  }

  const playAudio2 = () => {
    new Audio(audio_2).play();
  }

  const playAudio3 = () => {
    new Audio(audio_3).play();
  }

  const playAudio4 = () => {
    new Audio(audio_4).play();
  }

  const playAudio5 = () => {
    new Audio(audio_5).play();
  }

  return (
    <>
      <div className='container' >
        <div className='items'>
          <button type='button' className='item' onClick={playAudio1} >
            <img alt='pretty_cat' src=''/>
          </button>
          <button type='button' className='item' onClick={playAudio2}>
            <img alt='pretty_cat' scr=''/>
          </button>
          <button type='button' className='item' onClick={playAudio3}>
            <img alt='pretty_cat' scr=''/>
          </button>
          <button type='button' className='item' onClick={playAudio4}>
            <img alt='pretty_cat' scr=''/>
          </button>
          <button type='button' className='item' onClick={playAudio5}>
            <img alt='pretty_cat' src=''/>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
