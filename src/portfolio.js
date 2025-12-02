/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prajwal's Portfolio",
  description:
    "A passionate and dedicated engineer who strives to achieve perfection in every software he builds",
  og: {
    title: "Prajwal Naik Portfolio",
    type: "website",
    url: "https://praj-naik.vercel.app/#/", //To change
  },
};

//Home Page
const greeting = {
  title: "Prajwal Naik",
  logo_name: "PrajwalNaik",
  currentPosition:
    "Graduate Research Assistant @ University of Colorado Boulder",
  subTitle:
    "A passionate and dedicated engineer who strives to achieve perfection in every line of code. Given a task, rest assured, it's in good hands.",
  resumeLink:
    "https://drive.google.com/file/d/1OEmLtb5blsXgtvqljYtirMVxbx94OprF/view?usp=sharing",
  cvLink:
    "https://drive.google.com/file/d/1vqtj4FGG_N1I4o6hNzld84z_OfO5xrwU/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/prajwal-naik",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/prajwal-naik",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prajwal-naik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:prajwalknaik7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Experience working with multiple languages",
        "⚡ Writing libraries from scratch in C/C++",
        "⚡ Implementing ML and AI algorithms in Python",
        "⚡ Developing complex multi-module applications for servers",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f0931c",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "cib:go",
          style: {
            backgroundColor: "transparent",
            color: "#00A7D0",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#47A248",
          },
        },
      ],
    },

    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React/Next",
        "⚡ High level proficiency in vanilla HTML, CSS and JavaScript",
        "⚡ Creating application backend in Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "cib:next-js",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "transparent",
            color: "#dc0431",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Modelling for forecasting",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud, DevOps & Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying highly distributed real time applications",
        "⚡ Automating deployment scenarios",
        "⚡ Test automation",
      ],
      softwareSkills: [
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos-jenkins",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Shellscripting",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#f79d16",
      },
      profileLink: "https://leetcode.com/prajwal-naik/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/naikprajwal40",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@naikprajwal40",
    },
    {
      siteName: "Frontendmentor.io",
      iconifyClassname: "simple-icons:frontendmentor",
      style: {
        color: "#4a5ea8",
      },
      profileLink: "https://www.frontendmentor.io/profile/prajwal-naik",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Colorado Boulder",
      subtitle: "Master of Science in Computer Science",
      logo_path: "cu.png",
      alt_name: "CUB",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Pursuing MS in CS from CU Boulder.",
        "⚡ Working as a Research Assistant in the Smead Department of Aerospace.",
      ],
      website_link: "https://www.colorado.edu/",
    },
    {
      title: "PES University",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "pesu.png",
      alt_name: "PESU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied fundamental software engineering courses like DSA, Operating Systems, Computer Networks etc.",
        "⚡ Completed courses on Machine Learning, Data Science, Cloud Computing and Full Stack Development",
        "⚡ Recieved distiction awards for every semester",
      ],
      website_link: "http://pes.edu",
    },
    {
      title: "Deeksha Center for Learning",
      subtitle: "Pre-University Education",
      logo_path: "deeksha.png",
      alt_name: "deeksha",
      duration: "2016 - 2018",
      descriptions: [
        "Passed with distinction with a final percentage of 98% in Karnataka PU Board Examinations",
      ],
      website_link: "https://deekshalearning.com/",
    },
    {
      title: "Sindhi High School",
      subtitle: "Secondary School Leaving Certificate",
      logo_path: "shs.png",
      alt_name: "shs",
      duration: "2003 - 2016",
      descriptions: ["Passed with distinction with a final CGPA of 10"],
      website_link: "http://www.sindhihighschool.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Natural Language Processing Specialization",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/WT7KR24X4PV4",
      alt_name: "coursera",
      color_code: "#ffffff",
    },
    {
      title:
        "Natural Language Processing with Classification and Vector Spaces",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearningai.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FRVGNH52ZE48",
      alt_name: "deeplearningai",
      color_code: "#ffffff",
    },
    {
      title: "NLP with Python for Machine Learning Essential Training",
      subtitle: "- LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/5630916ead42d7b8d8f4cda3d071afe06f7628667372f3e63aaf7e876f563d97",
      alt_name: "Linkedin",
      color_code: "#ffffff",
    },
    {
      title: "Neural Network Achitectures",
      subtitle: "- Percipio",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1IZeMr_kz11ESav1uSW6KRHIXXfyrhdV8/view",
      alt_name: "percipio",
      color_code: "#ffffff",
    },
    {
      title: "Natural Language Processing with Probabilistic Models",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearningai.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/G88NYREDUEUR",
      alt_name: "deeplearningai",
      color_code: "#ffffff",
    },
    {
      title: "Deep Learning for NLP",
      subtitle: "- Percipio",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1DLe1X9bhzXQkN3LhjwcokrB8Dp7T9k98/view",
      alt_name: "percipio",
      color_code: "#ffffff",
    },
    {
      title: "Natural Language Processing Libraries",
      subtitle: "- Percipio",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1eS4YoPA8k0iq481iY6seVvaIOGklZd3G/view",
      alt_name: "percipio",
      color_code: "#ffffff",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "- AWS",
      logo_path: "AWS.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1qsfpCRI5IyFvMZXanpKgaeKg5L25ffAl/view?usp=share_link",
      alt_name: "AWS",
      color_code: "#ffffff",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Hong Kong University of Science and Technology",
      logo_path: "hkust.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BBD3BPFET9WY",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Certified Kubernetes Application Developer",
      subtitle: "- Udemy Labs",
      logo_path: "KodeKloud.png",
      certificate_link:
        "https://kodekloud.com/certificate-verification/812FAB7056-81358317D7-7F0BAA1E56/",
      alt_name: "KodeKloud",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Kubernetes",
      subtitle: "- Percipio",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1droe9p6PlWOQaXskNO87fq4VD6Y5KloW/view?usp=drive_link",
      alt_name: "HPE",
      color_code: "#ffffff",
    },
    {
      title: "Front End Web UI Frameworks & Tools: Bootstrap 4",
      subtitle: "- Hong Kong University of Science and Technology",
      logo_path: "hkust.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XWGSJYR2MNP8",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "CompTIA Linux+: Bourne again Shell & Scripting",
      subtitle: "- Hewlett Packard Enterprise",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1KtwpTtbGu3C5F0iA7WlgGNLbnqOZwp0e/view?usp=share_link",
      alt_name: "HPE",
      color_code: "#ffffff",
    },
    {
      title: "Storage and Network Virtualization",
      subtitle: "- Hewlett Packard Enterprise",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1lg5fgT0sbQorJkONti0R0ZQ39MEjvJBl/view?usp=share_link",
      alt_name: "HPE",
      color_code: "#ffffff",
    },
    {
      title: "Working with Containers: Introduction to Docker",
      subtitle: "- Hewlett Packard Enterprise",
      logo_path: "percipio.png",
      certificate_link:
        "https://drive.google.com/file/d/1n-Hy9YZuFzYuSncq8lxUrtNoajRgMWIr/view?usp=sharing",
      alt_name: "HPE",
      color_code: "#ffffff",
    },
    {
      title: "R Programming",
      subtitle: "- Johns Hopkins University",
      logo_path: "jhu.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XWGSJYR2MNP8",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Explore ML Workshop",
      subtitle: "- Google Developer Student Clubs",
      logo_path: "dsc.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Or1QpWbYVvVZddKP57yaRCu9wenXyIRt/view",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Ethical Hacking",
      subtitle: "- PESU I/O",
      logo_path: "pesuio.png",
      certificate_link:
        "https://drive.google.com/file/d/16rYCeLScxCebPkLCA1MF1-N4ZbT7nHsV/view?usp=share_link",
      alt_name: "pesuio",
      color_code: "#ffffff",
    },
    {
      title: "Python & ML Masterclass",
      subtitle: "- PESU I/O",
      logo_path: "pesuio.png",
      certificate_link:
        "https://drive.google.com/file/d/1O-D2cLNj-cdl2eoOhDWjwHoE-pQ7iUM9/view",
      alt_name: "pesuio",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to C",
      subtitle: "- PESU I/O",
      logo_path: "pesuio.png",
      certificate_link:
        "https://drive.google.com/file/d/1SXee-_dCLJO-K1Cs4ruKoniXyOT2SaWE/view?usp=share_link",
      alt_name: "pesuio",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I believe in gaining hands-on experience over rote learning. I've interned at a number of leading organisations. My work in these places have mostly been about product development using various cutting edge techstacks.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Employment",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "NSF National AI Institute for Student-AI Teaming",
          company_url: "https://www.colorado.edu/research/ai-institute/",
          logo_path: "isat.png",
          duration: "October 2025 - Present",
          location: "Boulder, Colorado",
          description: [
            "⚡ Developed a full-stack student learning platform using JavaScript and React.js for frontend and Node.js/Express for backend, optimizing content tagging workflow by 30% through improved UX, API efficiency and asynchronous processing.",
            "⚡ Integrated backend services with AWS DynamoDB for document retrieval and deployed the application on AWS Amplify to achieve 100% automated deployment pipelines.",
            "⚡ Developed REST API endpoints using Python and FastAPI, implementing MongoDB storage solutions for efficient and secure user data storage and ElasticSearch for low-latency, full-text search and query optimizations.",
          ],
          color: "#2c3f7d",
        },
        {
          title: "Software Development Intern",
          company: "HP Inc.",
          company_url: "https://www.hp.com/us-en/home.html",
          logo_path: "hp.png",
          duration: "May 2025 - August 2025",
          location: "Fort Collins, Colorado",
          description: [
            "⚡ Designed and implemented Windows telemetry agents in C++ to collect and transmit 40+ real-time system performance metrics (CPU, memory, disk I/O, network stats) to AWS S3 via secure data pipelines.",
            "⚡ Optimized performance by replacing Windows Management Instrumentation (WMI) library calls with DeviceIO control calls and Win32 Native API methods to achieve an agent execution speedup of 87% and reducing CPU Overhead.",
            "⚡ Designed and developed a Windows Service for artifact catalog management using C++, Win32 API, and Protocol Buffers (Protobuf) to automate artifact deployments on Windows endpoints by interfacing with AWS IoT Core for retrieving device-specific job manifests.",
          ],
          color: "#0049d9",
        },
        {
          title: "Fullstack Engineer",
          company: "Colorado Center for Astrodynamics Research",
          company_url: "https://www.colorado.edu/ccar/",
          logo_path: "ccar.png",
          duration: "August 2024 - July 2025",
          location: "Boulder, Colorado",
          description: [
            "⚡ Engineered a full-stack network anomaly detection platform in Python with inference services deployed on AWS EKS, orchestrated with Terraform, using AWS Lambda for real-time detection and a Flask backend service containerized with Docker.",
            "⚡ Built scalable Flask backend REST API server with Docker containerization and a Next.js responsive frontend with Firebase authentication for secure user management and network log uploads.",
            "⚡ Used MongoDB, Firestore for network data storage, integrating an XGBoost model achieving 80% accuracy in classifying anomalous browsing patterns and potential foreign network manipulation attempts.",
            "⚡ Led a team of 3 to develop a fleet of decoy browser bots leveraging Python AsyncIO and Sockets Interface to retrieve ML-inferred mission plans from the AWS S3 cloud, and simulate human-like web-browsing patterns for evasion from network operators.",
            "⚡ Orchestrated task distribution using AWS SQS and implemented CI/CD with GitHub Actions, with testing using PyTest and JUnit.",
          ],
          color: "#000000",
        },
        {
          title: "Software Development Engineer",
          company: "Hewlett Packard Enterprise",
          company_url: "https://www.hpe.com/us/en/home.html/",
          logo_path: "hpe.png",
          duration: "January 2022 - Present",
          location: "Bangalore, Karnataka",
          description: [
            "⚡ Developed Java 5G microservices using Spring Boot and an infrastructure provisioning framework, using Kubernetes-based OpenShift clusters, Docker, Jenkins CI and Ansible for deployment automation, achieving a reduction in deployment times by 75%.",
            "⚡ Developed a web-based internal full-stack tool (React UI + Spring Boot REST API backend) integrated with AWS S3 to store and reuse deployment configurations, improving developer workflow and productivity across teams.",
            "⚡ Automated HPE EdgeLine server driver updates by parsing release notes using a Python-based, NLP-powered tool using Spacy’s NER model, and a header-to-content proximity based PDF parsing algorithm to reduce update latency by 50%.",
            "⚡ Led the development of a one-click solution with a Next.js dashboard for server update monitoring, a Flask backend and Selenium web crawlers to archive driver packages across 50+ vendor websites, and reported the health of the systems after updates.",
            "⚡ Prototyped a PoC for program crash log classification using BERT + KNN ensemble and classical methods, achieving 80% accuracy. Deployed the inference pipeline on AWS Lambda for scalable, on-demand processing, integrating with AWS S3 for log storage and DynamoDB for maintaining classification metadata and user annotations.",
            "⚡ Built a React.js web interface enabling crash log uploads and visual inspection of classification results. Designed a Flask REST API backend to orchestrate preprocessing and inference requests containerized via Docker and deployed on AWS ECS.",
          ],
          color: "#00b389",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Volunteer",
          company: "Project Sitara Foundation",
          company_url: "https://projectsitara.org/",
          logo_path: "psf.png",
          duration: "September 2021 - Present",
          location: "Bangalore, India",
          description: [
            "⚡ Project Sitara Foundation is a not-profit organisation working towards enabling children from underserved communities in Karnataka, India to become self-sufficient.",
          ],
          color: "#4285F4",
        },
        {
          title: "Content Creation Volunteer",
          company: "Women's Education and Economic Development Society",
          company_url: "https://www.weedsngo.org/",
          logo_path: "weeds.png",
          duration: "October 2022 - Present",
          location: "Chennai, India",
          description: [
            "⚡ WEEDS is a non-profit organization started in 1989 to address inherent social problems through a powerful and democratic way which was known as voluntary development activities of downtrodden people.",
          ],
          color: "#833457",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. The objective behind these is to develop something which can be of use in the real world.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my-avatar.jpg",
    description:
      "Highly available individual with presence over multiple social media networks. My social media presence should be the de-facto standards for cloud applications - Distributed and Highly Available😜",
  },

  addressSection: {
    title: "Address",
    subtitle: "Boulder, Colorado, 80305",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!4m2!3m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1(303)-944-5679",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
