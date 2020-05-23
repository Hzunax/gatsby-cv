module.exports = {
  siteTitle: 'Hi! I\'m Stijn!',
  siteDescription: `Website resume`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Stijn Van Asschodt',
  twitterUsername: 'van_asschodt',
  githubUsername: 'Hzunax',
  devToUsername: 'stijnva',
  authorAvatar: '/images/Stijn_Surfers_Paradise.jpg',
  authorDescription: `Motivated, hard-working developer with an appetite for learning new things. <br />
    Graduated in 2017 as a Master in Industrial Engineering - Electronics & ICT at KULeuven. <br />
    In 2018, I became a certified Scrum Master, which has helped me in better understanding the Agile environment at my current employer. <br />
    I currently work as a frontend developer, mainly with <strong>Javascript, Polymer & Web Components.</strong>`,
  skills: [
    {
      name: 'JavaScript',
      level: 65
    },
    {
      name: 'HTML',
      level: 50
    },
    {
      name: 'CSS',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 60
    },
    {
      name: 'React',
      level: 54
    },
    {
      name: 'Git',
      level: 70
    }
  ],
  jobs: [
    {
      company: "ING",
      begin: {
        month: 'Oct',
        year: '2019'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "Development, integration, maintenance and delivery of web components and an application that serves 30.000 customers daily."

    }, {
      company: "Exellys",
      begin: {
        month: 'Sep',
        year: '2017'
      },
      duration: '2 yr',
      occupation: "Frontend developer",
      description: "Developed several Polymer web components and created a web application used by internal employees"
    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/van_asschodt",
    linkedin: "https://www.linkedin.com/in/stijnvanasschodt/",
    github: "https://github.com/Hzunax",
    email: "stijn.van.asschodt@gmail.com"
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
      label: 'Stijn Van Asschodt',
      url: '/',
    }
  ]
}