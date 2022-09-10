/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styled from "styled-components";
import Title from "./SectionTitle";
import WeddingImage from "../assets/imgs/tt.wedding.2.png";
import WeddingImageMobile from "../assets/imgs/mobile.wedding.2.png";

const StyledWrapper = styled.section`
  z-index: 1;
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${WeddingImageMobile});
  background-position: center;
  @media screen and (min-width: 769px) {
    background-image: url(${WeddingImage});
  }
  &:after {
    /* content: ""; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.3);
  }
  .wrapper {
    margin: 0.2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .box {
      min-height: 4.4rem;
      width: 4rem;
      background-color: rgba(2, 2, 2, 0.5);
      z-index: 9;
      color: #fff;
      padding: 0.25rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.2rem;
      border-radius: 5px;
      /* border: 2px solid rgba(2,2,2,.5); */
      &:first-child {
        margin: 0 0.25rem 0 0;
      }
      @media screen and (max-width: 768px) {
        &:first-child {
          margin: 0 0 0.25rem 0;
        }
      }
      .title {
        font-size: 0.3rem;
        width: 100%;
        text-align: center;
        font-family: Open Sans;
        border-bottom: 1px solid rgba(222, 222, 222, 0.4);
        padding-bottom: 0.2rem;
      }
      .items {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.2rem 0;
        .item {
          font-size: 0.22rem;
          display: flex;
          align-items: flex-start;
          margin: 0.1rem 0;

          .label {
            color: #ccc;
            white-space: nowrap;
            font-family: Open Sans;
            &:after {
              content: "：";
            }
          }
          .txt {
            white-space: nowrap;
            font-weight: 800;
            font-family: Open Sans;
            &.loc {
              display: flex;
              flex-direction: column;
              .map {
                margin-top: 0.12rem;
                width: 2.4rem;
                height: 2.4rem;
                img {
                  width: 100%;
                  height: 100%;
                  border: 1px solid #ccc;
                  border-radius: 10px;
                }
                &:hover img {
                  box-shadow: 0px 1px 20px black;
                }
              }
            }
          }
          @media screen and (max-width: 768px) {
            flex-direction: column;
            .label {
              margin-bottom: 0.12rem;
            }
          }
        }
      }
    }
  }
`;
export default function Wedding() {
  return (
    <StyledWrapper>
      <Title title="Lễ cưới" />
      <div className="wrapper">
        <div className="box">
          <h3 className="title">Nhà trai</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">14:00 ngày 02/10/2022</span>
            </li>
            <li className="item">
              <span className="label">Tại</span>
              <div className="txt loc">
                <span>Nga Liên, Nga Sơn, Thanh Hoá</span>
                <a
                  className="map"
                  href={"https://goo.gl/maps/ku1sE1uf9JWpPiS46"}
                >
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34058.76157333261!2d106.0281625181467!3d20.00479032754679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136685a87ed6421%3A0x58edf274e291dd66!2zTmjDoCBUaOG7nSBHacOhbyBY4bupIFRhbSBU4buVbmc!5e0!3m2!1svi!2s!4v1662796998810!5m2!1svi!2s"
                    width={300}
                    height={200}
                  ></iframe> */}
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3 className="title">Nhà gái</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">14:00 ngày 02/10/2022</span>
            </li>
            <li className="item">
              <span className="label">Tại</span>
              <div className="txt loc">
                <span>Nga Liên, Nga Sơn, Thanh Hoá</span>
                <a
                  className="map"
                  href={"https://goo.gl/maps/opaKgw9VZasBqDP28"}
                >
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34058.76157333261!2d106.0281625181467!3d20.00479032754679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136685a87ed6421%3A0x58edf274e291dd66!2zTmjDoCBUaOG7nSBHacOhbyBY4bupIFRhbSBU4buVbmc!5e0!3m2!1svi!2s!4v1662796998810!5m2!1svi!2s"
                    width={300}
                    height={200}
                  ></iframe> */}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
}
