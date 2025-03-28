import React, { useEffect, useState } from "react";
import "./ui.css";
import sunImage from "../images/sun.png";
import cloudImage from "../images/cloud.png";
import cloudyImage from "../images/cloudy.png";

const HeadUi = (props) => {
  const { tem } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [currentTemp, setCurrentTemp] = useState("");
  const [weatherImage, setWeatherImage] = useState("");
  const menuItems = [
    { title: "메뉴1", submenu: ["sub1", "sub2", "sub3"] },
    { title: "메뉴2", submenu: ["sub1", "sub2", "sub3"] },
    { title: "메뉴3", submenu: ["sub1", "sub2", "sub3"] },
    { title: "메뉴4", submenu: ["sub1", "sub2", "sub3"] },
  ];

  useEffect(() => {
    const thisTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      updateTemp();
    }, 1000);
    return () => clearInterval(thisTime);
  }, [tem]);

  const updateTemp = () => {
    const hour = new Date().getHours();
    const TimeStr = `${hour}:00`;
    const matched = tem.find((item) => item.DateTime === TimeStr);
    if (matched) {
      setCurrentTemp(matched.Temperature); // 온도 설정
      const cloudValue = matched.Cloud;
      // Cloud 값에 따라 이미지 설정
      if (cloudValue === 0) {
        setWeatherImage(sunImage);
      } else if (cloudValue >= 1 && cloudValue <= 5) {
        setWeatherImage(cloudyImage);
      } else if (cloudValue >= 6) {
        setWeatherImage(cloudImage);
      }
    } else {
      setCurrentTemp("온도 데이터 없음");
      setWeatherImage(""); // 데이터 없으면 이미지 없음
    }
  };

  return (
    <div className="wrap">
      <header>
        <div className="logo">Logo</div>

        <div className="subcon">
          {weatherImage && <img src={weatherImage} alt="weather" />}
          <p>{currentTemp}</p>
          <p>{time}</p>
        </div>
      </header>
      <div className="menudiv">
        <nav
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="main-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="mainmenu">
                <a>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className={`submenu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <ul key={index} className="submenu-group">
                {item.submenu.map((submenu, subIndex) => (
                  <li key={subIndex} className="submenuItem">
                    {submenu}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeadUi;
