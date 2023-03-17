import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) =>{

  ReactDOM.render(<h1>Hi,There</h1>,el);

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