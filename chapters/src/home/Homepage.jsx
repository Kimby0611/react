import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";

const Homepage = () => {
  const navigate = useNavigate();
  const goLibrary = () => {
    navigate("/chapter03");
  };
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="wrap">
      <h2>React</h2>

      <section>
        <p>go w3 example</p>
        <button onClick={() => navigateTo("/w3exhome")} className="button">
          click
        </button>
      </section>

      <div className="div1">
        <section>
          <p>go chapter03</p>
          <p className="contP">-jsx란-</p>
          <button onClick={goLibrary} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter04</p>
          <p className="contP">엘리먼트 렌더링 - 시계</p>
          <Link to="chapter04">
            <button className="button">click</button>
          </Link>
        </section>

        <section>
          <p>go chapter05</p>
          <p className="contP">-컴포넌트와 props-</p>
          <button onClick={() => navigateTo("/chapter05")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter06</p>
          <p className="contP">-state와 생명주기-</p>
          <button onClick={() => navigateTo("/chapter06")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter07</p>
          <p className="contP">-hook-</p>
          <button onClick={() => navigateTo("/hook")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter08</p>
          <p className="contP">이벤트 핸들링 - 클릭 이벤트</p>
          <button onClick={() => navigateTo("/clickevent")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter09</p>
          <p className="contP">조건부 렌더링 - 로그인 툴바</p>
          <button onClick={() => navigateTo("/logintool")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter09 - no props</p>
          <p className="contP">로그인 툴바 - props 없는거</p>
          <button onClick={() => navigateTo("/loginprac")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter10</p>
          <p className="contP">-리스트와 키-</p>
          <button onClick={() => navigateTo("/attend")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter11</p>
          <p className="contP">-form-</p>
          <button className="button" onClick={() => navigateTo("/inputname")}>
            click
          </button>
        </section>

        <section>
          <p>go chapter11</p>
          <p className="contP">-과일 선택-</p>
          <button onClick={() => navigateTo("/select")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter12</p>
          <p className="contP">state 끌어올리기 - 온도</p>
          <button onClick={() => navigateTo("/calculator")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter12-prac</p>
          <p className="contP">state 연습 - 계산기</p>
          <button onClick={() => navigateTo("/prac12")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter13</p>
          <p className="contP">-합성 상속-</p>
          <button onClick={() => navigateTo("/card")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter14</p>
          <p className="contP">-context-</p>
          <button onClick={() => navigateTo("/theme")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter15</p>
          <p className="contP">-스타일링-</p>
          <button onClick={() => navigateTo("/block")} className="button">
            click
          </button>
        </section>

        <section>
          <p>go chapter16</p>
          <p className="contP">-미니 홈페이지-</p>
          <button onClick={() => navigateTo("mini-home")} className="button">
            click
          </button>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
