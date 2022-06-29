import { BiChevronUp } from "react-icons/bi";
function closedState ({personData,spreadCard}) {
    return (
      <>
        <h2>closedState</h2>
        {
        personData.map((data)=>(
                 <div className="card">
                      <div className="upper container">
                      <img className="image-container " src={data.picture} alt="person_image"/>
                      <div>{`${data.first}   ${data.last}`}</div>
                      <button onClick={(e)=>spreadCard(e)}><BiChevronUp /></button>
                    </div>
                 </div>
                ))
      }
      </>
    );
  }
  
  export default closedState;