// import { useNavigate } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "./context/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { currentUser, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!currentUser && !loading) {
//       navigate("/login");
//     }
//   }, [currentUser, loading, navigate]);

//   return <>{children}</>;
// };

// export default ProtectedRoute;
