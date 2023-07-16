import React from 'react';
export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <br />
            <div className="text-block">
                <h2>wilyuhm.dev</h2>
                <br />
                <p>
                    wilyuhm.dev is my portfolio website, and also the
                    website you are on right now. 
                </p>
                <br />
                <br />
                <h3>Links:</h3>
                <a href="https://wilyuhm.dev">Wilyuhm.dev</a>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
