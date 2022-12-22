import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

type Props = {};

const App = (props: Props) => {
  return (
    <Container>
      <Navbar />
      <PageContainer>
        <Sidebar />
        <div className="page">Some Page</div>
      </PageContainer>
    </Container>
  );
};

const Container = styled.div``;

const PageContainer = styled.div`
  display: flex;

  .page {
    flex: 4;
  }
`;

export default App;