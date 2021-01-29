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
    cardLi: {
        width: '20%',
        maxWidth: 200,
        margin: 4,
        textAlign: 'center',
        listStyleType: 'none'
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
        let categoriesList = [];

        for (const category in productData) {
            const categoryCard = (
                <li className={classes.cardLi}>
                    <Card variant='outlined'>
                        <CardActionArea>
                            <CardMedia 
                            image={productData[category][0]['image']}
                            className={classes.media}
                            />
                            <Typography className={classes.label}>
                                {category}
                            </Typography>
                        </CardActionArea>
                    </Card>
                </li>
            )
            categoriesList.push(categoryCard);
        }
        
        return categoriesList;        
    }
    if (error) {
        return <p>{error}</p>
    }
    else {
        return <div></div>
    }
}

export default CategoriesList;