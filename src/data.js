import * as icon from 'react-icons/si'

const profile = {
	name: 'Dhanush Pavan',
	role: 'Machine Learning Engineer',
	description: "I’m Dhanush Pavan, a B.Tech student specializing in Artificial Intelligence and Machine Learning. As an aspiring Full-Stack ML Engineer, I focus on bridging the gap between software engineering and production-grade Machine Learning. I am passionate about ML infrastructure, DevOps automation, and scalable web development, dedicated to optimizing algorithms and streamlining model productionalization from code to cloud.",
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/dhanushpavann' },
	{ icon: icon.SiLinkedin, link: 'https:/linkedin.com/in/dhanush-pavan/' },
	{ icon: icon.SiLeetcode, link: 'https://leetcode.com/u/dhanush4532/' },
	{ icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
];

const brand = 'DP'


const projects = [
	{
		name: 'AI LAD',
		description: `AI LAD is a lightweight log monitoring application that detects anomalies in real time using machine learning, offering an efficient and LLM-assisted way to instantly catch and summarize hidden system threats.`,
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiDocker, name: 'Docker' },
			{ icon: icon.SiGoogle, name: 'CSS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Automated Vehicle Insurance Pipeline',
		description: `This project is an end-to-end MLOps application that automates machine learning workflows using MongoDB and AWS, offering a production-ready and containerized way to instantly validate, train, and deploy predictive models via automated CI/CD.`,
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiMongodb, name: 'MongoDB' },
			{ icon: icon.SiAmazonaws, name: 'AWS' },
			{ icon: icon.SiDocker, name: 'Docker' },
			{ icon: icon.SiGithubactions, name: 'GitHub Actions' },
			{ icon: icon.SiHtml5, name: 'HTML5' },
			{ icon: icon.SiCss3, name: 'CSS3' }
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Prospect Craft',
		description: `The Online Placement Prediction System uses machine learning to help students
					assess their on-campus placement chances.`,
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	// {
	// 	name: 'next project',
	// 	description: 'Cras leo mauris, gravida vel lectus ac, congue luctus odio. Sed varius varius est eget convallis sagittis sit amet.',
	// 	stack: [
	// 		{ icon: icon.SiHtml5, name: 'HTML' },
	// 		{ icon: icon.SiCss3, name: 'CSS' },
	// 		{ icon: icon.SiJavascript, name: 'Javascript' },
	// 		{ icon: icon.SiReact, name: 'ReactJS' },
	// 	],
	// 	linkProject: 'https://example.com',
	// 	linkGithub: 'https://github.com',
	// },
]


const stack = [
	{
		name: 'Programming Languages',
		items: [
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiJava, name: 'Java' },
			{ icon: icon.SiGo, name: 'Go' }

		],
	},

	{
		name: 'Web Development Technology',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiReact, name: 'React' },
			{ icon: icon.SiAngular, name: 'Angular' },
			{ icon: icon.SiVite, name: 'Vite' }

		],
	},
	{
		name: 'Back End',
		items: [
			
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiMysql, name: 'MySQL', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
			{ icon: icon.SiDjango, name: 'Django', },
		],
	},
	{
		name: 'Libraries and Framework',
		items: [
			{ icon: icon.SiTensorflow, name: 'TensorFlow' },
			{ icon: icon.SiScikitlearn, name: 'Scikitlearn' },
			{ icon: icon.SiKeras, name: 'Keras', },
			{ icon: icon.SiOpencv, name: 'Opencv', },
			{ icon: icon.SiDocker, name: 'Docker', },

		],
	},
	{
		name: 'Other Skills',
		items: [
			{ icon: icon.SiAutodesk, name: 'AutoCad' },
			{ icon: icon.SiScikitlearn, name: 'Scikitlearn' },
			{ icon: icon.SiKeras, name: 'Keras', },
			{ icon: icon.SiOpencv, name: 'Opencv', },
			{ icon: icon.SiDocker, name: 'Docker', },

		],
	},
]

const contact = {
	description: `Have a project in mind or just want to say hello? I'm always excited to connect with like-minded individuals, explore new opportunities, and collaborate on interesting projects. Feel free to drop me a message!`,
	email: 'dhanushb4532@gmail.com'
}

export { profile, social, projects, stack, contact, brand }