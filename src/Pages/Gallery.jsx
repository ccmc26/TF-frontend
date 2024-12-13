import React from 'react'
import './CSS/Gallery.css'

const images = [
    {
        src: "https://img-global.cpcdn.com/recipes/162621837bc82426/680x964cq70/pizza-de-sobrasada-queso-de-mahon-y-miel-foto-principal.webp",
        caption: "Pizza sobrasada"
    },
    {
        src: "https://elfornet.com/media/catalog/product/cache/728587fcd73f36684dd4a1c3c4b36cfb/b/o/boc_chapatera_jamon_iberico_frontal_b.jpg",
        caption: "Entrepà de pernil"
    },
    {
        src: "https://cdn0.recetasgratis.net/es/posts/3/2/8/espaguetis_a_la_carbonara_51823_orig.jpg",
        caption: "Espaguettis a la carbonara"
    },
    {
        src: "https://thermomix-valencia.es/media/Posts/attachments/20f6de9a8ad77d89806efd939590f456.jpg",
        caption: "Coca de fira"
    },
    {
        src: "https://entrenosotros.consum.es/public/Image/2024/8/fotosconsum.jpg",
        caption: "Entrepa xivito"
    },
    {
        src: "https://imag.bonviveur.com/espaguetis-a-la-bolonesa.jpg",
        caption: "Espaguettis amb tomata"
    },
    {
        src: "https://elfornet.com/media/catalog/product/cache/728587fcd73f36684dd4a1c3c4b36cfb/b/o/boc_mini_big_40gr_vegetal_atun_frontal.jpg",
        caption: "Entrepà vegetal"
    },
    {
        src: "https://i.pinimg.com/736x/76/90/39/7690393d735280c691b41c2b50bc55c1.jpg",
        caption: "Pizza carbonara"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbpYfsSAHAPcQbX13ezWzYIaFOpGPbBUdxg&s",
        caption: "Entrepà blanc i negre"
    },
    {
        src: "https://i.ytimg.com/vi/vuN6VSqhB6E/maxresdefault.jpg",
        caption: "Espaguettis al pesto"
    },
    {
        src: "https://jptradingimports.com/wp-content/uploads/2020/07/pizza-mediterranea.png.webp",
        caption: "Pizza mediterranea"
    },
    {
        src: "https://e00-xlk-cooking-elmundo.uecdn.es/files/phantom_desktop_1200w/uploads/2023/02/28/63fe867bf1e64.jpeg",
        caption: "Espaguetis amb gambes"
    },
    {
        src: "https://mandolina.co/wp-content/uploads/2023/10/pizza-margarita-1080x550-1-1200x900.jpg",
        caption: "Pizza margarita"
    }

]

const Gallery = () => {

    return ( 
        <ul className="grid"> 
        {images.map((image, index) => ( 
            <li key={index}> 
                <figure className="grid__figure"> 
                    <img src={image.src} alt={image.alt} /> 
                    <figcaption>{image.caption}</figcaption> 
                </figure> 
            </li> 
        ))} 
        </ul> 
    );
}

export default Gallery;
