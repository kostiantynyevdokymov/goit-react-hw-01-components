import styled from "@emotion/styled";

export const Item = styled.li`
   display: flex;
    justify-content: space-around;
    height: 50px;
    width: 100%;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(72, 71, 71);
    position: relative;
     border-radius: 3px;
     margin-bottom: 5px;
     box-shadow: 5px 5px 5px;
`;

export const Avatar = styled.img`
 margin-right: 30px;
 `;

export const Username = styled.p`
  margin: 0;
`;

export const Status = styled.span`
    position: absolute;
        top: 15px;
        left: 15px;
`;


export const OnlineIcon = styled.span`
  width: 10px;
  height: 10px;
  border: 1px solid rgb(38, 249, 38);
  border-radius: 50%;
  margin-right: 10px;
  background-color: rgb(38, 249, 38);
`;
export const OfflineIcon = styled.span`
  width: 10px;
  height: 10px;
  border: 1px solid rgb(253, 56, 158);
  border-radius: 50%;
  margin-right: 10px;
  background-color: rgb(253, 56, 158);
`;