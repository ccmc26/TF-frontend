import React, { useState } from 'react';

function CreateProductForm() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [product, setProduct] = useState({
        name: '',
        desc: '',
        price: '',
        _idTipo: '', // Assume that _idTipo corresponds to a product type
    });

    return(
        <li>Hola</li>
    );
}

export default CreateProductForm;