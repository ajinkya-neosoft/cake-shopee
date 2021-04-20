import Carousel from './Carousel';
import Cake from './Cake';

var obj = {
    name: "Chocolate Delight",
    image: "images/image1.jpg",
    cardtext: "Some quick example text to build on the card title and make up the bulk of the card's content."
}

function Home() {
    return (
        <div>
            <Carousel />
            <Cake cakedata={obj} />
            <Cake cakedata={obj} />
        </div>
    )
}

export default Home