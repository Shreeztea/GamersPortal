import Card from '../../Common/Card/Card';
import Carousel from '../../Common/Carousel/Carousel';
import CarouselItem from '../../Common/Carousel/CarouselItem';
import CarouselBannerImage from '../../Common/Carousel/CarouselBannerImage';
const Tournaments = ({ title,id }) => {
  return <>
    <div className='bg-gray-800 text-white py-3 pace-y-10'>
      <div className='container'>
        <h2 className="text-center text-3xl font-bold my-8">{title}</h2>
        <Carousel id={id}>
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
    </div>
  </>
};

export default Tournaments;
