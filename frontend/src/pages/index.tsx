import { useEffect, useState } from "react";
// import ExampleComponent from "../components/ExampleComponent";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello?name=Portfolio")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME || "MyApp"}</h1>
      <p>Backend says: {message}</p>
      {/* <ExampleComponent /> */}
    </div>
  );
}
