import { BiChevronDown } from "react-icons/bi";
import { FiEdit  } from "react-icons/fi";
import {MdDelete } from "react-icons/md";
function openState({personData,handleEditing}) {
  return (
    <>
     <h2>Open state</h2>
     {
        personData.map((data)=>(
                 <div className="card">
                      <div className="upper container">
                      <img className="image-container " src={data.picture} alt="person_image"/>
                      <div>{`${data.first}   ${data.last}`}</div>
                      <button onClick={(e)=>handleEditing(e)}><BiChevronDown /></button>
                      </div>
       
                      <div className="middle container">
                      <div>Age : {15}</div>
                      <div>{`Gender : ${data.gender}`}</div>
                      <div>{`Country : ${data.country}`}</div>
                      </div>
       
                      <div className="lower container">
                      <div>{`Description : ${data.description}`}</div>
                      </div>
                      <div className="action1">
                        <button><FiEdit /></button>
                        <button><MdDelete/></button>
                      </div>
                 </div>
                ))
      }
      <h2>closed openstate</h2>
    </>
  );
}

export default openState;