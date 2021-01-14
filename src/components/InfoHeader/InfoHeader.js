import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Paper from '@material-ui/core/Paper';
import ToolTip from '@material-ui/core/Tooltip';
import moment from 'moment';
import { css } from '@emotion/core';
import SyncLoader from 'react-spinners/SyncLoader';
var commaNumber = require('comma-number');
const axios = require('axios').default;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const InfoHeader = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [cases, setCases] = React.useState(0);
  const [prevCases, setPrevCases] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  let confirmed = 0;
  let confirmedYes = 0;
  let recovered = 'N/A';
  let recoveredYes = 'N/A';

  //const selectedDate = new Date(props.date);

  /*const month = selectedDate.month();
    const day = selectedDate.date();

    if (month === 1) {
        confirmed = ((props.data[month - 1].daily[day - 11].cases));
        if (day === 11) {
            confirmedYes = 0;
        } else {
            confirmedYes = ((props.data[month - 1].daily[day - 11].cases) - (props.data[month - 1].daily[day - 12].cases));
        }
    }

    try {
        if (month > 1) {
            confirmed = ((props.data[month - 1].daily[day - 1].cases));
            if (day === 1) {
                confirmedYes = ((props.data[month - 1].daily[day - 1].cases) - 82);
            } else {
                confirmedYes = ((props.data[month - 1].daily[day - 1].cases) - (props.data[month - 1].daily[day - 2].cases));
            }
        }
    } catch (err) {
        confirmed = "N/A";
        confirmedYes = "N/A";
    } */

  React.useEffect(() => {
    fetchCases(props.date);
  }, [props]);

  const fetchCases = (date) => {
    setIsLoading(true);
    setIsError(false);
    var country = null;
    if (props.country == 'Canada') {
      country = 'canada';
    } else if (props.country == 'America') {
      country = 'united-states';
    } else {
      country = 'global';
    }
    axios
      .all([
        axios.get(
          `https://api.covid19api.com/total/country/${country}/status/confirmed?from=${date
            .startOf('day')
            .toISOString()}&to=${date
            .add(1, 'days')
            .startOf('day')
            .toISOString()}`,
        ),
        axios.get(
          `https://api.covid19api.com/total/country/${country}/status/confirmed?from=${date
            .subtract(2, 'days')
            .startOf('day')
            .toISOString()}&to=${date
            .add(1, 'days')
            .startOf('day')
            .toISOString()}`,
        ),
      ])
      .then(
        axios.spread((...responses) => {
          try {
            setCases(responses[0].data[0].Cases);
            setPrevCases(responses[1].data[0].Cases);
          } catch (err) {
            setIsError(true);
          }
          setIsLoading(false);
        }),
      )
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#393E46', color: '#c43a31' }}
    >
      <List>
        <ListItem button key={uuidv4()} style={{ border: '0.5px solid black' }}>
          <Link
            to="/canada"
            style={{
              fontSize: 24,
              color: '#c43a31',
              fontWeight: 'bold',
              textDecorationLine: 'none',
            }}
          >
            Canada
          </Link>
        </ListItem>
        <ListItem button key={uuidv4()} style={{ border: '0.5px solid black' }}>
          <Link
            to="/usa"
            style={{
              fontSize: 24,
              color: '#c43a31',
              fontWeight: 'bold',
              textDecorationLine: 'none',
            }}
          >
            United States of America
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div style={{ margin: '1rem', marginTop: '0.75%' }}>
      <Grid
        container
        spacing={2}
        alignContent="space-between"
        alignItems="center"
        justify="center"
      >
        <Grid container sm={2} xs={2} item={true} justify="center">
          <Grid item>
            {isLoading ? (
              <div className="sweet-loading">
                <SyncLoader
                  color={'#c43a31'}
                  loading={isLoading}
                  css={override}
                  size={10}
                />
              </div>
            ) : (
              [
                isError ? (
                  <Typography
                    className="infoheader-recovered-num-text"
                    variant="h4"
                  >
                    N/A
                  </Typography>
                ) : (
                  <Typography
                    variant="h3"
                    style={{ fontSize: props.isMobile ? '28px' : '12px' }}
                  >
                    {commaNumber(cases)}{' '}
                  </Typography>
                ),
              ]
            )}
            <Typography
              align="center"
              variant="subtitle1"
              style={{ color: '#c6c1ba', fontSize: props.isMobile ? 14 : 8 }}
            >
              confirmed
            </Typography>
          </Grid>
        </Grid>

        <Grid container sm={2} xs={2} item={true} justify="center">
          <Grid item>
            {isLoading ? (
              <div className="sweet-loading">
                <SyncLoader
                  color={'#c43a31'}
                  loading={isLoading}
                  css={override}
                  size={10}
                />
              </div>
            ) : (
              [
                isError ? (
                  <Typography
                    className="infoheader-recovered-num-text"
                    variant="h4"
                  >
                    N/A
                  </Typography>
                ) : (
                  <Typography
                    variant="h3"
                    style={{ fontSize: props.isMobile ? '28px' : '12px' }}
                  >
                    +{commaNumber(cases - prevCases)}{' '}
                  </Typography>
                ),
              ]
            )}
            <Typography
              align="center"
              variant="subtitle1"
              style={{
                color: '#c6c1ba',
                fontSize: props.isMobile ? 14 : 6,
                lineHeight: props.isMobile ? null : 1.2,
              }}
            >
              from yesterday
            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={4} item={true} justify="center">
          <Grid item>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <ToolTip title="Change" arrow disableFocusListener>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    aria-label="change"
                  >
                    <Paper
                      className="glowing-border"
                      variant="outlined"
                      style={{
                        paddingRight: '1vw',
                        backgroundColor: '#b0aca7',
                      }}
                    >
                      <Typography
                        className="infoheader-country-text"
                        align="center"
                        variant="h3"
                        style={{ fontWeight: 'bold', paddingLeft: '1vw' }}
                      >
                        {props.country}
                      </Typography>
                    </Paper>
                  </Button>
                </ToolTip>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>

        <Grid container sm={2} xs={2} item={true} justify="center">
          <Grid item>
            <Typography className="infoheader-recovered-num-text" variant="h4">
              {recovered}
            </Typography>
            <Typography
              className="infoheader-recovered-text"
              align="center"
              variant="subtitle1"
              style={{ color: '#c6c1ba', fontSize: props.isMobile ? 14 : 6 }}
            >
              recovered
            </Typography>
          </Grid>
        </Grid>

        <Grid container sm={2} xs={2} item={true} justify="center">
          <Grid item>
            <Typography
              className="infoheader-recovered-yes-num-text"
              variant="h4"
            >
              +{recoveredYes}
            </Typography>
            <Typography
              className="infoheader-recovered-yes-text"
              align="center"
              variant="subtitle1"
              style={{
                color: '#c6c1ba',
                fontSize: props.isMobile ? 14 : 6,
                lineHeight: props.isMobile ? null : 1.2,
              }}
            >
              from yesterday
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoHeader;
