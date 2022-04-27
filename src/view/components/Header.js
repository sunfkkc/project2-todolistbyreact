import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-title">위치 기반 To do List</div>
      <div className="content-header">
        <button className="btn content-header--new">작성</button>
        <button className="btn content-header--find">조회</button>
      </div>
    </div>
  );
}

export default Header;
