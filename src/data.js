import * as icon from 'react-icons/si'

const profile = {
	name: 'Dhanush Pavan',
	role: 'Machine Learning Engineer',
	description: "I’m Dhanush Pavan, a B.Tech student specializing in Artificial Intelligence and Machine Learning. Skilled in Python, Java, and Go, I focus on developing  AI models, websites ,optimizing algorithms, and applying ML/DL techniques to solve real-world problems. Passionate about leveraging data-driven solutions to create scalable and efficient systems.",
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
		name: 'Sort Stack',
		description: `Sort Stack is an interactive selection-sorting game where users manually sort
		bars by dragging, offering a fun and engaging way to understandthe algorithm.`,
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiPython, name: 'Python' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'ODLRS',
		description: `The Online Diagnostic Lab Reporting System includes an AI-powered chatbot
					that simplifies patient interactions, such as report inquiries and appointment
					scheduling. I`,
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
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