import { React, useState, useEffect } from 'react'
import './Navbar'
import './Navbar.scss'
import { client } from '../../client';

// import {images} from '../../constants'


const Navbar = () => {
  const [myFileUrl, setMyFileUrl] = useState('');
  


  useEffect(() => {
    const query = '*[_type == "resume"][0]';
    client.fetch(query).then((data) => {
      const assetId = data?.myFile?.asset?._ref;
      if (assetId) {
        const query = `*[_id == "${assetId}"]{url}[0]`;
        client.fetch(query).then((result) => {
          const url = result?.url;
          setMyFileUrl(url);
        });
      }
    });
  }, []);



  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" href="/">Shoyeab Aslam</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className='collapse navbar-collapse' id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link"  href="#home" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#work">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">Blogs</a>
        </li>
        
        <li className="nav-item">
          <a className="button" href={myFileUrl} target='_blank' rel="noreferrer">Resume</a>
        </li>
        
      </ul>
     
    </div>
  </nav>
  )
}

export default Navbar