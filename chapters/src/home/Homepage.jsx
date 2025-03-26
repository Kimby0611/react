import React from "react";
import { useNavigate, Link } from "react-router-dom";

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
        <button onClick={() => navigateTo("/w3exhome")}>click</button>
      </section>

      <div className="div1">
        <section>
          <p>go chapter03</p>
          <button onClick={goLibrary}>click</button>
        </section>

        <section>
          <p>go chapter04</p>
          <Link to="chapter04">
            <button>click</button>
          </Link>
        </section>

        <section>
          <p>go chapter05</p>
          <button onClick={() => navigateTo("/chapter05")}>click</button>
        </section>

        <section>
          <p>go chapter06</p>
          <button onClick={() => navigateTo("/chapter06")}>click</button>
        </section>

        <section>
          <p>go chapter07</p>
          <button onClick={() => navigateTo("/hook")}>click</button>
        </section>

        <section>
          <p>go chapter08</p>
          <button onClick={() => navigateTo("/clickevent")}>click</button>
        </section>

        <section>
          <p>go chapter09</p>
          <button onClick={() => navigateTo("/logintool")}>click</button>
        </section>

        <section>
          <p>go chapter09 - no props</p>
          <button onClick={() => navigateTo("/loginprac")}>click</button>
        </section>

        <section>
          <p>go chapter10</p>
          <button onClick={() => navigateTo("/attend")}>click</button>
        </section>

        <section>
          <p>go chapter11</p>
          <button onClick={() => navigateTo("/inputname")}>click</button>
        </section>

        <section>
          <p>go chapter12</p>
          <button onClick={() => navigateTo("/calculator")}>click</button>
        </section>

        <section>
          <p>go chapter12-prac</p>
          <button onClick={() => navigateTo("/prac12")}>click</button>
        </section>

        <section>
          <p>go chapter13</p>
          <button onClick={() => navigateTo("/card")}>click</button>
        </section>

        <section>
          <p>go chapter14</p>
          <button onClick={() => navigateTo("/theme")}>click</button>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
