import styled from "styled-components";

export const StyledButton = styled.button`
 
    min-width: 130px;
    height: 40px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: #fff;
    overflow: hidden;
    border: 2px solid #adb5bd;
    color: #adb5bd;
 &:hover {
    color: #fff;
  }
 &:hover:after {
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #adb5bd;
  }


`