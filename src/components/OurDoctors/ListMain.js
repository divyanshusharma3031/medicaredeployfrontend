import React,{useState} from 'react'
import "./style.css"
import info from "./DocInfo"
import Card from "./card"
import Navbar from "./Navbar"

const newArray=[
    ...new Set(
        info.map((curEle)=>{
            return curEle.category;
        })
    ),
    "All"
];
const ListMain = () => {
    const [infoData,setInfoData]=useState(info);
    const [infoList,setInfoList]=useState(newArray);
    const filterItem = (category) => {
        if(category === "All")
        {
            setInfoData(info);
            return;
        }
        const updatedList=info.filter((curEle)=>{
            return curEle.category===category;
        })
        setInfoData(updatedList)
    }
  return (
    <>
        <Navbar filterItem={filterItem} infoList={infoList} />
        <section className="main-card-container1">
        {
            infoData.map((info)=>{
                return(<Card info={info} key={info.id}/>)
            })
        }
        </section>
        
    </>
  )
}

export default ListMain