import styled from "@emotion/styled";
import { Basket } from "../../components/commons/layout/basket/Basket.container";
import { Footer } from "../../components/commons/layout/footer/Footer.container";
import { Common } from "../style/emotion";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
  border: 1px solid ${Common.color.line};
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw - 400px);
  border-right: 1px solid ${Common.color.line};
  background: ${Common.color.bg};
  min-width: 1000px;
`;
const BasketWrapper = styled.div`
  width: 400px;
  background: #fff;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Page>
        {props.children}
        <Footer />
      </Page>
      <BasketWrapper>
        <Basket />
      </BasketWrapper>
    </Wrapper>
  );
}
