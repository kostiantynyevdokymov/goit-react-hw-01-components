import styled from "@emotion/styled";

export const Card = styled.section`
 width: 400px;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid #000000;
  box-shadow: 5px 5px 5px;
`;

export const Title = styled.h2`
font-size: 24px;
  text-align: center;
`;

export const Statlist = styled.ul`
 list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;

export const Item = styled.li`
  width: 80px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 0 10px;
    :first-child {
    background-color: aquamarine;
    }
    :nth-child(2) {
    background-color: cornflowerblue;
    }
    :nth-child(3) {
    background-color: gray;
    }
    :nth-child(4) {
    background-color: khaki;
    }
    :nth-child(5) {
    background-color: hotpink;
    }
`;

export const Label = styled.span`
    font-size: bold;
    margin-bottom: 5px;
`;

export const Percentage = styled.span`

`;