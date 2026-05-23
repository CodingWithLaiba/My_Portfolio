import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import notFound from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<notFound />} /> */}
    </Routes>
  );
}

export default App;