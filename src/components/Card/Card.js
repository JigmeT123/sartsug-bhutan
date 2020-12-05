import {
    Card,
    CardActionArea,
    Typography,
    Button,
    CardContent,
    CardMedia,
    CardActions
} from '@material-ui/core';
import styles from './card.module.css';
import {Link} from 'react-router-dom';

const CardComponent = ({images, description, name, linkToSite}) => {
    return (
        <Card className={styles.root}>
            <CardActionArea>
                <Link to={linkToSite}><CardMedia className={styles.media} image={images} title={name}/>
                </Link>
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
                <Link to="/">
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </Link>
               
            </CardActions>
        </Card>
    )
}

export default CardComponent;
