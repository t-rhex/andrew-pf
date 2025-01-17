// gitprofile.config.js

const config = {
  github: {
    username: 't-rhex', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['laravel-ecommerce'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'andrewadhikari',
    twitter: 'crygelist',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'www.andrewadhikari.com',
    phone: '612-382-xxxx',
    email: 'hello@andrewadhikari.com',
  },
  skills: [
    'Troubleshooting and Triaging',
    'Perl',
    'Electric Flow',
    'Failure identification',
    'Lead Primary Support',
    'Ansible',
    'DevOps',
    'MySQL',
    'Git',
    'Docker',
    'Openshift',
    'Dynatrace',
    'Jenkins',
    'ElasticSearch',
    'IBM Websphere and MQ',
    'Kafka',
    'API',
    'MariaDB',
    'Apigee',
    'Postman and SoapUI',
    'Urban Code Deployment',
    'Pivotal Cloud Foundry',
    'Helios',
    'Nexus CodeScan'
//     'Antd',
//     'Tailwind',
//     'Bootstrap',
  ],
  experiences: [
    {
      company: 'Veritas Technologies LLC',
      position: 'Software Engineer',
      from: 'June 2022',
      to: 'Present',
    },
    {
      company: 'RBC Wealth Management',
      position: 'Production Support Engineer / Application Analyst',
      from: 'June 2021',
      to: 'June 2022',
    },
    {
      company: 'Promise Neighborhood',
      position: 'DevOps Engineer Intern',
      from: 'May 2020',
      to: 'August 2020',
    }
  ],
  education: [
    {
      institution: 'St. Cloud State University',
      degree: 'Bachelor of Science in CyberSecurity, GPA 3.50',
      from: 'August 2016',
      to: 'December 2020',
    }
  ],
//   // Display blog posts from your medium or dev account. (Optional)
//   blog: {
//     source: 'dev', // medium | dev
//     username: 'arifszn',
//     limit: 3, // How many posts to display. Max is 10.
//   },
//   googleAnalytics: {
//     // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
//     id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
//   },
//   hotjar: {
//     id: '2617601', //  Please remove this and use your own id or keep it empty
//     snippetVersion: 6,
//   },
 themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
