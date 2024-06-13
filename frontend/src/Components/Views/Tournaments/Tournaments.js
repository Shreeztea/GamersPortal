import Card from '../../Common/Card/Card';
import Carousel from '../../Common/Carousel/Carousel';
import CarouselItem from '../../Common/Carousel/CarouselItem';
import CarouselBannerImage from '../../Common/Carousel/CarouselBannerImage';
const Tournaments = () => {
  return <>
    <div className='container'>
      <Carousel id="tournamentsCarousel">
        <CarouselItem active="active">
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://pixlr.com/images/index/product-image-one.webp" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://pixlr.com/images/index/product-image-one.webp" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://pixlr.com/images/index/product-image-one.webp" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://pixlr.com/images/index/product-image-one.webp" link="fb.com" />
        </CarouselItem>
        <CarouselItem>
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" link="fb.com" />
        </CarouselItem>
        <CarouselItem>
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg" link="fb.com" />
          <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." image="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg" link="fb.com" />
        </CarouselItem>
      </Carousel>
    </div>
  </>
};

export default Tournaments;
