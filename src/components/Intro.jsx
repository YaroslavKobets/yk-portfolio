import TechStack from './TechStack'
import Title from './Title'

function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
				Yaroslav Kobets
			</h1>
			<Title className='text-base md:text-xl mb-3 font-medium'>
				Web Developer
			</Title>
			<p className='text-lg	 max-w-3xl	 mb-6 font-bold'>
				Hello! I am a web developer and I am looking for a company for long-term
				collaboration. Allow me to briefly introduce myself: I am determined and
				hardworking, with a strong desire and potential for growth. I enjoy all
				stages of web development.
			</p>
			<Title className='text-base md:text-xl mb-3 font-medium'>
				Tech Stack
			</Title>
			<TechStack />
		</div>
	)
}

export default Intro
