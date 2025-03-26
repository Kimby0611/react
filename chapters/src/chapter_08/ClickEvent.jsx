import React, { useState } from "react";

// class ClickEvent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isConfirmed: false,
//     };
//     this.handleConfirm = this.handleConfirm.bind(this);
//   }
//   handleConfirm() {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }
//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

function ClickEvent(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    //prevIsConfirmed >> setState함수가 제공하는 이전 상태 값
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };
  return (
    // <div>
    //   {isConfirmed ? (
    //     <button onClick={handleConfirm}>확인하기</button>
    //   ) : (
    //     <button onClick={handleConfirm}>확인됨</button>
    //   )}
    // </div>

    <button onClick={handleConfirm}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ClickEvent;
