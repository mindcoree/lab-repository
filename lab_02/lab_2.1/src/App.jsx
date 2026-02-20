import CombinedComponent from "./components/CombinedComponent";
import FragmentLayout from "./components/FragmentLayout";


function App() {
  return (
    <div className="App">
      {/* Вызываем наши компоненты как обычные HTML теги */}
      <FragmentLayout />
      <hr />
      <CombinedComponent />
    </div>
  );
}

export default App;
