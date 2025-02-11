import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0px;
  padding: 60px;
  flex-direction: ${({ layout }) => layout};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
