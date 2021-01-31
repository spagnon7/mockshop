import React from 'react';
import { useSelector } from 'react-redux';
import 'fontsource-roboto';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

const ProductsList = (props) => {
    const productData = useSelector(state => state.productData.productData);
    const classes = useStyles();
    const handleBackButtonClick = props.handleBackButtonClick;

    const productCards = productData[props.productCategory].map( (product, index) => {
        return (
            <li className={classes.cardLi} key={index}>
                <Card variant='outlined'>
                    <CardActionArea>
                        <CardMedia 
                        image={product.image}
                        className={classes.media}
                        />
                        <Typography className={classes.label}>
                            {product.title}
                        </Typography>
                    </CardActionArea>
                </Card>
            </li>
        )
    })

    return (
        <>
            <ul id='cards-container'>
                {productCards}
            </ul>
            <Button variant='outlined' onClick={handleBackButtonClick}>Back</Button>
        </>
    )
    
}

export default ProductsList;