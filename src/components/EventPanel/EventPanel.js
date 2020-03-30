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
        <Card style={{ backgroundColor: "#222831" }}>
            <CardActionArea>
                <Grid container spacing={1}>
                    {   props.isImage &&
                    <Grid item md={3}>
                        <CardMedia
                            className="cardmedia-image"
                            component="img"
                            image={props.img}
                            title="Article Image"
                        />
                        <Typography className="cardmedia-credit" variant="caption" align="center" style={{color: "#c6c1ba"}}>
                            {props.credit}
                        </Typography>
                    </Grid>
                    }
                    <Grid item md={9}>
                        <CardContent className="cardmedia-container">
                            <Typography className="cardmedia-content" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                                {props.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link style={{ color: "#c6c1ba" }} href={props.link} target="_blank" rel="noopener noreferrer">
                                <Typography className="cardmedia-article-text" variant="button" display="block" gutterBottom>
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