"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Menu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api?name=APA INI ???");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>MENU PAGE!</h1>
      <br />
      <h2>Data : {data?.name}</h2>
    </div>
  );
}
