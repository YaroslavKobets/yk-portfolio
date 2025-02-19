import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import Title from './Title'

function Portfolio() {
	return (
		<>
			<Title>Portfolio</Title>
			<div className='flex flex-col md:flex-row items-center justify-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{portfolio.map((project, index) => (
						<PortfolioItem
							imgUrl={project.imgUrl}
							title={project.title}
							stack={project.stack}
							link={project.link}
							key={index}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Portfolio
