import React from 'react';
import Button from './button'; // Import the Button component

const Productcard = () => {
    // Static product details
    const productImage = 'https://via.placeholder.com/150';
    const productName = 'Sample Product';
    const productPrice = '$49.99';

    // Function for button click
    const handleViewProduct = () => {
        alert(`Viewing details for: ${productName}`);
    };

    return (
        <div style={styles.card}>
            <img src={productImage} alt={productName} style={styles.image} />
            <h2>{productName}</h2>
            <p>{productPrice}</p>
            <Button onClick={handleViewProduct} label="View Product" />
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        borderRadius: '10px',
    },
};

export default Productcard;

