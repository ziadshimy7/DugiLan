// import { useEffect, useState } from "react";
// import Input from "./UI/input/Input";

// const Test = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       "https://dugilan-be6e8-default-rtdb.firebaseio.com/users.json",
//       {
//         method: "POST",
//         body: JSON.stringify([username, password]),
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   };
//   console.log(username, password);
//   return (
//     <>
//       <input onChange={(e) => setUsername(e.target.value)} type="text" />
//       <input onChange={(e) => setPassword(e.target.value)} type="password" />
//       <button onClick={submitHandler}>Send data</button>
//     </>
//   );
// };

// export default Test;
