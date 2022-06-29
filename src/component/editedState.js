import { BiChevronDown } from "react-icons/bi";
import {MdCancel,MdDone } from "react-icons/md";


function editedState ({personData}) {
  return (
    <>
      <h1>editedState</h1>
      {
        personData.map((data)=>(
                 <div className="card">
                      <div className="upper container">
                      <img className="image-container " src={data.picture} alt="person_image"/>
                      <div>{`${data.first}   ${data.last}`}</div>
                      <button ><BiChevronDown /></button>
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
                          <button><MdCancel/></button>
                          <button><MdDone/></button>
                      </div>
                 </div>
                ))
      }
    </>
  );
}

export default editedState;