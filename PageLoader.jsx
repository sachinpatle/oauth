import React,{useEffect ,useState} from "react";

export const PageLoader = () => {

    const [rotation, setRotation] = useState(0);

    const loaderStyle = {
        height: '5rem',
        width: '5rem',
        margin: 'auto',
        animation: 'spin 2s infinite linear',
        transform: `rotate(${rotation}deg)`,
      };

  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 20); // Adjust the interval for smoother animation

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div style={loaderStyle}>
      <img  style={{background:"black"}}  src={loadingImg} alt="Loading..." />
    </div>
  );
};