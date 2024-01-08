import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const ProductContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  > div {
    width: calc(33.33% - 13.33px);
  }
`;
