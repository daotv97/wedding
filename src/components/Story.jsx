import React from "react";
import styled, { keyframes } from "styled-components";

import step1 from "../assets/imgs/step1.png";
import step2 from "../assets/imgs/step2.png";
import step3 from "../assets/imgs/step3.png";
import Title from "./SectionTitle";

const AniBeating = keyframes`
    from{
        opacity:.1;
    }
    to{
        opacity:1;
    }
`;
const StyledWrapper = styled.section`
  width: 100%;
  background-color: #eee;
  padding: 0.3rem 0;
  .tl {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items {
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 0.4rem;
        .content {
          position: relative;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #eef;
          padding: 0.2rem;
          border-radius: 0.12rem;
          width: 4rem;
          .title {
            font-size: 0.3rem;
            font-family: Dancing Script;
          }
          .date {
            margin: 0.1rem 0;
            font-style: oblique;
            font-size: 0.12rem;
            color: #666;
            font-family: Open Sans;
          }
          .desc {
            height: 1.5rem;
            overflow: scroll;
            line-height: 1.5;
            margin-top: 0.12rem;
            font-size: 0.15rem;
            display: flex;
            flex-direction: column;
            font-family: Open Sans;
            span {
              margin-bottom: 0.1rem;
            }
          }
        }
        &:nth-child(even) {
          flex-direction: row-reverse;
        }
        .heart {
          margin: 0 0.2rem;
          font-size: 0.3rem;
          animation: ${AniBeating} 1s ease-in-out infinite;
          animation-direction: alternate;
          animation-delay: inherit;
        }
        .pic {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          img {
            z-index: 8;
            border-radius: 50%;
            border: 1px solid #999;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
          }
        }
        @media screen and (max-width: 414px) {
          flex-direction: column-reverse;
          .heart {
            margin: 0.2rem 0;
          }
          &:nth-child(even) {
            flex-direction: column-reverse;
          }
        }
      }
    }
  }
`;
const items = [
  {
    title: "Beginning: Lần gặp đầu tiên ~",
    datetime: "09/12/2008 - Tình yêu tuổi học trò",
    desc: `Chưa nghĩ được gì...`,
    picture: step1,
  },
  {
    title: "Serious: Phép thử tình yêu ~",
    datetime: "08/03/2018 - Yêu xa Việt - Nhật",
    desc: `Chưa nghĩ được gì...`,
    picture: step2,
  },
  {
    title: "Together: Về chung một nhà ~",
    datetime: "10.03.2022",
    desc: `Chưa nghĩ được gì...`,
    picture: step3,
  },
];
function createMarkup(html) {
  return { __html: html };
}

export default function Couple() {
  return (
    <StyledWrapper>
      <Title title="Câu chuyện của chúng mình" />
      <div className="tl">
        <ul className="items">
          {items.map(({ title, datetime, desc, picture }, idx) => (
            <li key={title} className="item">
              <div className="pic">
                <img src={picture} alt="picture" />
              </div>
              <i className="heart">💓</i>
              <div
                className="content"
                style={{ animationDelay: `0.${idx * 5}s` }}
              >
                <h4 className="title">{title}</h4>
                <time className="date">{datetime}</time>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={createMarkup(desc)}
                ></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  );
}
