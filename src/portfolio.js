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
  currentPosition: "Systems/Software Engineer @ Hewlett Packard Enterprise",
  subTitle:
    "A passionate and dedicated engineer who strives to achieve perfection in every line of code. Given a task, rest assured, it's in good hands.",
  resumeLink:
    "https://drive.google.com/file/d/1YGpHZNUP0X6-LAg262mn0tiNuMdd7u5n/view?usp=sharing",
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
    link: "mailto:naikprajwal40@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_prajwal.naik_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Experience working with multiple languages",
        "⚡ Writing libraries from scratch in C",
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
        "⚡ Building resposive website front end using React/Next",
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
      title: "NLP with Python for Machine Learning Essential Training",
      subtitle: "- LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/5630916ead42d7b8d8f4cda3d071afe06f7628667372f3e63aaf7e876f563d97",
      alt_name: "Linkedin",
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
          title: "Systems/Software Engineer I",
          company: "Hewlett Packard Interprise",
          company_url: "https://www.hpe.com/us/en/home.html/",
          logo_path: "hpe.png",
          duration: "August 2022 - Present",
          location: "Bangalore, Karnataka",
          description: "Working on automation and 5G deployment tech stack.",
          color: "#00b389",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research and Development Intern",
          company: "Hewlett Packard Interprise",
          company_url: "https://www.hpe.com/us/en/home.html/",
          logo_path: "hpe.png",
          duration: "January 2022 - August 2022",
          location: "Bangalore, Karnataka",
          description: "Working on 5G and cloud deployment technologies.",
          color: "#00b389",
        },
        {
          title: "Project Intern",
          company: "Hewlett Packard Interprise",
          company_url: "https://www.hpe.com/us/en/home.html/",
          logo_path: "hpe.png",
          duration: "April 2021 - June 2021",
          location: "Bangalore, Karnataka",
          description:
            "Worked on developing an application to automatically handle edgeline server updates using NLP of driver update notes. This application reduces the human interaction by around 40%.",
          color: "#00b389",
        },
        {
          title: "Research Intern",
          company: "Centre for Cloud Computing and Big Data",
          company_url: "https://research.pes.edu/cloud-computing-big-data/",
          logo_path: "ccbd-pes.jpg",
          duration: "June 2020 - December 2020",
          location: "PES University, Bangalore",
          description:
            "This is the cutting edge cloud computing research lab of PES University. Initially starting research on distributed SQL systems like Cockroach DB, I moved on to research about the performance of spatial join algorithms using in mapping in most of the location based applications.",
          color: "#3e7f97",
        },
        {
          title: "Product Development Intern",
          company: "PESU Venture Labs",
          company_url: "https://www.pesuventurelabs.com/",
          logo_path: "pvl.png",
          duration: "April 2020 - May 2020",
          location: "PES University, Bangalore",
          description:
            "This is PES University's incubator working on a number of ambitious startups. I worked on the development of an application to streamline the process of college guest lectures by easing the process of matching lecturers to any college's requirements.",
          color: "#fccc3c",
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
          description:
            "Project Sitara Foundation is a not-profit organisation working towards enabling children from underserved communities in Karnataka, India to become self-sufficient.",
          color: "#4285F4",
        },
        {
          title: "Content Creation Volunteer",
          company: "Women's Education and Economic Development Society",
          company_url: "https://www.weedsngo.org/",
          logo_path: "weeds.png",
          duration: "October 2022 - Present",
          location: "Chennai, India",
          description:
            "WEEDS is a non-profit organization started in 1989 to address inherent social problems through a powerful and democratic way which was known as voluntary development activities of downtrodden people.",
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
    subtitle:
      "A004, Sterling Gardens Apartments, Kempapura, Hebbal, Bangalore - 560024",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!4m2!3m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8951690698",
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
