import React, { useEffect, useState } from "react";
import "./ui.css"; // CSS 파일 import
import SonImage from "../images/son.jpg"; // 이미지 import
import Baseball1Image from "../images/baseball1.jpg";
import Baseball2Image from "../images/baseball2.jpg";
import Baseball3Image from "../images/baseball3.jpg";

const SectionUi = () => {
  const articles = [
    {
      imgSrc: SonImage,
      title:
        "\"SON 토트넘 선발 제외→베르너보다 돌파 안돼\" 英매체 폭언…'손흥민 흔들기' 도넘었다",
      link: "https://m.sports.naver.com/wfootball/article/477/0000541749",
    },
    {
      imgSrc: Baseball1Image,
      title:
        "142km→145km→143km→143km.구속 정체 52억 FA 마무리. 첫 멀티이닝 소화. 그러나 홈런도 맞았다. 1.1이닝 1실점[SC 퓨처스]",
      link: "https://m.sports.naver.com/kbaseball/article/076/0004259623",
    },
    {
      imgSrc: Baseball2Image,
      title:
        "'MVP 후보 위력인가' 오타니의 시즌 2호 홈런…\"다저스타디움은 열광의 소용돌이\"",
      link: "https://m.sports.naver.com/wbaseball/article/109/0005270976",
    },
    {
      imgSrc: Baseball3Image,
      title:
        "'만능 3번' 이정후, 예술 눈야구! 좋은공 안 주면 걸어나갈게 → 개막전 역전드라마 선봉장 됐다!",
      link: "https://m.sports.naver.com/wbaseball/article/076/0004259617",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true); // 현재 항목을 먼저 사라지게 함
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length); // 다음 항목으로 전환
        setIsExiting(false); // 새 항목 등장 시작
      }, 500); // 0.5초 후 다음 항목 등장 (사라지는 시간)
    }, 5500); // 5초 정지 + 0.5초 전환 = 5.5초 간격

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [articles.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {articles.map((article, index) => (
          <div
            className={`slide-item ${
              index === currentIndex && !isExiting
                ? "active"
                : index === currentIndex && isExiting
                ? "exiting"
                : ""
            }`}
            key={index}
          >
            <img src={article.imgSrc} alt={article.title} />
            <p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionUi;
