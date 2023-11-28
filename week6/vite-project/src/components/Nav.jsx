// import { useState } from "react";
import { getUserProfile } from "./Api";
import "../style/Nav.css";

function Nav() {
  // const 확인 = getUserProfile();
  // const 이메일 = 확인.email;
  // console.log(이메일);

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img
            className="logo"
            src="../src/assets/logo.svg"
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </a>
        <a className="cta cta-short" href="signin.html">
          <span>로그인</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
