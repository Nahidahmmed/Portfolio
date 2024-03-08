// import React, { createContext, useState } from 'react'


// export const ThemeContext = createContext(null);
// export default function ThemeProvider({children}) {
   
//     const [Mode, setMode] = useState(true);

//     const toggleTheme = () => {
//       setMode(prevMode => !prevMode);
//     };


 
//     // useEffect(() => {
//     //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//     //         setUser(currentUser);
//     //         console.log('currentUser', currentUser);
//     //         setLoading(false)
//     //     });
//     //     return () => {
//     //         return unsubscribe;
//     //     };
//     // }, []);

//     const authInfo = {
//         Mode,
//         toggleTheme
//     };
//   return (
//     <ThemeContext.Provider value={authInfo}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }
