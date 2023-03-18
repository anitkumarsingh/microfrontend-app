import React,{useRef,useEffect} from 'react';
import {mount} from 'marketing/MarketingApp';

const MarketingApp = () =>{
  const ref = useRef(null);
  useEffect(()=>{
    mount(ref.current,{
      onNavigate:()=>{
        console.log('The container noticed navigation in marketing')
      }
    })
  },[])
  return(<div ref={ref}></div>)
}
export default MarketingApp;