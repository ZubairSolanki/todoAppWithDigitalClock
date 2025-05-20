// import { useState } from "react";
// import { IoMdCheckmarkCircle } from "react-icons/io";
// import { MdDelete } from "react-icons/md";

// export const Todo = () => {
//   // create state for store inpputdata

//   const [inputSate, setInput] = useState("");

//   // crreate useState for task

//   const [task, setTask] = useState([]);

//   const handleInputvalue = (value) => {
//     setInput(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // if there is no input give us empty stirng
//     if (!inputSate) return;

//     // validation for same data not add

//     if (task.includes(inputSate)) {
//       setInput("");
//       return;
//     }

//     //  setTask((prevdata)=>console.log(prevdata)) // this is for show previou data but in console we found empty cuse isse pehle kuch add ni kra hamne

//     setTask((prevdata) => [...prevdata, inputSate]); // we add spread oprator for add previous data and inputSate for new data add in last

//     // then add data krne k baad inputState ku empty kr do

//     setInput("");
//   };

//   return (
//     <section className="flex justify-center pt-16 bg-gray-1 min-h-10">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <header className="mb-6 text-center">
//           <h1 className="text-2xl font-bold">Todo List</h1>
//         </header>
//         <section>
//           {/* whenever you work with form so form by default render our page
//             so we use onSubmit event and provide predefined function
//             event.preventDefault()*/}

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 autoComplete="off"
//                 placeholder="Enter a task"
//                 className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 // if i add value {inputState} so we inputState value is empty String in useState
//                 // thats they give us error like this
//                 /*
//                 changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value,
//                  which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info:
//                 */
//                 //****
//                 /*
//                 you provide value prop to a form filed without an
//                 'onChange' handler...this will render the read only filed
//                 if the filed should be mutable use ''defaultValue'.
//                 so det onChange or readOnly
//                 */
//                 value={inputSate}
//                 // so we use eventhandler

//                 onChange={(event) => handleInputvalue(event.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
//               >
//                 Add Task
//               </button>
//             </div>
//           </form>
//         </section>
//         <section>
//           <ul>
//             {task.map((data, key) => {
//               return (
//                 <li key={key}>
//                   <span>{data}</span>
//                   <button>
//                     <IoMdCheckmarkCircle />
//                   </button>
//                   <button>
//                     <MdDelete />
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </section>
//       </div>
//       <section></section>
//     </section>
//   );
// };

/*

import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Clock } from "./Clock";

export const Todo = () => {
  const [inputSate, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleInputvalue = (value) => {
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputSate) return;
    if (task.includes(inputSate)) {
      setInput("");
      return;
    }
    setTask((prevdata) => [...prevdata, inputSate]);
    setInput("");
  };


 

  return (
    <section className="flex justify-center pt-16 bg-gray-100 min-h-screen">
<div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md h-[600px] overflow-y-auto">



        <header className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        </header>
     <Clock/>
    
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-1 ">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter a task"
              value={inputSate}
              onChange={(e) => handleInputvalue(e.target.value)}
              className="flex-grow px-6 py-5 border-6 border-green-300 rounded-xl font-bold text-blue-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-bold  transition"
            >
              Add Task
            </button>
          </div>
        </form>

    
        <section className="mt-6">
          <ul className="space-y-2">
            {task.map((data, key) => (
              <li
                key={key}
                className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md shadow-sm"
              >
                <span className="text-gray-800 font-bold transition duration-200 ease-in-out hover:text-blue-600 hover:scale-105">
                  {data}
                </span>

                <div className="flex gap-2">
                  <button className="text-green-600 hover:text-green-800 text-xl transition duration-200 ease-in-out transform hover:scale-200">
                    <IoMdCheckmarkCircle />
                  </button>

                  <button className="text-red-600 hover:text-red-800 text-xl transition duration-100 ease-in-out transform hover:scale-200" >
                    <MdDelet />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};



*/

