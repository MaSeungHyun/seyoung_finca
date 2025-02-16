import Image, { StaticImageData } from "next/image";

import { Noto_Serif_Display } from "next/font/google";
import { CSSProperties } from "react";

const noto = Noto_Serif_Display({
  subsets: ["latin"],
});

type FincaProps = {
  src: string | StaticImageData;
  title: string;
  subTitle?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
};

export default function Finca({
  src,
  title,
  subTitle,
  style,
  textStyle,
}: FincaProps) {
  return (
    <div>
      <div className="box">
        <div className="main" style={style}>
          <div className="main-left" style={textStyle}>
            <div className={`home-title ${noto.className}`}>{title}</div>

            <div className="home-subtitle">{subTitle}</div>
          </div>
          <div className="main-right">
            <Image className="home" src={src} alt="main" />
          </div>
        </div>
      </div>
    </div>
  );
}
