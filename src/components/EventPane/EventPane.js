import React from 'react';
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from 'react-scroll';
import EventPanel from '../EventPanel/EventPanel';
import Typography from '@material-ui/core/Typography';
import { DateContext } from '../../contexts/DateContext';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class EventPane extends React.Component {
  static contextType = DateContext;
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  renderEvents(date) {
    const month = date.month();
    const day = date.date();

    this.props.data[month - 1][day - 1].articles.map((article) => {
      let isImage = false;
      if (article.img !== null) {
        isImage = true;
      }
      return (
        <Element
          name="firstInsideContainer"
          style={{ marginBottom: '1%', marginLeft: '2%', marginRight: '2%' }}
          key={uuidv4()}
        >
          <EventPanel
            content={article.content}
            img={article.img}
            link={article.link}
            credit={article.credit}
            isImage={isImage}
          />
        </Element>
      );
    });
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
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
        smooth: 'easeInOutQuart',
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container',
      }),
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    const { selectedDate } = this.context;
    const date = selectedDate;

    const year = date.year();
    const month = date.month();
    const day = date.date();
    console.log(year);

    return (
      <div className="article-container">
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{ height: '60vh', overflowY: 'scroll' }}
        >
          <Typography
            className="keyevents-text"
            variant="h4"
            style={{
              marginBottom: '1%',
              marginLeft: '2%',
              marginRight: '2%',
              color: '#c6c1ba',
            }}
          >
            Key Events
          </Typography>

          {this.props.data[year][month][day - 1].articles.map((article) => {
            let isImage = false;
            const currArticle = {};
            if (article.description != null) {
              currArticle.content = article.title;
              currArticle.img = article.urlToImage;
              if (currArticle.img == null) {
                currArticle.img = article.image;
              }
              currArticle.link = article.url;
              //currArticle.credit = article.source.name
            } else {
              currArticle.content = article.content;
              currArticle.img = article.img;
              currArticle.link = article.link;
              currArticle.credit = article.credit;
            }
            if (currArticle.img !== null) {
              isImage = true;
            }
            return (
              <Element
                name="firstInsideContainer"
                style={{
                  marginBottom: '1%',
                  marginLeft: '2%',
                  marginRight: '2%',
                }}
                key={uuidv4()}
              >
                <EventPanel
                  content={currArticle.content}
                  img={currArticle.img}
                  link={currArticle.link}
                  credit={currArticle.credit}
                  isImage={isImage}
                />
              </Element>
            );
          })}
        </Element>
      </div>
    );
  }
}

export default EventPane;
