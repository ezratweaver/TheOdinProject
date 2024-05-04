import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const layoutCss = {
  display: "grid",
  gridTemplateAreas: `
    'sidebar header'
    'sidebar content'`,
  gridTemplateColumns: "250px 1fr",
  gridTemplateRows: "174px 8fr",
};

const App = () => {
  return (
    <div style={layoutCss}>
      <div style={{ gridArea: "header", zIndex: 1 }}>
        <Header />
      </div>
      <div style={{ gridArea: "sidebar" }}>
        <Sidebar />
      </div>
      <div style={{ gridArea: "content" }}>
        <Content />
      </div>
    </div>
  );
};

export default App;
