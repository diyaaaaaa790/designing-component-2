import React from 'react';

const Button = ({ onClick, label }) => {
    return (
        <button style={styles.button} onClick={onClick}>
            {label}
        </button>
    );
};

const styles = {
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
};

export default Button;