// Lecture 38 Delete Element Clear all data

/*

import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Clock } from "./Clock";

export const Todo = () => {

  const [inputSate, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleInputvalue = (value) => {
    
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputSate) return;
    if (task.includes(inputSate)) {
      setInput("");
      return;
    }


      if (task.includes(inputSate)) {
      setInput("");
      return;
    }

    // if input filed have spaces only or spaves between start and end
  if (!inputSate.trim()) {
    setInput(""); // Clear the input field
    return; // Don't add anything to the task list
  }
    
    

     
    setTask((prevdata) => [...prevdata, inputSate]);
    setInput("");
  };

  // delete todo item

  const handleDeleteTodo = (data) => {
    console.log(task);
    console.log(data);

    const updatededlist = task.filter((list) => {
      return list !== data;
    });

    setTask(updatededlist);
  };

  // clear all data

  const handleClearData = () => {
    setTask([]);
    console.log(setTask([]));
  };

  return (
    <section className="flex justify-center pt-16 bg-gray-100 min-h-screen">
      <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md h-[600px] overflow-y-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        </header>
        <Clock />

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-1 ">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter a task"
              value={inputSate}
              onChange={(e) => handleInputvalue(e.target.value)}
              className="flex-grow px-6 py-5 border-6 border-green-300 rounded-xl font-bold text-blue-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-bold  transition"
            >
              Add Task
            </button>
          </div>
        </form>

        <section className="mt-6">
          <ul className="space-y-2">
            {task.map((data, key) => (
              <li
                key={key}
                className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md shadow-sm"
              >
                <span className="text-gray-800 font-bold transition duration-200 ease-in-out hover:text-blue-600 hover:scale-105">
                  {data}
                </span>

                <div className="flex gap-2">
                  <button className="text-green-600 hover:text-green-800 text-xl transition duration-200 ease-in-out transform hover:scale-200">
                    <IoMdCheckmarkCircle />
                  </button>

                  <button
                    className="text-red-600 hover:text-red-800 text-xl transition duration-100 ease-in-out transform hover:scale-200"
                    onClick={() => handleDeleteTodo(data)}
                  >
                    /* <MdDelete  onClick={()=>handleDeleteTodo(data)}  /> */
/*  <MdDelete />
                  </button>
                </div>
              </li>
            ))}
            <div className="flex justify-center items-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-200 text-center"
                onClick={handleClearData}
              >
                Clear
              </button>
            </div>
          </ul>
        </section>
      </div>
    </section>
  );
};

*/




// In this Lecture 40 we convert our value into object.............................
// that have id,content,checked
// now our task is array of object



// import { useState } from "react";
// import { IoMdCheckmarkCircle } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import { Clock } from "./Clock";

// export const Todo = () => {
//   // now here my initial state is Object i also used here  useState("");
//   // work properly but give controll and uncontrol error
//   const [inputSate, setInput] = useState({
//     id: "",
//     content: "",
//     checked: false,
//   });

//   const [task, setTask] = useState([]);

//   // here we pass value before
//   // so we convert into object

//   const handleInputvalue = (value) => {
//     // setInput me value now object ki form me hogi
//     setInput({ id: value, content: value, checked: false });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const { id, content, checked } = inputSate;

//     // Prevent empty or whitespace-only input
//     if (!content || !content.trim()) {
//       setInput({ id: "", content: "", checked: false });
//       return;
//     }

//     // Prevent duplicate tasks
//     const inputMatch = task.find((crele) => crele.content === content.trim());
//     if (inputMatch) {
//       setInput({ id: "", content: "", checked: false });
//       return;
//     }

//     // Add new task
//     setTask((prevdata) => [
//       ...prevdata,
//       { id, content: content.trim(), checked },
//     ]);

//     // Reset input field properly
//     setInput({ id: "", content: "", checked: false });
//   };

//   // delete todo item

//   const handleDeleteTodo = (data) => {
//     const updatedList = task.filter((list) => list.id !== data.id);
//     setTask(updatedList);
//   };

