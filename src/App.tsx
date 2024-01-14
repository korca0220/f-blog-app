import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";
import { useState } from "react";
import Router from "./components/Router";

function App() {
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  return (
    <>
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
