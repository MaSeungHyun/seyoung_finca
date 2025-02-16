import { Noto_Serif_Display } from "next/font/google";

const noto = Noto_Serif_Display({
  subsets: ["latin"],
});

export default function FincaFooter() {
  return (
    <div>
      <div className="end-container">
        <div className={`end-title ${noto.className}`}>
          Subscrive to get 10% off
        </div>
        <div className="end-text">
          <div className="end-subtitle-one">
            <div className="one-text1">주식회사 원인어헌드레드</div>
            <div className="one-text2">대표이사:조민정,김주선 대표전화</div>
          </div>
          <div className="end-subtitle-two">
            <div className="two-text1">Help center</div>
            <div className="two-text2">070-7537-3773</div>
            <div className="two-text3">10:00~16:00</div>
          </div>
          <div className="end-subtitle-three">
            <div className="three-text1">about</div>
            <div className="three-text2">terms of use</div>
          </div>
        </div>
      </div>
      <div className="bottom">FINKA ALL RIGHTS RESERVED</div>
    </div>
  );
}
