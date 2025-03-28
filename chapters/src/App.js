import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./home/Homepage";
import Clock from "./chapter_04/Clock";
import Library from "./chapter_03/Library";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter06/NotificationList";
import UseState from "./chapter_07/UseState";
import HookPage from "./chapter_07/HookPage";
import UseEffect from "./chapter_07/UseEffect";
import UseMemo from "./chapter_07/UseMemo";
import CallbackParent from "./chapter_07/CallbackParent";
import UseRef from "./chapter_07/UseRef";
import Accommodate from "./chapter_07/Accommodate";
import ClickEvent from "./chapter_08/ClickEvent";
import Timer from "./w3example/Timer";
import Main from "./w3example/Main";
import DoubleCounter from "./w3example/DoubleCounter";
import UseContext from "./w3example/UseContext";
import UseRefRenderCount from "./w3example/UseRefRenderCount";
import UseRefPrev from "./w3example/UseRefPrev";
import UseReducer from "./w3example/UseReducer";
import UseCallBack from "./w3example/UseCallBack";
import UseMemoW3 from "./w3example/UseMemoW3";
import LandingPage from "./chapter_09/LandingPage";
import LoginPrac from "./chapter_09/LoginPrac";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";
import CalPrac from "./chapter_12/CalPrac";
import ProfileCard from "./chapter13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
import Blocks from "./chapter_15/Blocks";
import Select from "./chapter_11/Select";
import MainPage from "./chapter-16-miniblog/page/MainPage";
import MyForm from "./w3example/MyForm";
import PostWritePage from "./chapter-16-miniblog/page/PostWritePage";
import PostViewPage from "./chapter-16-miniblog/page/PostViewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/w3timer" element={<Timer />} />
        <Route path="/w3exhome" element={<Main />} />
        <Route path="/w3dbcont" element={<DoubleCounter />} />
        <Route path="/w3usecontext" element={<UseContext />} />
        <Route path="/w3userender" element={<UseRefRenderCount />} />
        <Route path="/w3userefprev" element={<UseRefPrev />} />
        <Route path="/w3usecall" element={<UseCallBack />} />
        <Route path="/w3usereducer" element={<UseReducer />} />
        <Route path="/w3usememo" element={<UseMemoW3 />} />
        <Route path="/w3form" element={<MyForm />} />

        <Route path="/" element={<Homepage />} />
        <Route path="/chapter03" element={<Library />} />
        <Route path="/chapter04" element={<Clock />} />
        <Route path="/chapter05" element={<CommentList />} />
        <Route path="/chapter06" element={<NotificationList />} />
        <Route path="/hook" element={<HookPage />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<CallbackParent />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usecount" element={<Accommodate />} />
        <Route path="/clickevent" element={<ClickEvent />} />
        <Route path="/logintool" element={<LandingPage />} />
        <Route path="/loginprac" element={<LoginPrac />} />
        <Route path="/attend" element={<AttendanceBook />} />
        <Route path="/inputname" element={<SignUp />} />
        <Route path="/select" element={<Select />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/prac12" element={<CalPrac />} />
        <Route path="/card" element={<ProfileCard />} />
        <Route path="/theme" element={<DarkOrLight />} />
        <Route path="/block" element={<Blocks />} />
        <Route path="/mini-home" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
