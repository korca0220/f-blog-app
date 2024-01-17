import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "components/Loader";
import { ThemeContext } from "context/ThemeContext";
import Router from "./components/Router";

function App() {
  const themeContext = useContext(ThemeContext);
  const auth = getAuth(app);

  // auth를 체크하기 전에 loader를 띄워주는 용도
  const [init, setInit] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setInit(true);
    });
  }, [auth]);

  return (
    <div className={themeContext.theme === "light" ? "white" : "dark"}>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </div>
  );
}

export default App;
