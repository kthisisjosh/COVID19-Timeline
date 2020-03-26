import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const EventPanel = (props) => {
    return (
        <Card style={{backgroundColor: "#393e46"}}>
            <CardActionArea>
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <CardMedia
                            component="img"
                            image={"https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2020/03/JDT20853906.jpg"}
                            title="PLACEHOLDER"
                        />
                    </Grid>
                    <Grid item md={9}>
                        <CardContent>
                            <Typography>
                                Senate passes emergency COVID-19 bill that raises $27 billion in direct support.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Click for the article
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default EventPanel;