import './styles/App.css';
import { useRoutes } from "react-router-dom";
import { renderRouter } from "@/libs/router";
import { useEffect } from "react";
import store from "store";
import { useLocation } from "react-router-dom";

export function clearLocalStorage() {
  store.remove("token");
  store.remove("permission");
  store.remove("roleName");
  store.remove("username");
}

export default function App() {
  const element = useRoutes(renderRouter);
  const location = useLocation();

  // 调试模式下，React初始会渲染两次，但是是正常的。
  // 参见：https://www.codingdict.com/blog/1630
  console.log(location.pathname);

  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "数据迁移";
  }, []);

  return element;
}
