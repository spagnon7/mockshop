import React from 'react';
import { useSelector } from 'react-redux';
import 'fontsource-roboto';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    card: {
        width: '20%',
        maxWidth: 200,
        margin: 4,
        textAlign: 'center'
    },
    media: {
        height: 200
    },
    label: {
        fontWeight: 'bold'
    },
    spinner: {
        marginTop: 90,
    }
})

const CategoriesList = () => {
    const productData = useSelector(state => state.productData);
    const isLoading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const classes = useStyles();

    if (isLoading) {
        return <CircularProgress className={classes.spinner}/>
    }
    if (productData) {
        return (
            <div id='categories-list'>
                <Card className={classes.card} variant='outlined'>
                    <CardActionArea>
                        <CardMedia 
                        image={productData['men clothing'][0]['image']}
                        className={classes.media}
                        />
                        <Typography classname={classes.label}>
                            Men's Clothing
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card className={classes.card} variant='outlined'>
                    <CardActionArea>
                        <CardMedia 
                        image={productData['jewelery'][0]['image']}
                        className={classes.media}
                        />
                        <Typography>
                            Jewelry
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card className={classes.card} variant='outlined'>
                    <CardActionArea>
                        <CardMedia 
                        image={productData['electronics'][0]['image']}
                        className={classes.media}
                        />
                        <Typography>
                            Electronics
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card className={classes.card} variant='outlined'>
                    <CardActionArea>
                        <CardMedia 
                        image={productData['women clothing'][0]['image']}
                        className={classes.media}
                        />
                        <Typography>
                            Women's Clothing
                        </Typography>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
    if (error) {
        return <p>{error}</p>
    }
    else {
        return <div></div>
    }
}

export default CategoriesList;