import {Card, CardActionArea, Typography, Button, CardContent, CardMedia, CardActions} from '@material-ui/core';
import styles from './card.module.css';

const CardComponent = ({images, description, name}) => {
    return (
        <Card className={styles.root}>
            <CardActionArea>
                <CardMedia
                    className={styles.media}
                    image={images}
                    title={name}/>
                <CardContent>
                    <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent;

