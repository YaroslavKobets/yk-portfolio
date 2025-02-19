function PortfolioItem({ title, imgUrl, stack, link, index }) {
	return (
		<a
			href={link}
			target='_blank'
			className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden pt-2.5'
			rel='nofollow noopener'
		>
			<img
				src={imgUrl}
				alt={title}
				className='w-full  object-cover cursor-pointer'
			/>
			<div className='w-full p-4'>
				<h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
					{title}
				</h3>
				<p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
					{stack.map((item, index) => (
						<span
							className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'
							key={index}
						>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	)
}

export default PortfolioItem
