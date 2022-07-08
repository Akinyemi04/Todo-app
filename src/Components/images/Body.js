import React, { useEffect, useRef, useState } from 'react'
import check from './icon-check.svg'
import cross from './icon-cross.svg'
const Body = (props) => {
     const[peep,setPip]=useState()
    const[order,setOrder]=useState('All')
    const arr =props.array
    //console.log(arr.length )
    const refer= useRef()//using this to access the css property of the li element
    
    if( arr.length !== 0){
        var val =arr.map((hue,index)=>
        <li onLoad={loads} ref={refer} draggable='true' onDragStart={drag} onDrop={drop} onDragOver={allowDrop} key={index} id={index}>
            <img alt='' onClick={mark} src={check} id='checker'></img>
            <span /*on={loads}*/ className='tuna' style={{color:props.text}} >{hue}</span>
        
            <img alt='' onClick={deletee} data-action={hue} id='img' src={cross}></img>
        </li>)
    }
    
    
    //console.log(refer.current)
    function loads(e){
        const targets = e.target.children
       /*const  tuna = Array.from(targets.children).filter(function (sandwich) {
            return sandwich.matches('#checker');
        })*/
        //console.log(targets)
        if(targets ==='line-through'){

        }
    }
    
    function mark(e){
        const deed= e.target
        const cane = deed.style.background
        const leaf = deed.nextElementSibling
        if(cane ==='linear-gradient(135deg, rgb(87, 221, 255), rgb(192, 88, 243))'){
            deed.style.background= 'inherit'
            deed.style.border='1px solid grey'
            leaf.style.textDecoration='none'
            leaf.style.opacity='100%'
        }
        else{
            deed.style.background= 'linear-gradient(135deg,#57ddff,#c058f3'
            deed.style.background='1px solid inherit'
            leaf.style.textDecoration='line-through'
            leaf.style.opacity='50%'
        }

    }
    function deletee(e){
        const eve = e.target.dataset.action
         const everi = arr.findIndex(even)
         function even(val){
          return  val === eve
         }
         arr.splice(everi,1)
         props.arrayy([...arr])
    }
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    function flag(e){
        const key =e.target
        const action =key.dataset.action
        if( action === 'all'){
            setPip('game')
        }
        else if (action === 'active'){
            setPip('take')
        }else if (action === 'completed'){
            setPip('tikin')
        }
    }
    function clear(){

    }
    function mouse(e){
        e.target.style.color=props.cat
    }
    function out(e){
        e.target.style.color=props.colorx
    }
    //many many many people
    if (order === 'All'){
        return (
            <div className='image' style={{backgroundColor:props.background}}>
                <main>
                    <ul >
                        {val}
                    </ul>
                </main>
                <footer >
                    <p  style={{color:props.colorx}}>{props.value} item(s) left</p>
                    <ul  onClick={flag}>
                        <li  onMouseOver={mouse} onMouseOut={out} style={{color:props.colorx}} id='data' data-action='all'>All</li>
                        <li onMouseOver={mouse} onMouseOut={out} style={{color:props.colorx}}  id='data' data-action='active'>Active</li>
                        <li onMouseOver={mouse} onMouseOut={out} style={{color:props.colorx}} id='data' data-action='completed'>Completed</li>
                    </ul>
                    <p  onMouseOver={mouse} onMouseOut={out} style={{color:props.colorx}} id='come' onClick={clear}>Clear Completed</p>
                </footer>
                <span ref={refer}>Drag And Drop To Reorder List</span>
                
            </div>
        )
    }
}

export default Body