import { Heading } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import Offers from "./Components/Offers";
import Products from "./Components/Products";
import Searchitem from "./Components/Searchitem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchitem />
      <Products />
      <Offers />
    </div>
  );
}

export default App;
