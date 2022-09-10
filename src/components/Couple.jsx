import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "./SectionTitle";
import FrameImage from "../assets/imgs/frame.png";
import coDau from "../assets/imgs/co-dau.png";
import chuRe from "../assets/imgs/chu-re.png";

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      margin: 0;
    }
    .profile {
      color: #222;
      padding: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: inherit.4rem;
      .pic {
        width: 2.8rem;
        height: 2.8rem;
        background-repeat: no-repeat;
        background-size: 80%, 100%;
        background-position: center;
        overflow: hidden;
        &.boy {
          background-image: url("${chuRe}"), url(${FrameImage});
          // background-size: 75%, 100%;
          // background-position-y: 5px;
        }
        &.girl {
          background-image: url("${coDau}"), url(${FrameImage});
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-family: "Dancing Script", cursive;
        font-size: 0.4rem;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
      }
      .intro {
        font-size: 0.12rem;
        white-space: nowrap;
        font-family: Open Sans;
      }
    }
  }
`;
const tips = {
  h: {
    m: "bên phải",
    w: "bên trái",
  },
  v: {
    m: "bên dưới",
    w: "bên trên",
  },
};
export default function Couple({ popupDan }) {
  const [pos, setPos] = useState("h");
  useEffect(() => {
    if (window.innerWidth <= 414) {
      setPos("v");
    }
  }, []);
  const handleDC = () => {
    popupDan("双击666");
  };
  return (
    <StyledWrapper>
      <Title title="Chú rể · Cô dâu" />
      <div className="cp">
        <div className="profile">
          <div className="pic boy" onDoubleClick={handleDC}>
            <img src={FrameImage} alt="man" />
          </div>
          <div className="name">Mạnh Dũng🤵🏻</div>
          <div className="intro">
            Người đàn ông tuy nhỏ về ngoại hình nhưng có ý chí lớn.
          </div>
        </div>
        <div className="profile">
          <div className="pic girl" onDoubleClick={handleDC}>
            <img src={FrameImage} alt="man" />
          </div>
          <div className="name">Hoa Mai👰🏻</div>
          <div className="intro">
            Nhí nhảng, đấng yêu đăc biệt rất yêu trẻ con.
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
