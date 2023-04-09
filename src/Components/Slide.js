import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

function Slide() {
    const [slide, setslide] = useState([{label:"ghhjhjjjhhjhjhj",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FcXEeWoA.jpg&f=1&nofb=1&ipt=e45c553596d4bf84725b0011cc0366d9ca4d9bd3eb22a2b838be5b3d7ca6fb09&ipo=images"},{label:"",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F67%2F3f%2F5c%2F673f5cf444b0b29e9aab9cbf433c9a9e.jpg&f=1&nofb=1&ipt=dd76356a9b15906f1d3218839cae1badaba6dbc121a7bec56ff27e8b4377ed98&ipo=images"},{label:"",image:"https://cdn.wallpapersafari.com/73/73/rVFDOp.jpg"},{label:"",image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F37800000%2FBook-Wallpaper-reading-37810278-1280-800.jpg&f=1&nofb=1&ipt=f1e9f41d54adee5cbac465a1b515dc5f856fcc9c52e9401e66360d06610e1859&ipo=images"},{label:" ",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpaperflare.com%2Fstatic%2F936%2F468%2F899%2Fbooks-fantasy-book-illustration-wallpaper.jpg&f=1&nofb=1&ipt=7f4c47f55c4fde95c43786335ea6904169cdf903f60976988494fceaa00841bd&ipo=images"}])

  return (
    <div>
        <Carousel>
            {slide.map((display)=>{
                return(

               
        
      <Carousel.Item interval={5000}>
        <img
            style={{height:'700px',objectFit:"contain"}}
          className="d-block w-100"
          src={display.image}
          alt="First slide"
        />
       <Carousel.Caption className="align-self-start">
  <h1 style={{color:'white',fontWeight:'900'}}>{display.label}</h1>
</Carousel.Caption>

      </Carousel.Item>
           
           )})}
      </Carousel>
    </div>
  )
}

export default Slide