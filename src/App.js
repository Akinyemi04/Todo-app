import './App.css';
import sun from './Components/images/icon-sun.svg'
import moon from './Components/images/icon-moon.svg'
import suna from './Components/images/bg-desktop-light.jpg'
import muna from './Components/images/bg-desktop-dark.jpg'
import bsuna from './Components/images/bg-mobile-light.jpg'
import bmuna from './Components/images/bg-mobile-dark.jpg'
//import plus from './Components/images/icon-cross.svg'
import cross from './Components/images/p1.png'
import cross2 from './Components/images/p.png'
import { useEffect, useRef, useState } from 'react';
import Body from './Components/images/Body';
function App() {
  const[back,setBack]=useState(moon)
  const[head,setHead]=useState(suna)
  const[bod,setBod]=useState('rgb(247, 245, 240)')
  const[color,setColor]=useState('white')
  const[items,setItems]=useState(0)
  const [ray,setRay]=useState('rgb(102, 100, 96)')
  const[arrex,setArrex]=useState([])
  const[crossimage,setCross]=useState(cross2)
  const[changing,setChange]=useState('')
  const[catt,setCat]=useState('black')
  const[textcolor,setText]=useState()
  //console.log(arrex.length)
  useEffect(()=>{
    if(arrex.length !== 0){
    localStorage.setItem('magic',JSON.stringify(arrex))
    }
    else if (arrex.length === 0){
      setArrex(JSON.parse(localStorage.getItem('magic')))
    }
    else{
      localStorage.setItem('magic',JSON.stringify(arrex))
    }
  },[arrex])
  //localStorage.setItem('magic',JSON.stringify(arrex))
  //console.log(arrex.length)
  //localStorage.clear('magic')
  function click(){
    if(back === moon){
      if(window.screen.width >420){
        setBack(sun)
        setHead(`url(${muna})`)
        setBod('black')
        setColor('rgb(41,40,38)')
        setRay('rgb(124, 117, 128)')
        setCross(cross)
        setCat('white')
        setText('#cacde8')
      }
      else{
        setBack(sun)
        setHead(`url(${bmuna})`)
        setBod('black')
        setColor('rgb(41, 40, 38)')
        setRay('124, 117, 128')
        setCross(cross)
        setCat('white')
        setText('#cacde8')
      }
    }
    else if( back === sun){
      if(window.screen.width > 420){
        setBack(moon)
        setHead(`url(${suna})`)
        setBod('rgb(247, 245, 240)')
        setColor('white')
        setRay('rgb(102, 100, 96)')
        setCross(cross2)
        setCat('black')
        setText('black')
      }
      else {
        setBack(moon)
        setHead(`url(${bsuna})`)
        setBod('rgb(247, 245, 240)')
        setColor('white')
        setRay('rgb(102, 100, 96)')
        setCross(cross2)
        setCat('black')
        setText('black')
      }
    }
  }
  function change(e){
    setChange(e.target.value)
  }

  function king(e){
    if(changing.length !== 0){
      setArrex([...arrex,changing].reverse())
      setChange('')
      refer.current.value= ''
    }
  }
  const refer= useRef()
  return (
    <div  className="App">
      <header style={{backgroundImage:head}}>
        <h1>TODO</h1>
        <img onClick={click} src={back} alt='' ></img>
        <img  onClick={king} className='zin'src={crossimage} alt =''></img>
        <input ref={refer} onChange={change} type='text' style={{backgroundColor:color, color:textcolor}} placeholder='Create A new Todo...'></input>
        
      </header>
      <section style={{backgroundColor:bod}}>
        <Body text={textcolor} arrayy={setArrex}  value={items} array={arrex} background={color} colorx={ray} cat={catt}/>
      </section>
    </div>
  );
}

export default App;
