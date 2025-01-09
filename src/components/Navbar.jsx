import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button'

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const navContainerRef = useRef()
    const audioElenemtRef = useRef()
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }

    useEffect(() => {
        if(isAudioPlaying){
            audioElenemtRef.current.play()
        }else{
            audioElenemtRef.current.pause()
        }
    }, [isAudioPlaying])

  return (
    <div
        ref={navContainerRef}
        className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
    >
      <header className='absolute top-1/2 w-full -translate-Y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
            <div className='flex items-center gap-7'>
                <img src="/img/logo.png" alt="logo" className='w-10'/>

                <Button
                    id="product-button"
                    title="Products"
                    rightIcon={<TiLocationArrow/>}
                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                />
            </div>

            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                    {navItems.map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLocaleLowerCase()}`}
                            className='nav-hover-btn'>
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    className='ml-10 flex items-center space-x-0.5'
                    onClick={toggleAudioIndicator}
                >
                    <audio
                        ref={audioElenemtRef}
                        src='/audio/loop.mp3'
                        loop
                        className='hidden'
                    />
                    {[1, 2, 3, 4].map((bar) => (
                        <div
                            key={bar}
                            className={`indicator-line ${isIndicatorActive ? `active` : ``}`}
                            style={{animationDelay: `${bar*0.1}s`}}
                        />
                    ))}
                </button>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar