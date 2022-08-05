import styled from "@emotion/styled";

export const Card = styled.div` width: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0 0 0;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #000000;
  box-shadow: 5px 5px 5px;`;

export const Description = styled.div`
 background-color: #ffffff;
  text-align: center;
  `;

export const Username = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-size: bold;
`;

export const Tag = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

export const Location = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  opacity: 0.8;
`;

export const Stats = styled.ul`
  font-size: 12px;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid #000;
  background-color: rgb(231, 225, 225);
`;

export const List = styled.li`
  padding: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100px;

  :nth-child(2n) {
  border-left: 1px solid black;
  border-right: 1px solid black;
}
`;

export const Label = styled.span`
 font-weight: bold;
  opacity: 0.6;
  text-align: center;

  :not(:last-child) {
      margin-right: 20px;
  }
`;
 
export const Quantity = styled.span`
 font-weight: bold;
  color: #000000;
`;

export const Avatar = styled.img`
 width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e9e3e3;
`;