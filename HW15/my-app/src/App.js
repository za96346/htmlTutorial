import React, { useEffect } from "react";
import { getUsers } from './api'

function App() {
  useEffect(() => {
    getUsers().then((v) => {
      console.log(v)
    })
  }, [])
  return (
    <div>wef</div>

  );
}

export default App;
