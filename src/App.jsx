import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeaderButton from './components/HeaderButton'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'

function App() {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [])

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const sun = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
			/>
		</svg>
	)

	const moon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='white'
			className='w-6 h-6'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
			/>
		</svg>
	)

	return (
		<>
			<div className='fixed flex justify-end p-1 sm:p-2 w-full z-10 bg-white/95 dark:bg-stone-900/95 gap-1 sm:gap-2 '>
				<HeaderButton
					className=''
					href='https://djinni.co/q/de6bc0b693/'
					target='_blank'
				>
					&#128293; Hire Me &#128293;
				</HeaderButton>
				<HeaderButton
					href='./CV-Yaroslav_Kobets_REACT_FRONT-END_DEV.pdf'
					download
				>
					Download CV
				</HeaderButton>
				<HeaderButton href='https://github.com/YaroslavKobets' target='_blank'>
					<img
						className='max-w-[24px] invert dark:invert-0'
						src='./assets/github.svg'
						alt='GitHub'
					/>
				</HeaderButton>
				<HeaderButton
					href='https://www.linkedin.com/in/yaroslav-kobets/'
					target='_blank'
				>
					<img
						className='max-w-[24px] invert dark:invert-0'
						src='./assets/linkedin.svg'
						alt='LinkedIn'
					/>
				</HeaderButton>
				<HeaderButton
					type='button'
					onClick={handleThemeSwitch}
					className='bg-violet-300 dark:bg-orange-300'
				>
					{theme === 'dark' ? sun : moon}
				</HeaderButton>
			</div>

			<div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
				<div className='max-w-5x1 w-11/12 max-w-screen-2xl	mx-auto	'>
					<Intro />
					<Portfolio />
					<Timeline />
					{/* <Contact /> */}
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
