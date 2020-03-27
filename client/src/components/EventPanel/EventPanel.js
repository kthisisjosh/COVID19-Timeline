import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

const EventPanel = (props) => {
    return (
        <Card style={{backgroundColor: "#393e46"}}>
            <CardActionArea>
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <CardMedia
                            component="img"
                            image={props.img}
                            title="Article Image"
                        />
                        <Typography variant="caption" align="center">
                            {props.credit}
                        </Typography>
                    </Grid>
                    <Grid item md={9}>
                        <CardContent>
                            <Typography variant="subtitle1" style={{color: "#c6c1ba"}}>
                                {props.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link style={{color: "#c6c1ba"}} href={props.link} target="_blank" rel="noopener noreferrer">
                                <Typography variant="button" display="block" gutterBottom>
                                    Click for the article
                                </Typography>
                            </Link>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default EventPanel;