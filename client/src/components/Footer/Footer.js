import React from 'react';
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <Typography variant="body1" align="center">
                | Data from:
                        <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/health-professionals/epidemiological-summary-covid-19-cases.html" target="_blank" rel="noopener noreferrer">CAN</a>,
                        <a href="http://cmajnews.com/2020/03/26/coronavirus-1095847/" target="_blank" rel="noopener noreferrer"> CMAJ News </a> |

                        <a href="https://github.com/kthisisjosh/COVID19-Timeline/" target="_blank" rel="noopener noreferrer"> View on Github </a> |

                        <a href="http://kthisisjosh.github.io/" target="_blank" rel="noopener noreferrer">  ©Joshua Bautista </a> |

                        <a href="https://github.com/kthisisjosh/" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a> |

                        Last updated: March 26, 2020 16:43:20 GMT-0400 |

                </Typography>
        </div>
    )
}

export default Footer;
