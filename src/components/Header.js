import logo from '../images/logo.svg'
import './Header.css'
import {useEffect} from 'react'

export default function Header() {
  
  var theme;
  
  useEffect(()=>{
    theme = (
    
      function(){
      
        let dark = true;
        
        const array = [
          ['--color-text', '#EEE', '#111'],
          ['--color-primary', '#112', '#FFF'],
          ['--color-secondary', '#223', '#FFF'],
          ['--color-text-footer', '#AAB', '#554'],
          ['--font-weight-light', '300', '600'],
          ['--font-weight-dark', '600', '300'],
          ['--key-left', '55%', '5%'],
          ['--invert', '0', '1']
        ]
        
        const rs = document
          .querySelector(':root').style;
        
        return function () {
    
          for (const [k,v1,v2] of array) {
            rs.setProperty(k, dark ? v1 : v2);
          }
          
          dark = !dark;
        }
      }
    )();
    theme();
  },[])
  
  return (
    <header>
      <div>
        <img src={logo}/>
        <h4>ReactFacts</h4>
      </div>
      <div className='switch' onClick={()=>theme()} >
        <h2 className='light'>Light</h2>
        <div className='key'></div>
        <h2 className='dark'>Dark</h2>
      </div>
    </header>
  );
}
