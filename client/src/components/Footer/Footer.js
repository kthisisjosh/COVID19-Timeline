import React from 'react';
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className="footer" style={{ textAlign: "center", margin: "auto" }}>
            <Typography className="footer-text" variant="body1" align="center">
                | Data from:
                        <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank" rel="noopener noreferrer">JHU</a>,
                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/" target="_blank" rel="noopener noreferrer">CDC</a>,
                        <a href="http://cmajnews.com/2020/03/26/coronavirus-1095847/" target="_blank" rel="noopener noreferrer"> CMAJ News </a>,
                        <a href="https://www.nbcnews.com/health/health-news/coronavirus-timeline-tracking-critical-moments-covid-19-n1154341" target="_blank" rel="noopener noreferrer">NBC</a> |

                        <a href="https://github.com/kthisisjosh/COVID19-Timeline/" target="_blank" rel="noopener noreferrer"> View on Github </a> |

                        <a href="http://kthisisjosh.github.io/" target="_blank" rel="noopener noreferrer">  ©Joshua Bautista </a> |

                        <a href="https://github.com/kthisisjosh/" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a> |

                        Last updated: March 28, 2020 15:20:20 GMT-0400 |

                </Typography>
        </div>
    )
}

export default Footer;
