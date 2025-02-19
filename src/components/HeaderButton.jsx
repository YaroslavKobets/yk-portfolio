const HeaderButton = props => {
	let classes = `bg-violet-300 dark:bg-orange-300 text-white dark:text-stone-900 p-1 sm:py-2 sm:px-3 rounded-md flex items-center justify-center font-bold text-sm sm:text-xl	 ${props.className}`
	return (
		<a {...props} className={classes}>
			{props.children}
		</a>
	)
}

export default HeaderButton
