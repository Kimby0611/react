import React from "react";
import { useNavigate } from "react-router-dom";

const HookPage = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="wrap">
      <h2>React Hook</h2>
      <div className="div1">
        <section>
          <p>useState</p>
          <button onClick={() => navigateTo("/usestate")}>click</button>
        </section>

        <section>
          <p>useEffect</p>
          <button onClick={() => navigateTo("/useeffect")}>click</button>
        </section>

        <section>
          <p>useMemo</p>
          <button onClick={() => navigateTo("/usememo")}>click</button>
        </section>

        <section>
          <p>useCallback</p>
          <button onClick={() => navigateTo("/usecallback")}>click</button>
        </section>

        <section>
          <p>useRef</p>
          <button onClick={() => navigateTo("/useref")}>click</button>
        </section>

        <section>
          <p>useCounter</p>
          <button onClick={() => navigateTo("/usecount")}>click</button>
        </section>
      </div>
    </div>
  );
};

export default HookPage;
