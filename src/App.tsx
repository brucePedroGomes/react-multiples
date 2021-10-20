import { Home } from "./pages/Home";
import { Routes } from "./Routes";

export const App = ({ name }) => {
  return (
    <Routes>
      <Home name={name} />
    </Routes>
  );
};