//   // clear all data

//   const handleClearData = () => {
//     setTask([]);
//   };

//   //handle checked or uncheck,,,,,,,,

//   // there we not use filter method includes cuse we dont want remove ya add data
//   // here we only change css state all data remain same
//   // here value is checked
  
//   // zues mean   data.content
  
//   /*     
//        first way
//   const handleCheckedContent = (zues) => {
//     const checkedData = task.map((item) =>
//       // ...item here id,content same but checkd value change true and false
//       item.content === zues ? { ...item, checked: !item.checked } : item
//     );
//     setTask(checkedData);
//   };
// */

//      // second way 
 
//      const handleCheckedContent=(data)=>{
//       const contentcheckd=task.map((crele)=>{
//         if(crele.content===data){
//           // return object hogs id,content same only checked value true false
//           return {...crele,checked:!crele.checked}
//         }else{
//           return crele;
//         }
//       })
//       setTask(contentcheckd)
//      }



//   return (
//     <section className="flex justify-center pt-16 bg-gray-100 min-h-screen">
//       <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md h-[600px] overflow-y-auto">
//         <header className="mb-6 text-center">
//           <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
//         </header>
//         <Clock />

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="flex gap-1 ">
//             <input
//               type="text"
//               autoComplete="off"
//               placeholder="Enter a task"
//               value={inputSate.content}
//               onChange={(e) => handleInputvalue(e.target.value)}
//               className="flex-grow px-6 py-5 border-6 border-green-300 rounded-xl font-bold text-blue-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
//             />

//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-bold  transition"
//             >
//               Add Task
//             </button>
//           </div>
//         </form>

//         <section className="mt-6">
//           <ul className="space-y-2">
//             {task.map((data) => (
//               <li
//                 key={data.id}
//                 className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md shadow-sm"
//               >
//                 {/* <span className="text-gray-800 font-bold transition duration-200 ease-in-out hover:text-blue-600 hover:scale-105">
//                   {data.content}
//                 </span> */}

//                 <span
//                   className={`font-bold transition duration-200 ease-in-out hover:text-blue-600 hover:scale-105 ${
//                     data.checked ? "line-through text-red-400" : ""
//                   }`}
//                 >
//                   {data.content}
//                 </span>

//                 <div className="flex gap-2">
//                   <button
//                     className="text-green-600 hover:text-green-800 text-xl transition duration-200 ease-in-out transform hover:scale-200"
//                     onClick={() => handleCheckedContent(data.content)}
//                   >
//                     <IoMdCheckmarkCircle />
//                   </button>

//                   <button
//                     className="text-red-600 hover:text-red-800 text-xl transition duration-100 ease-in-out transform hover:scale-200"
//                     onClick={() => handleDeleteTodo(data)}
//                   >
//                     <MdDelete />
//                   </button>
//                 </div>
//               </li>
//             ))}
//             <div className="flex justify-center items-center">
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-200 text-center"
//                 onClick={handleClearData}
//               >
//                 Clear
//               </button>
//             </div>
//           </ul>
//         </section>
//       </div>
//     </section>
//   );
// };






// ....Lecture 41......................//

// After referesh data is gone cuse we can not store data any data base
// So here we use local Storage to store our data





import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Clock } from "./Clock";

