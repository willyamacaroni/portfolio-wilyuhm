import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Company name</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={''}
                        >
                            <h4>company's website</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Position</h3>
                        <b>
                            <p></p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Description
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            task/accomplishment 1
                        </p>
                    </li>
                    <li>
                        <p>
                            task/accomplishment 2
                        </p>
                    </li>
                    <li>
                        <p>
                            task/accomplishment 2
                        </p>
                    </li>
                    <li>
                        <p>
                            task/accomplishment 2
                        </p>
                    </li>
                    <li>
                        <p>
                            task/accomplishment 2
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
