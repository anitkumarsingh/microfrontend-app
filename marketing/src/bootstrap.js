import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (el) =>{

  ReactDOM.render(<App/>,el);

}

// delelopment or production
if(process.env.NODE_ENV ==='development'){
  const findEl = document.querySelector('#marketing-dev-root');
  if(findEl){
    mount(findEl);
  }
}

//

module.export = mount;