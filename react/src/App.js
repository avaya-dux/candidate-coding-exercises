import "./scss/App.scss";
import ButtonComponent from "./components/button/ButtonComponent";
function App() {
  return (
    <div className="home__background">
      {/* <p className="home__text">Please render your Components Here</p>
       */}
      <ButtonComponent />
    </div>
  );
}

export default App;
