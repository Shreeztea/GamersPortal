import Carousel from "../Carousel/Carousel";
import CarouselBannerImage from "../Carousel/CarouselBannerImage";

const BannerSlider = () => {
    return ( 
        <>
            <Carousel>
                <CarouselBannerImage active="active" image="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg" label="First Image Label" description="Some representative placeholder content for the first slide."/>
                <CarouselBannerImage image="https://t3.ftcdn.net/jpg/05/04/70/88/360_F_504708859_U9PtI4cCanponR5HrsI7Cna9841UTDFb.jpg" label="Second Image Label" description="Some representative placeholder content for the second slide."/>

            </Carousel>
        </>
     );
}
 
export default BannerSlider;