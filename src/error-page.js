import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>糟糕!</h1>
      <p>頁面不存在或發生錯誤</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}