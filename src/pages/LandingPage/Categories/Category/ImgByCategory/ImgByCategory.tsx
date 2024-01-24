import Dress from "../../../../../assets/dress.png";
import Jacket from "../../../../../assets/jacket.png";
import Trainers from "../../../../../assets/trainers.png";
import Glasses from "../../../../../assets/glasses.png";

type ImgByCategoryProps = {
  name: string;
};

export function ImgByCategory({ name }: ImgByCategoryProps) {
  switch (name) {
    case "electronics":
      return <img src={Dress} alt="Dress" />;
    case "jewelery":
      return <img src={Jacket} alt="Jacket" />;
    case "men's clothing":
      return <img src={Trainers} alt="Trainers" />;
    case "women's clothing":
      return <img src={Glasses} alt="Glasses" />;
    default:
      break;
  }
  return null;
}
