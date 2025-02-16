import Image, { StaticImageData } from "next/image";

type FincaItemProps = {
  src: string | StaticImageData;
  sale?: string;
  price: string;
};
export default function FincaItem({ src, sale, price }: FincaItemProps) {
  return (
    <div className="container">
      <div className="items">
        <div className="item1">
          <Image className="item-image" src={src} alt="item-image" />

          <div className="item1-text">
            <div className="item1-title">빈티지 딥브라운&블루 이불커버</div>

            <div className="number-text">
              <div className="sale">{sale && `${sale}%`}</div>
              <div className="number">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