export const Todo = () => {
  // now here my initial state is Object i also used here  useState("");
  // work properly but give controll and uncontrol error
  const [inputSate, setInput] = useState({
    id: "",
    content: "",
    checked: false,
  });

// this safe cuse i only change here every where change
  const todokey='todoLocal'

  // here we dont need empty array we need localStorage data with the help of getItem metho
  // how  
  const [task, setTask] = useState(()=>{
    const localtodo=localStorage.getItem(todokey)
    // now we get data in string form so we convert string into array
    // use JSON.parse() method

   // return JSON.parse(localtodo) 
   // // give error cuse in initail local storage have null so
    // nothing return empty array
    if(!localtodo) return [];


/*
We use **try...catch** in JavaScript (and other languages) 
to handle errors gracefully and prevent the app from crashing.
 Specifically, in your case with JSON.parse(), here's why it's important:
*/


    try {
       return JSON.parse(localtodo)
    } catch (error) {
      console.log('there is errror in local Storage',error)
      return [];
    }



   

  });


  // here we pass value before
  // so we convert into object
  const handleInputvalue = (value) => {
    // setInput me value now object ki form me hogi
    setInput({ id: value, content: value, checked: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { id, content, checked } = inputSate;

    // Prevent empty or whitespace-only input
    if (!content || !content.trim()) {
      setInput({ id: "", content: "", checked: false });
      return;
    }

    // Prevent duplicate tasks
    const inputMatch = task.find((crele) => crele.content === content.trim());
    if (inputMatch) {
      setInput({ id: "", content: "", checked: false });
      return;
    }

    // Add new task
    setTask((prevdata) => [
      ...prevdata,
      { id, content: content.trim(), checked },
    ]);

    // Reset input field properly
    setInput({ id: "", content: "", checked: false });
  };



// ........Here we use Local Storage to Store our todo data 
//  because here our data store in task
                          // there we not add task cuse task is array
                          // and setItem takes two parmeter
                          // key and value both are string
                          // so we convert our array[task] into String 
                          // with JSON.stringfy()
 // localStorage.setItem('todaData',JSON.stringify(task))

 localStorage.setItem(todokey,JSON.stringify(task))






  // delete todo item

  const handleDeleteTodo = (data) => {
    const updatedList = task.filter((list) => list.id !== data.id);
    setTask(updatedList);
  };

  // clear all data

  const handleClearData = () => {
    setTask([]);
  };

  //handle checked or uncheck,,,,,,,,

  // there we not use filter method includes cuse we dont want remove ya add data
 
     const handleCheckedContent=(data)=>{
      const contentcheckd=task.map((crele)=>{
        if(crele.content===data){
          // return object hogs id,content same only checked value true false
          return {...crele,checked:!crele.checked}
        }else{
          return crele;
        }
      })
      setTask(contentcheckd)
     }



  return (
    <section className="flex justify-center pt-16 bg-gray-100 min-h-screen">
      <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md h-[600px] overflow-y-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        </header>
        <Clock />

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-1 ">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter a task"
              value={inputSate.content}
              onChange={(e) => handleInputvalue(e.target.value)}
              className="flex-grow px-6 py-5 border-6 border-green-300 rounded-xl font-bold text-blue-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-bold  transition"
            >
              Add Task
            </button>
          </div>
        </form>

        <section className="mt-6">
          <ul className="space-y-2">
            {task.map((data) => (
              <li
                key={data.id}
                className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md shadow-sm"
              >
                {/* <span className="text-gray-800 font-bold transition duration-200 ease-in-out hover:text-blue-600 hover:scale-105">
                  {data.content}
                </span> */}

                <span
                  className={`font-bold transition duration-200 ease-in-out hover:text-blue-600 hover:scale-105 ${
                    data.checked ? "line-through text-red-400" : ""
                  }`}
                >
                  {data.content}
                </span>

                <div className="flex gap-2">
                  <button
                    className="text-green-600 hover:text-green-800 text-xl transition duration-200 ease-in-out transform hover:scale-200"
                    onClick={() => handleCheckedContent(data.content)}
                  >
                    <IoMdCheckmarkCircle />
                  </button>

                  <button
                    className="text-red-600 hover:text-red-800 text-xl transition duration-100 ease-in-out transform hover:scale-200"
                    onClick={() => handleDeleteTodo(data)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
            <div className="flex justify-center items-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-200 text-center"
                onClick={handleClearData}
              >
                Clear
              </button>
            </div>
          </ul>
        </section>
      </div>
    </section>
  );
};


