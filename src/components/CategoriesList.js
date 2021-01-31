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

const CategoriesList = (props) => {
    const productData = useSelector(state => state.productData.productData);
    const isLoading = useSelector(state => state.productData.loading);
    const error = useSelector(state => state.productData.error);
    const classes = useStyles();
    const handleCategoryCardClick = props.handleCategoryCardClick;
    let categoriesList = [];

    if (isLoading) {
        return <CircularProgress className={classes.spinner}/>
    }
    if (productData) {
        for (const category in productData) {
            const categoryCard = (
                <li className={classes.cardLi} key={category} onClick={() => handleCategoryCardClick(category)}>
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
        
        return (
            <ul id='cards-container'>
                {categoriesList}
            </ul>
        )
    }
    if (error) {
        return <p>{error}</p>
    }
}

export default CategoriesList;