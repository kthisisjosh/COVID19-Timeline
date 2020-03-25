import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import EventPanel from "../EventPanel/EventPanel";
import Typography from "@material-ui/core/Typography";

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

class EventPane extends React.Component {

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
        return (
            <div>
                <Element name="test7" className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '43rem',
                    overflow: 'scroll',
                }}>

                    <Typography varient="h2">Key Events</Typography>
                    <Element name="firstInsideContainer" style={{
                        marginBottom: '1%',
                        marginLeft: "2%",
                        marginRight: "2%"
                    }}>
                        <EventPanel />
                    </Element>
                    
                    <Element name="firstInsideContainer" style={{
                        marginBottom: '1%',
                        marginLeft: "2%",
                        marginRight: "2%"
                    }}>
                        <EventPanel />
                    </Element>

                    <Element name="firstInsideContainer" style={{
                        marginBottom: '1%',
                        marginLeft: "2%",
                        marginRight: "2%"
                    }}>
                        <EventPanel />
                    </Element>

                    <Element name="firstInsideContainer" style={{
                        marginBottom: '1%',
                        marginLeft: "2%",
                        marginRight: "2%"
                    }}>
                        <EventPanel />
                    </Element>

                    <Element name="firstInsideContainer" style={{
                        marginBottom: '1%',
                        marginLeft: "2%",
                        marginRight: "2%"
                    }}>
                        <EventPanel />
                    </Element>

                </Element>
            </div>
        );
    }
};

export default EventPane;