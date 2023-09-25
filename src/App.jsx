import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";


function App() {

  let saludo = 'Bienvenido a ClickCourse';

  return (
    <div>
      <Navbar />

      <ItemListContainer saludo = {saludo} />

    </div>
  );
}

export default App;
