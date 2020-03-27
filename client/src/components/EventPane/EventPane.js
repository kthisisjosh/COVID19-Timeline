import React from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import EventPanel from "../EventPanel/EventPanel";
import Typography from "@material-ui/core/Typography";
import { DateContext } from "../../contexts/DateContext";
import data from "./EventData";

class EventPane extends React.Component {
    static contextType = DateContext;
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        const { selectedDate } = this.context;
        const date = new Date(selectedDate[0]);

        const month = date.getMonth();
        const day = date.getDate();

        return (

            <div>
                <Element name="test7" className="element" id="containerElement" style={{
                    height: '67vh',
                    overflow: 'scroll',
                }}>

                    <Typography
                        variant="h4"
                        style={{
                            marginBottom: '1%',
                            marginLeft: "2%",
                            marginRight: "2%",
                            color: "#c6c1ba"
                        }}>
                        Key Events</Typography>

                    {data[month - 1][day - 1].articles.map((article) => {

                        return (
                            <Element name="firstInsideContainer" style={{
                                marginBottom: '1%',
                                marginLeft: "2%",
                                marginRight: "2%"
                            }}>
                                <EventPanel
                                    content={article.content}
                                    img={article.img}
                                    link={article.link}
                                    credit={article.credit}
                                />
                            </Element>
                        )
                    })}


                </Element>
            </div>


        );
    }
};

export default EventPane;