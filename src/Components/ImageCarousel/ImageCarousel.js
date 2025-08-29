import Slider from "react-slick";

const ImageCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // 5 seconds
        arrows: true,
    };
    const images = [
        '/carousel1.jpg',
        '/carousel2.jpg',
        '/carousel3.jpg',
        '/carousel4.jpg',
        '/carousel5.jpg',
    ];
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={`${process.env.PUBLIC_URL}/${src}`} alt={`Saree ${index + 1}`} style={{ width: '100%', height: '580px' }} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageCarousel;