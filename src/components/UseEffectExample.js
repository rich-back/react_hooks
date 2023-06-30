import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [resourceType, setResourceType] = useState("users");
  const [data, setData] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => setData(data), console.log(data));
  }, [resourceType]);

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleData = (resourceType) => {
    if (resourceType === "posts") {
      return (
        <ul>
          {data
            .map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <pre>{item.body}</pre>
              </li>
            ))
            .splice(0, 10)}
        </ul>
      );
    }
    if (resourceType === "users") {
      return (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <pre>username: {item.username}</pre>
              <pre>email: {item.email}</pre>
              <pre>website: {item["website"]}</pre>
            </li>
          ))}
        </ul>
      );
    }
    if (resourceType === "comments") {
      return (
        <ul>
          {data
            .map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <pre>{item.email}</pre>
                <pre>{item.body}</pre>
              </li>
            ))
            .splice(0, 10)}
        </ul>
      );
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Window Dimensions:</h1>
        <h3>Width: {windowDimensions.width}</h3>
        <h3>Height: {windowDimensions.height}</h3>
      </div>
      <hr></hr>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>top 10 {resourceType}</h1>
      <div>{handleData(resourceType)}</div>
      <hr></hr>
    </>
  );
}
