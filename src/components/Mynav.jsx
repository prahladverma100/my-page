import React from 'react'
import logo from '../assets/image/logo.png'
import op_zoek from '../assets/image/op-zoek.png'

function Mynav() {
  return (
      <div>
          <div className="container">
            <div className="d-flex justify-content-between pt-3 pb-2">
                <img className="curser_pointer " src={logo} alt=""/>
                <img className="d-lg-block d-none curser_pointer" src={op_zoek} alt=""/>
            </div>
      </div> 
       <nav class="container-fluid nav_box">
            <div class="d-flex justify-content-end align-items-center">
                <div class=" container gap-3 d-flex align-items-center  justify-content-end pt-4 pb-4" id="texthvr">
                    <ul class="d-flex gap-3 ps-0 mb-0 md_screen align-items-center" id="navbar">
                        <li><a onclick="opennav()" href="" class="  text_black  ff_Roboto fw_400  fs_md  mb-0">HOME</a>
                        </li>
                        <li><a href="" class="  text_black ff_Roboto fw_400 fs_md mb-0">SNEAKERS KOPEN
                            </a></li>
                        <li><a href="" class="  text_black ff_Roboto fw_400 fs_md mb-0">INTERVIEWS</a></li>
                        <li><a href="" class="  text_black ff_Roboto fw_400 fs_md mb-0">SALE
                            </a></li>
                        <li><a href="" class="  text_black ff_Roboto fw_400 fs_md mb-0">SNEAKER VAN DE DAG</a></li>
                        <li><a href="" class="  text_black ff_Roboto fw_400 fs_md mb-0">SNEAKER FORUM
                            </a></li>
                        <li><a href="" class="  text_black ff_Roboto fw_400 fs_md mb-0">BLOG </a></li>
                    </ul>
                </div>
            </div>
            <label for="checkbox" id="menu" onclick="opennav()" class="d-lg-none z-1">
                <span id="line"></span>
                <span id="line-1"></span>
                <span id="line-2"></span>
            </label>
        </nav>
     </div>
  )
}

export default Mynav;