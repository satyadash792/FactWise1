
import { useState } from "react";
import * as React from 'react';
import Records from "../data.json";
import OpenState from "../component/openState"
import ClosedState from "../component/closedState"
import EditedState from "../component/editedState"

function Card() {
  const [personData, setPersondata]=useState(Records)
  const [openCardState, setOpenCardState]= useState(false)
  const [editCardState, setEditCardState]= useState(false)

  const spreadCard=(e)=>{
    setOpenCardState(true)
  }
  const handleEditing=(e)=>{
    setEditCardState(true)
  }

  return (
    <div className="center">
    { !openCardState ?
    <ClosedState personData={personData} spreadCard={spreadCard}/>
    :
    <>
    { !editCardState ?
    <OpenState personData={personData} handleEditing={handleEditing}/> :
    <EditedState personData={personData}/>
    }
    </>
    }
    </div>
  );
}

export default Card;

//purple_yam