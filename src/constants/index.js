import {
    c_video,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Сapture video application (TypeScript, React)",
        company_name: "Web-based platform that allows users to capture video footage using their device's" +
            "camera and microphone. The platform also offers a range of features, such as the ability" +
            "to add comments, options for exporting and sharing videos with other users.",
        icon: c_video,
        iconBg: "#383E56",
        date: "October 2022 — April 2023",
        points: [
            "Development of functionality for video recording.",
            "Writing end-to-end tests.",
            "Implementation of new features.",
            "Implementation communication with back-and.",
            "Implementation of communication with the backend using web sockets.",
        ],
    },
    {
        title: "Scientific application",
        company_name: "An information site with an admin panel to edit and add new content. The site itself\n" +
            "consists of a description of scientific papers. There is an opportunity to publish articles\n" +
            "and videos, information about the authors and teams from different countries. There are\n" +
            "also forms for subscription and feedback.\n",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "March 2022 — September 2022",
        points: [
            "Page creation",
            "Validation form data",
            "Stabilization",
            "Implementation of new features",
            "Customization of off-the-shelf components",
        ],
    },
    {
        title: "Agrovoltaics application",
        company_name: "A project for a company that deals with agrovoltaics (placement of solar panels on\n" +
            "agricultural land). Involved in creating simulations for counting and editing the data in\n" +
            "these simulations. Also worked with dates, piling up forms.",
        icon: meta,
        iconBg: "#383E56",
        date: "October 2021 — March 2022",
        points: [
            "Page creation",
            "Validation form data ",
            "Stabilization ",
            "Implementation of multilingual translation",
            "Implementation of communication with the backend",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I am pleased to write this letter of recommendation for Danil Kravchenko. I have had the pleasure of working with Danil for several years and during that time, he has consistently proven himself to be a highly skilled and dedicated front-end developer.",
        name: "Andrii Moskalenko",
        designation: "Frontend Web Developer",
        company: "Venbest",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I had the pleasure of working with Daniel for the past year and was impressed by his technical skills and work ethic. He is a quick learner who is always eager to take on new challenges and expand his skillset. Daniel is a team player who thrives in a collaborative environment and is always willing to lend a helping hand to his colleagues.",
        name: "Vladyslav Skliar",
        designation: "Back-end Developer",
        company: "BWT",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Danil is a communicative person, has a great active listening and is open to new knowledge. He has a good technical knowledge as a front-end, and seeks to further improve his performance through English.",
        name: "Raphael Moura",
        designation: "Negócios | Sales | Spin Selling | Inbound e Outbound | Customer Success | Customer Experience | ProductNegócios | Sales | Spin Selling | Inbound",
        company: "Fortes Tecnologia",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Commission Fees Application",
        description:
            "his application is designed to calculate commission fees for financial transactions based on the provided input data. The calculation is performed using the rules defined in the task description.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Jest",
                color: "green-text-gradient",
            },

        ],
        image: carrent,
        source_code_link: "https://github.com/fd-mailden/Commission-Fees",
    },
    {
        name: "youtube-api-parse",
        description:
            "App for collecting data about YouTube channels ",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "Jest",
                color: "green-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/fd-mailden/youtube-api-parse",
    },
    {
        name: "Calendar",
        description:
            "Task Description: Create a calendar grid with the ability to create and organize tasks. Required Functionality: Create and edit tasks inside calendar cells (days) in an inline manner.Reassign tasks between days (calendar cells) using drag and drop.Reorder task in one cell using drag and drop.Filter tasks in the calendar by a searching text.Create and edit labels for tasks (color, text).Assign multiple labels to the task.Filter tasks by labels.Import and export calendar to file (json or other formats).Ability to download the calendar as an image . Show worldwide holidays for each day in the calendar. Holiday name must be fixed at of the cell and must not participate in re-ordering. ",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Styled-Components",
                color: "pink-text-gradient",
            },
            {
                name: "Drag and Drop",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/fd-mailden/calendar",

    },
];

export { services, technologies, experiences, testimonials, projects };