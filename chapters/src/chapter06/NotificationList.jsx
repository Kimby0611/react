import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id: 2, message: "점심 식사 시간입니다." },
  { id: 3, message: "이제 곧 미팅이 시작됩니다." },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  componentDidMount() {
    //빈 배열인 notifications을 가져옴
    const { notifications } = this.state;
    timer = setInterval(() => {
      //첫 실행이라 가정 시 >> 0 < 3
      if (notifications.length < reservedNotifications.length) {
        //index = 0
        const index = notifications.length;
        //reserveNotifications[0]을 notifications에 추가
        notifications.push(reservedNotifications[index]);
        //위에서 추가된 notifications를 맨 처음 빈 배열이던 notifications으로 업데이트
        //this.setState({'속성':'새 값'})
        //push로 배열을 수정했지만 react는 모르기 때문에 수정했다고 알리기 위해서 setState로 notificatios를 push한 notifications로 수정했다고 알려주기 위해 사용
        this.setState({
          //notifications, <<이렇게만 적어도 가능 축약형
          notifications: notifications,
        });
      } else {
        //빈 배열로 초기화 여기서 componentWillUnmount 실행
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }
  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
