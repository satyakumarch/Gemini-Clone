// import {createContext, useState} from "react";
// import { runChat } from "../Config/Gemni";

// export const Context =createContext();

// const ContextProvider=(props)=>{
//     const[input,setinput]=useState("");
//     const [recentPrompt,setRecentPrompt]=useState("");
//     const[prevPrompts,setPrevPrompts]=useState("");
//     const[showResult,setShowResult]=useState(false);
//     const[loading,setLoading]=useState(false);
//     const[resultData,setResultData]=useState("");

//     const onSent=async(prompt)=>{
//        await runChat(prompt)
//     }
//     onSent("what is react js")

//     const contextvalue={


//     }
//     return(
//         <Context.Provider value={contextvalue}>
//             {props.children}
//         </Context.Provider>
//     )
// }
// export default ContextProvider();


import { createContext, useState, useEffect } from "react";
import { runChat } from "../Config/Gemni";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Function to handle prompt submission
  const onSent = async (prompt) => {
    setLoading(true);
    try {
      const response = await runChat(prompt);
      setResultData(response);
      setRecentPrompt(prompt);
      setPrevPrompts((prev) => [...prev, prompt]);
      setShowResult(true);
    } catch (error) {
      console.error("Error while sending prompt:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Example: Trigger onSent with a default prompt when the component mounts
  useEffect(() => {
    onSent("What is React.js?");
  }, []);

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    prevPrompts,
    showResult,
    resultData,
    onSent,
    loading,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
