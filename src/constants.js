// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import per_por from './assets/work_logo/per_por.png';
import simon from './assets/work_logo/simon.png';
import life from './assets/work_logo/life.png';
import todo from './assets/work_logo/todo.png';
import alpha from './assets/work_logo/alpha.png';
import amazon from './assets/work_logo/amazon.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Tata's Cybersecurity Analyst",
      company: "TATA [Forage]",
      date: "4 sep 2025",
      desc: " Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives.",
       skills: [
        "Network security",
        "threat analysis",
        "Malware",
        " phishing", 
        "cyber threats",

        
        
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "MERN Stack Development",
      company: "Mind Luster",
      date: " 4th march 2026",
      desc: "Successfully completed my MERN Stack Development Certification! Excited to enhance my skills in MongoDB, Express.js, React.js, and Node.js and build full-stack web applications",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Databricks for Machine Learning",
      company: "Simplilearn",
      date: "20th Sep 2025",
      desc: "It is built on Apache Spark and supports languages like Python and SQL, making data processing and model development faster and scalable..",
      skills: [
        "Python",
        "Sql",
        "ML",
        "Apache Spark",
        
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "JSS Academy of Technical Education",
      date: "Sept 2023 - July 2026",
      grade: "8.74 SGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering. During my studies, I developed a strong foundation in programming, software development, and core computer science concepts. I studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also participated in technical activities and projects that helped improve my practical skills and problem-solving abilities. My B.Tech journey helped me build strong technical knowledge and prepared me for a career in the IT industry.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Mahamaya IT Polytechnic",
      date: "Sept 2020- Aug 2023",
      grade: "78.8%",
      desc: "I completed my Diplom degree in Computer Science  from MMIT College, Maharajganj. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Diploma- (Computer Science Engineerning)",
    },
    
    {
      id: 3,
      img: vpsLogo,
      school: "Divine Public School",
      date: "Apr 2019- March 2020",
      grade: "69.8%",
      desc: "I completed my class 10 education from Divine Public School, Maharajganj, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science , Maths , English, Hindi, SSt",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "My Portfolio ",
      description:
        "This is a personal portfolio website built with React and Tailwind CSS. It showcases my projects, technical skills, and contact details with a clean, responsive, and modern designA powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions.",
      image: per_por,
      tags: ["HTML", " TailwindCSS", "JavaScript", "React JS"],
      github: "https://github.com/JyotiGupta3011/Portfolio",
      webapp: "https://portfolio-mu-lac-5iay8vh2gf.vercel.app/",
    },
    {
      id: 1,
      title: "Simon Memory Challenge",
      description:
        "A simple browser-based memory game where users repeat a sequence of colors and sounds. Built using JavaScript with increasing difficulty levels to test and improve memory skillsA full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image:simon,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/JyotiGupta3011/Simon-Memory-Challenge",
     
    },
    {
      id: 2,
      title: "Life Insurance",
      description:
        "A responsive frontend website designed for a life insurance service, showcasing plans, benefits, and contact information with a clean and user-friendly interface.",
      image: life,
      tags: [ "HTML", "CSS",  "bootstrap"],
      github: "https://github.com/JyotiGupta3011/life_insurancep",
      
    },
    {
      id: 3,
      title: "Q apps land",
      description:
        "A modern landing page for a mobile application, designed to highlight app features, benefits, and download options using responsive UI design.",
       image: alpha,
      tags: ["HTML", "CSS",  "bootstrap"],
      github: "https://github.com/JyotiGupta3011/q-apps_land",
    },
    {
      id: 4,
      title: "Todo List",
      description:
        "A task management application that allows users to add, delete, and organize daily tasks. Built with JavaScript to improve productivity and task tracking.",
      image: todo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/JyotiGupta3011/Todo-List-With-DOM",
     
    },
    {
      id: 5,
      title: "Amzon forntend clone ",
      description:
        "A frontend clone of the Amazon homepage created using HTML, CSS, and JavaScript, replicating the layout, product sections, and basic UI design of the original site.",
      image: amazon,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JyotiGupta3011/Amazon_clone",
     
    },
    
    
  ];  
