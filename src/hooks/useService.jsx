import { useEffect } from "react";
import { useState } from "react";

const useService = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => {
          setMenu(data);
          setLoading(false);
        });
    }, []);
    return [menu, loading];
  };

export default useService