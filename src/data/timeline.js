function dateDifference(previousDate, currentDate) {
	const monthDifference =
		currentDate.getMonth() -
		previousDate.getMonth() +
		12 * (currentDate.getFullYear() - previousDate.getFullYear())
	const yearDifference = Math.floor(monthDifference / 12)
	const monthDifferenceRemainder = monthDifference % 12

	return `${yearDifference ? `${yearDifference} year` : ''}  ${
		monthDifferenceRemainder ? `${monthDifferenceRemainder} month` : ''
	}`
}

const result = (date1, date2) => {
	return dateDifference(new Date(date1), date2 ? new Date(date2) : new Date())
}

export default [
	{
		year: '01/2024 - Current',
		title: 'Front-end Developer (React / TS) at InsulaLabs',
		duration: result('2024-01-01'),
		details:
			'Stack: TS, React, Redux, Tailwind CSS. \n Team: 3 FE, 2 QA, 2 Designer, 1PM \n Tasks: \n • Developed reusable components for a product platform . \n • Built single-page applications (SPA) aimed at attracting and engaging new clients. \n • Fixed bugs and improved existing components, aligning them with the design system.',
	},
	{
		year: '09/2022 - 12/2023',
		title: 'Front-end Developer at EverestMedia',
		duration: result('2022-09-01', '2024-01-01'),
		details:
			"Stack: JS, HTML, CSS, SCSS, GSAP, Wordpress \n Team: 5 FE, 2 BE, 2 Designer, 4 QA, 1PM. \n Tasks: \n • Development of multi-page websites for the company's product sales. Participated in all stages of the project: from concept approval to final development.\n • Creation and integration of new functionality for the company's existing e-commerce websites.\n Achievements: \n • Introduced a component-based approach for standard elements repeated across product websites. This saved 12 to 20 hours of development time per website.",
	},
	{
		year: '03/2021 - 05/2022',
		title: 'Middle WordPress developer at UFUTURE / Unit.City ',
		duration: result('2021-03-01', '2022-05-01'),
		details:
			'Developed complex corporate and e-commerce sites with seamless WordPress integration and custom admin panels.',
	},

	{
		year: '10/2020 - 03/2021',
		title: 'Junior WordPress developer at Seoprofy',
		duration: result('2020-10-01', '2021-03-01'),
		details: 'Created landing pages with integration into WordPress.',
	},
	{
		year: 'Freelancer',
		title: 'Part-time Front-end Developer',
		details:
			"Implemented clients' website concepts in a short time frame and provided technical support after project completion.",
	},
]
