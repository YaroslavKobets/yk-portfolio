import stack from '../data/stack'

const TechStack = () => {
	return (
		<ul className='flex justify-center flex-wrap max-w-lh md:max-w-3xl gap-3'>
			{stack.map((stackItem, index) => {
				return (
					<li className='flex-[0_1_10%] min-w-[62px]' key={index}>
						<img src={stackItem.imgUrl} alt={stackItem.imgUrl} />
					</li>
				)
			})}
		</ul>
	)
}

export default TechStack
