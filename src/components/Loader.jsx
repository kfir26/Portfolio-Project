// 1st original and works
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;

// 2nd new option not change soo much but num of files that loaded
// import React from "react";
// import { Html, useProgress } from "@react-three/drei";
// import PropTypes from "prop-types";

// const CanvasLoader = ({ color, backgroundColor }) => {
//   const { progress, errors, loaded, total } = useProgress();

//   return (
//     <Html
//       as="div"
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         backgroundColor: backgroundColor || "rgba(0, 0, 0, 0.5)",
//         width: "100%",
//         height: "100%",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 9999,
//       }}
//     >
//       {errors.length > 0 ? (
//         <p style={{ color: "#FF0000", fontSize: 18 }}>Error loading assets</p>
//       ) : (
//         <>
//           <span
//             className="canvas-loader"
//             style={{
//               width: 50,
//               height: 50,
//               borderRadius: "50%",
//               border: `4px solid ${color || "#ffffff"}`,
//               borderTop: "4px solid transparent",
//               animation: "spin 1s linear infinite",
//             }}
//           ></span>
//           <p
//             style={{
//               fontSize: 14,
//               color: color || "#ffffff",
//               fontWeight: 800,
//               marginTop: 20,
//             }}
//           >
//             {loaded}/{total} loaded ({(progress * 100).toFixed(2)}%)
//           </p>
//         </>
//       )}
//     </Html>
//   );
// };

// CanvasLoader.propTypes = {
//   color: PropTypes.string,
//   backgroundColor: PropTypes.string,
// };

// export default CanvasLoader;
