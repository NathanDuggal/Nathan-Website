import me from './me.jpg';
import lasar from './demo_gif.gif';
import rj from './robojackets.jpg'
import solar from './solar.jpg'
import meta from './meta.png'
import samsara from './samsara.gif'
import hum from './hum.png'
import owl from './owl.jpg'

const aboutMeContents = {
  title: 'About Me',
  text: `I'm currently an undergrad at Georgia Tech studying Computer Science, and my primary areas 
        of interest are robotics and data-visulaization. I also really enjoy listening to music, performing
        with the campus orchestra, and indenitfying birds!`,
  link: "/about",
  leftsrc: me
}

const projectsContents = {
  title: 'Projects',
  text: `Check out some of the projects I've worked on! 
        I have experience with web, desktop, and database development, and my projects range from 
        data-driven web-apps to augmented reality motion-capture.`,
  link: "/projects",
  rightsrc: lasar
}

const experienceContents = {
  title: 'Experience',
  text: `I always am looking to gain more industry experience, and right now I am exploring
        several different fields. `,
  link: "https://github.com/NathanDuggal",
  leftsrc: samsara
}

const academicsContents = {
  title: 'Academics',
  text: `Some of my most valuable experience has come from the many academic teams and projects
        I've worked on. In addition to learning new technical skills, I have gained leadership
        experience and have been introduced to many project-management techniques.`,
  link: "https://github.com/NathanDuggal",
  rightsrc: rj
}

const lasarContents = {
    title: 'LasAR Tag',
    text: `LasAR Tag is an augmented reality motion-capture system that uses a camera, an aruco tag,
        and any red object to provide an experience similar to that of regular laser tag. This project
        was designed to bring the fun and entertainment of laser tag to the comfort of your own home.`,

    tag: "Winner of ImmserseGT 2023",
    link: "https://github.com/NathanDuggal/ImmerseGT-LasARTag",
    leftsrc: lasar
}

const staryeastContents = {
    title: 'Staryeast',
    text: ``,
    tag: "Winner of Hacklytics 2023",
    link: "https://github.com/NathanDuggal/Hacklytics2023-staryeast",
    leftsrc: lasar
}

export {me, lasar, rj, solar, meta, samsara, hum, owl,
        aboutMeContents, projectsContents, experienceContents, academicsContents,
        lasarContents, staryeastContents}

