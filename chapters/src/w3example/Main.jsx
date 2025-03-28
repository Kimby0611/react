import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="wrap">
      <h2>w3 example</h2>
      <div className="div1">
        <section>
          <p>timer</p>
          <button onClick={() => navigateTo("/w3timer")}>click</button>
        </section>

        <section>
          <p>double</p>
          <button onClick={() => navigateTo("/w3dbcont")}>click</button>
        </section>

        <section>
          <p>usecontext</p>
          <button onClick={() => navigateTo("/w3usecontext")}>click</button>
        </section>

        <section>
          <p>useCountRender</p>
          <button onClick={() => navigateTo("/w3userender")}>click</button>
        </section>

        <section>
          <p>useRefPrev</p>
          <button onClick={() => navigateTo("/w3userefprev")}>click</button>
        </section>

        <section>
          <p>useReducer</p>
          <button onClick={() => navigateTo("/w3usereducer")}>click</button>
        </section>

        <section>
          <p>useCallback</p>
          <button onClick={() => navigateTo("/w3usecall")}>click</button>
        </section>

        <section>
          <p>useMemo</p>
          <button onClick={() => navigateTo("/w3usememo")}>click</button>
        </section>

        <section>
          <p>Form</p>
          <button onClick={() => navigateTo("/w3form")}>click</button>
        </section>
      </div>
    </div>
  );
};

export default Main;
