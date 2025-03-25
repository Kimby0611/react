import React, { useMemo } from "react";

const UseMemoChild = ({ numbers }) => {
  const sum = useMemo(() => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);
  return <div>합계 : {sum}</div>;
};

export default UseMemoChild;
