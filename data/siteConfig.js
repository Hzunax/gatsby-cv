module.exports = {
  siteTitle: "Hi! I'm Stijn!",
  siteDescription: 'I am a front-end engineer with a passion for learning.',
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Stijn Van Asschodt',
  twitterUsername: 'van_asschodt',
  githubUsername: 'Hzunax',
  devToUsername: 'stijnva',
  authorAvatar: '/images/Stijn_Surfers_Paradise.jpg',
  authorDescription: [
    {
      id: 1,
      content: `
        I am a motivated, hard-working front-end engineer, with an appetite for learning new things.
        I graduated in 2017 as a Master in industrial engineering: electronics-ICT at KULeuven, after which I started my first job as a consultant at Exellys.
        In 2018, I became a certified Scrum Master, which has helped me in better understanding the Agile environment at the company I work for.
      `,
    },
    {
      id: 2,
      content: `
        My current tech stack consists mainly of JavaScript, Polymer & Web Components.
        Apart from that, I’m experimenting with React, Node and GraphQL in my side projects and trying to get some experience with contributing to open source projects.
      `,
    },
  ],
  skills: [
    {
      name: 'JavaScript',
      level: 65,
    },
    {
      name: 'HTML',
      level: 50,
    },
    {
      name: 'CSS',
      level: 70,
    },
    {
      name: 'NodeJs',
      level: 60,
    },
    {
      name: 'React',
      level: 54,
    },
    {
      name: 'Git',
      level: 70,
    },
  ],
  jobs: [
    {
      company: 'ING',
      begin: {
        month: 'Oct',
        year: '2019',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'Development, integration, maintenance and delivery of web components and an application that serves 30.000 customers daily.',
    },
    {
      company: 'Exellys',
      begin: {
        month: 'Sep',
        year: '2017',
      },
      duration: '2 yr',
      occupation: 'Frontend developer',
      description:
        'Developed several Polymer web components and created a web application used by internal employees',
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/van_asschodt',
    linkedin: 'https://www.linkedin.com/in/stijnvanasschodt/',
    github: 'https://github.com/Hzunax',
    email: 'stijn.van.asschodt@gmail.com',
  },
  siteUrl: 'https://zealous-rosalind-fee447.netlify.app',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cocora.jpg',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/favicon-16x16.png',
  headerLinks: [
    {
      id: 1,
      label: 'Stijn Van Asschodt',
      url: '/',
    },
  ],
};
