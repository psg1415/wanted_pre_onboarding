import "./App.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <>
        {/*gnb영역S*/}
        <div className="NavBar">
          <div className="MainBar_MainBar">
            <nav className="MainBar_MainBar_nav">
              <div className="MainBar_MainBar_nav_top">
                <div className="MainBar_MainBar_nav_top_logo">
                  <button type="button" className="MainBar_hamberger">
                    <img src="https://static.wanted.co.kr/images/icon-menu.png" />
                  </button>
                  <a href="/" className="MainBar_MainBar_logo">
                    <i className="icon-logo_new"></i>
                  </a>
                </div>
                <button
                  id="gnbSignupBtn"
                  className="xsSignUpButton"
                  type="button"
                >
                  회원가입하기
                </button>
              </div>
              <ul className="Menu_className">
                <li className="xsHomeButton xsOnly selectedNav">
                  <a href="/">홈</a>
                </li>
                <li>
                  <a href="/">채용</a>
                </li>
                <li>
                  <a href="/">이벤트</a>
                </li>
                <li className="smMoreVisible">
                  <a href="/">직군별 연봉</a>
                </li>
                <li className="smMoreVisible">
                  <a href="/">이력서</a>
                </li>
                <li className="smMoreVisible">
                  <a href="/">커뮤니티</a>
                </li>
                <li className="smMoreVisible">
                  <a href="/">프리랜서</a>
                </li>
                <li className="smMoreVisible">
                  <a href="/">AI 합격예측</a>
                </li>
              </ul>
              <aside className="Aside_className">
                <ul>
                  <li className="searchIcon">
                    <button className="searchButton" type="button">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        xmlnsXlink="https://www.w3.org/1999/xlink"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <defs>
                          <path
                            id="qt2dnsql4a"
                            d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                          ></path>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <use
                            fill="#333"
                            fillRule="nonzero"
                            stroke="#333"
                            strokeWidth=".3"
                            xlinkHref="#qt2dnsql4a"
                          ></use>
                        </g>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="signUpButton" type="button">
                      회원가입/로그인
                    </button>
                  </li>
                  <li className="leftDivision">
                    <a className="dashboardButton" href="/">
                      기업 서비스
                    </a>
                  </li>
                  <li className="Aside_visibleMenu">
                    <button
                      className="menuButton"
                      type="button"
                      data-attribute-id="gnb"
                      data-gnb-kind="photo"
                    >
                      <svg
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <path
                            d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                            id="a"
                          ></path>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <mask id="b" fill="#fff">
                            <use xlinkHref="#a"></use>
                          </mask>
                          <use fill="#333" xlinkHref="#a"></use>
                          <g mask="url(#b)" fill="#333">
                            <path d="M0 0h18v18H0z"></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </li>
                </ul>
              </aside>
            </nav>
          </div>
        </div>
        <div className="Padding"></div>
        {/*gnb영역E*/}
        {/*캐러셀S*/}
        <div className="main">
          <Slider {...settings}>
            <div className="slide_content slide01">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" />
              </div>
              <div className="information">
                <h2>개발자가 되고싶은 분들!?</h2>
                <h3>프론트엔드 무료 교육과정 참여하기</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide02">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg" />
              </div>
              <div className="information">
                <h2>성장하는 개발자가 되려면?</h2>
                <h3>OOO 검색하지 말 것!</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide03">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg" />
              </div>
              <div className="information">
                <h2>포트폴리오를 부탁해!</h2>
                <h3>디자이너의 포폴 살펴보기</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide04">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg" />
              </div>
              <div className="information">
                <h2>마케팅 주니어를 찾습니다</h2>
                <h3>기업 과제 풀고 취업까지 한번에!</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide05">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" />
              </div>
              <div className="information">
                <h2>개발자 성장 비결 공개!</h2>
                <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide06">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg" />
              </div>
              <div className="information">
                <h2>해, 커리어 EP 02 공개</h2>
                <h3>마지막 관문 2라운드의 승자는?</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide07">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg" />
              </div>
              <div className="information">
                <h2>2022년 달라지는 노동법령</h2>
                <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide08">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg" />
              </div>
              <div className="information">
                <h2>성과를 내는 마케팅</h2>
                <h3>실제 사례를 공개합니다!</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="slide_content slide09">
              <div className="Image_Image">
                <img src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg" />
              </div>
              <div className="information">
                <h2>UX 디자이너의 커리어 설계</h2>
                <h3>브랜드 가치를 더하는 디자인</h3>
                <hr className="divider"></hr>
                <a
                  href="/"
                  className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                  aria-label=""
                >
                  <span className="Button_Button__label__1Kk0v">
                    바로가기
                    <span className="Button_Button__endIcon__MpDfc">
                      <span className="SvgIcon_SvgIcon__root__8vwon">
                        <svg
                          className="SvgIcon_SvgIcon__root__svg__DKYBi"
                          viewBox="0 0 18 18"
                        >
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Slider>
        </div>

        {/*캐러셀E*/}
      </>
    );
  }
}
