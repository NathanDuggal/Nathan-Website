import me from './me.jpg';
import lasar from './demo_gif.gif';
import rj from './robojackets.jpg'
import solar from './solar.jpg'
import meta from './meta.png'
import samsara from './samsara.gif'
import hum from './hum.png'
import owl from './owl.jpg'
import staryeast from './staryeast.png'
import graphics from './graphics.gif'

const aboutMeContents = {
  title: 'About Me',
  text: `I'm currently an undergrad at Georgia Tech studying Computer Science. My primary areas 
        of interest are computer architecture and embedded systems, but I have experience with a
        wide range of fields. I also love listening to music, performing
        with the campus orchestra, and identifying  birds!`,
  link: "/about",
  leftsrc: me,
  colorchange: '3',
  hidetext: false
}

const projectsContents = {
  title: 'Projects',
  text: `Check out some of the projects I've worked on! I've been to many hackathons, worked with several
        campus organizations, and I'm always looking for new opportunities to apply and develop my skills.`,
  link: "/projects",
  rightsrc: graphics,
  colorchange: '4',
  hidetext: false
}

const experienceContents = {
  title: 'Experience',
  text: `I always am looking to gain more industry experience, and right now I am exploring
        several different fields. `,
  link: "https://github.com/NathanDuggal",
  leftsrc: samsara,
  hidetext: false
}

const academicsContents = {
  title: 'Academics',
  text: `Some of my most valuable experience has come from the many academic teams and projects
        I've worked on. In addition to learning new technical skills, I have gained leadership
        experience and have been introduced to many project-management techniques.`,
  link: "https://github.com/NathanDuggal",
  rightsrc: rj,
  hidetext: false
}

const lasarContents = {
    title: 'LasAR Tag',
    text: `LasAR Tag is an augmented reality motion-capture system that uses a camera, an aruco tag,
        and any red object to provide an experience similar to that of regular laser tag. This project
        was designed to bring the fun and excitement of laser tag to the comfort of your own home.`,
    tag: "Winner of ImmerseGT 2023",
    link: "https://github.com/NathanDuggal/ImmerseGT-LasARTag",
    rightsrc: lasar,
    // colorchange: '3',
    hidetext: true
}

const staryeastContents = {
    title: 'Staryeast',
    text: `Staryeast is a webapp which uses a custom machine-learning model to identify songs which fit
        the mood of a user's surroundings, including weather, location, and time of day. Trained on 5 
        years of Google Trends data, and with over 1 million songs, Staryeast is a great way to discover
        new music and set the mood for any occasion.`,
    tag: "Winner of Hacklytics 2023",
    link: "https://github.com/NathanDuggal/Hacklytics2023-staryeast",
    leftsrc: staryeast,
    // colorchange: '4',
    hidetext: true
}

export {me, lasar, rj, solar, meta, samsara, hum, owl, graphics,
        aboutMeContents, projectsContents, experienceContents, academicsContents,
        lasarContents, staryeastContents}

