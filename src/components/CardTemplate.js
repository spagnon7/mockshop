import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const CardTemplate = (props) => {
    const useStyles = makeStyles({
        cardDiv: {
            width: 200,
            margin: 4,
            textAlign: 'center',
            listStyleType: 'none'
        },
        media: {
            height: 200,
            width: '90%',
            backgroundSize: 'contain',
            margin: '5px auto'
        },
        label: {
            fontWeight: 'bold',
            textTransform: 'capitalize'
        }
    });
    
    const classes = useStyles();

    return (
        <div className={classes.cardDiv} onClick={props.clickHandler}>
            <Card variant='outlined'>
                <CardActionArea>
                    <CardMedia 
                    className={classes.media}
                    image={props.imageURL}
                    />
                    <Typography className={classes.label}>
                        {props.title}
                    </Typography>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CardTemplate;