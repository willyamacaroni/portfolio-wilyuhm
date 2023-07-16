import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Willyam Arcand</h3>
            <br />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                   Hello there, again! I'm Willyam Arcand, a software engineer based in the vibrant city of Montreal, Quebec. 
                    I'm currently working at Shopify as an L5 Software Engineer, with a specialization in back-end software using Ruby. 
                    Although I only have a year of experience under my belt, don't let that fool you.  
                    I've already left my mark on some interesting personal projects and initiatives, including helping a local barbershop's online service efficiency by leveraging my e-commerce and web development skills.</p>
                <br />
                <p>
                    My journey in the tech world started with my graduation from Felix-Xavier-Garneau College Institute, where I obtained my DCS in Computer Science. 
                    Since then, I've participated in stimulating competitions like the PolyML Hackathon, where my team emerged victorious in the AI challenge, 
                    and the Coveo Blitz 2022 Hackathon.
                </p>
                <br />
                <p>
                    When it comes to my work, I apply the same meticulousness that I bring to my hobbies. 
                    Whether it's brewing the perfect cup of coffee, researching the nuances of the wine I'm sipping, or matching it with the ideal food pairing - I love diving deep into the details. 
                    This precision and dedication are exactly what I bring to software development.
                </p>
                <br />
                <p>
                    My professional values are deeply rooted in assuming positive intent, having a growth mindset, thriving on change, and building for the long term. 
                    In the future, I aim to excel in my role as a software engineer before exploring the diverse range of opportunities in non-individual contributor roles.
                </p>
                <br />
                <p>
                    Outside of work, I'm an avid video gamer and self-proclaimed nerd - always keen to understand the ins and outs of everything I delve into. 
                </p>
                <div style={{}}></div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me by shooting me an email
                    at{' '}
                    <a href="mailto:contact@wilyuhm.dev">
                        contact@wilyuhm.dev
                    </a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
