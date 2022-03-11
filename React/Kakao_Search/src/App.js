import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import qs from "qs"

import Meta from "./components/Meta"
import Top from "./components/Top"

import BlogPage from "./pages/BlogPage";
import BookPage from "./pages/BookPage";
import CafePage from "./pages/CafePage";
import ImagePage from "./pages/ImagePage";
import WebPage from "./pages/WebPage";

import style from "./assets/scss/style.module.scss";

const App = () => {

  // Top.js에서 클릭된 링크에 의해 전달되는 QueryString을 추출한다.
  const { search } = useLocation();

  // 추출된 QueryString을 JSON객체로 파싱하고 Key가 query인 값만 추출한다.
  const { query } = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <div className={style.container}>
      <Meta />
      <Top />
      <Routes>
        <Route path="/blog" element={<BlogPage query={query} />} />
        <Route path="/book" element={<BookPage query={query} />} />
        <Route path="/cafe" element={<CafePage query={query} />} />
        <Route path="/image" element={<ImagePage query={query} />} />
        <Route path="/web" element={<WebPage query={query} />} />
      </Routes>
    </div>
  );
}

export default App;
