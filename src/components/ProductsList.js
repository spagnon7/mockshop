import React from 'react';
import { useSelector } from 'react-redux';

const ProductsList = (props) => {
    const productData = useSelector(state => state.productData);

    const productCards = productData[props.category].map( product => {
        return (
            <li className={classes.cardLi}>
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

    //next steps: create state for current display, update state upon card click to show ProductList component with product category passed as props

    return productCards;
}