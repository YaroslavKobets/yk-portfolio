function Timeline({ year, title, duration, details }) {
	return (
		<li className='mb-10 last:mb-0 ml-4'>
			<div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700'></div>
			<div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
				<span className='inline-block px-2 py-1 font-semibold bg-stone-900 rounded-md text-white dark:text-stone-900 bg-text-stone-900 dark:bg-white'>
					{year}
				</span>

				<div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
					{duration}
				</div>
			</div>
			<h3 className='text-lg mt-2 font-semibold text-stone-900 dark:text-white'>
				{title}
			</h3>
			<p className='mt-2 text-base font-normal text-stone-500 dark:text-stone-400 whitespace-pre-line	'>
				{details}
			</p>
		</li>
	)
}

export default Timeline
