import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

function Timeline() {
	return (
		<div className='flex flex-col md:flex-row justify-center my-20 '>
			<div className='w-full md:w-7/12'>
				<Title>Timeline</Title>
				<ol className='flex flex-col  relative border-l border-stone-200 dark:border-stone-700'>
					{timeline.map((item, index) => (
						<TimelineItem
							year={item.year}
							title={item.title}
							duration={item.duration}
							details={item.details}
							key={index}
						/>
					))}
				</ol>
			</div>
		</div>
	)
}

export default Timeline
