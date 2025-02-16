import Finca from "./Finca";
import FincaHeader from "./FincaHeader";
import FincaItem from "./FincaItem";

import item1 from "./assets/item1-1.png";
import item2 from "./assets/item1-2.png";
import item3 from "./assets/item1-3.png";
import item4 from "./assets/item1-4.png";

import pillow1 from "./assets/item2-1.png";
import pillow2 from "./assets/item2-2.png";
import pillow3 from "./assets/item2-3.png";
import pillow4 from "./assets/item2-4.png";

import main from "./assets/main.png";
import pillow from "./assets/pillow main.jpg";
import FincaFooter from "./Fincaend";
export default function Home() {
  const images = [
    { src: item1, sale: "20", price: "104,000" },
    { src: item2, sale: "20", price: "104,000" },
    { src: item3, sale: "20", price: "104,000" },
    { src: item4, sale: "20", price: "104,000" },
  ];

  const pillows = [
    { src: pillow1, sale: "20", price: "104,000" },
    { src: pillow2, sale: "20", price: "104,000" },
    { src: pillow3, sale: "20", price: "104,000" },
    { src: pillow4, sale: "20", price: "104,000" },
  ];
  return (
    <div className="p-3 min-w-screen min-h-screen">
      <FincaHeader />
      <Finca
        src={main}
        title={"Home"}
        subTitle={"가장 개인적인 공간에서 취하는 창의적인 휴식"}
      />
      <div className="flex w-screen justify-center">
        {images.map((item) => {
          return (
            <FincaItem
              key={item.src.toString()}
              src={item.src}
              sale={item.sale}
              price={item.price}
            />
          );
        })}
      </div>
      <Finca
        src={pillow}
        title={"Pillow"}
        subTitle={"라이프스타일에 따라 패턴부터 소재까지 셀랙해보세요"}
        style={{ flexDirection: "row-reverse" }}
        textStyle={{ alignItems: "end" }}
      />
      <div className="flex gap-3 flex justify-between">
        {pillows.map((item) => {
          return (
            <FincaItem
              key={item.src.toString()}
              src={item.src}
              sale={item.sale}
              price={item.price}
            />
          );
        })}
      </div>
      <FincaFooter />
    </div>
  );
}
