import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  // click
  function handleClick(e, key) {
    const audio = new Audio(`/tunes/${key}.wav`);
    audio.play();
  }

  useEffect(() => {
    function handleKeyDown(e) {
      const availableSounds = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'w', 'e', 't', 'y', 'u', 'o', 'p', ';',
        'A', 'B', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'W', 'E', 'T', 'Y', 'U', 'O', 'P'];

      if (!availableSounds.includes(e.key)) {
        return;
      }
      try {
        //teclas
        const audio = new Audio(`/tunes/${e.key}.wav`);
        audio.play();
        const keyElement = document.querySelector(`.key[data-key="${e.key}"]`);
        keyElement.classList.add('active');
        setTimeout(() => {
          keyElement.classList.remove('active');
        }, 100);
      } catch (error) {
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Virtual Piano</title>
        <meta name="description" content="Piano Virtual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pianoico.png" />
      </Head>
      <div className='wrapper'>
        <header>
          <h2>Virtual Piano</h2>
        </header>
        <ul className='piano-keys'>
          <li className='key white' onClick={(e) => handleClick(e, 'a')}><span>a</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 'w')}><span>w</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 's')}><span>s</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 'e')}><span>e</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'd')}><span>d</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'f')}><span>f</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 't')}><span>t</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'g')}><span>g</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 'y')}><span>y</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'h')}><span>h</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 'u')}><span>u</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'j')}><span>j</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'k')}><span>k</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 'o')}><span>o</span></li>
          <li className='key white' onClick={(e) => handleClick(e, 'l')}><span>l</span></li>
          <li className='key black' onClick={(e) => handleClick(e, 'p')}><span>p</span></li>
          <li className='key white' onClick={(e) => handleClick(e, ';')}><span>;</span></li>
        </ul>
      </div>
    </>
  )
}
