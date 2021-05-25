import React from 'react'
import {astro} from '../const/astro'
import "../css/agent-profile.css"
class Astro extends React.Component{
    constructor(props){
       super(props)
       this.state={
           data:astro
       }
    }
   componentDidMount(){
     let myEvent=new CustomEvent("jqeryExecution",{
         detail:{type:"swipe"}
     })
     document.dispatchEvent(myEvent);
   }
    render(){
        return (
            <div class="demo">
            <div class="demo__content">
              <div class="demo__card-cont">
                  {
                      this.state.data.map((d,i)=>{
                          return (
                            <div key={i} class="demo__card">
                            <div class="demo__card__top " style={{"background-image": "url('/assets/img/astro4.jfif')","background-size": "cover","position":"relative"}}>
                              <div class="demo__card__img">
                                 <img src="/assets/img/profile1.jpg" style={{"height":"100%","width":"100%","objectFit": "cover"}}/>
                              </div>
                              <div class="phonering-alo-ph-img-circle"></div>
                              <p class="demo__card__name">{d.name}</p>
                              <div className="d-f j-c-c">
                              <div class="star-rating">
                                <input type="radio" id="5-stars" name="rating" value="5" />
                                <label for="5-stars" class="star">&#9733;</label>
                                <input type="radio" id="4-stars" name="rating" checked value="4" />
                                <label for="4-stars" class="star">&#9733;</label>
                                <input type="radio" id="3-stars" name="rating" value="3" />
                                <label for="3-stars" class="star">&#9733;</label>
                                <input type="radio" id="2-stars" name="rating" value="2" />
                                <label for="2-stars" class="star">&#9733;</label>
                                <input type="radio" id="1-star" name="rating" value="1" />
                                <label for="1-star" class="star">&#9733;</label>
                              </div>
                              </div>
                            </div>
                            <div class="demo__card__btm">
                              <div class="d-f j-c-sb f-s-24" style={{"padding":"1rem"}}>
                                  <div><div class="t-a-c f-w-b">Calls</div><div class="t-a-c f-s-20" style={{"marginTop": "2px"}}>2K</div></div>
                                  <div><div class="t-a-c f-w-b">Exprince</div><div class="t-a-c f-s-20" style={{"marginTop": "2px"}}>12 Y</div></div>
                                  <div><div class="t-a-c f-w-b">Money</div><div class="t-a-c f-s-20" style={{"marginTop": "2px"}}>₹12/m</div></div>
                              </div>
                              <div class="f-s-22" style={{"padding":"1rem"}}>
                                    <table class="agent-detail"> 
                                           <tbody>
                                               <tr>
                                                 <td  class="f-s-22 f-w-b d-f j-c-sb"><span>Status</span><span>:</span></td>
                                                  <td class="f-s-20 f-f-cursive" style={{"padding-left": "1rem;"}}>&nbsp;In Call</td>
                                               </tr>
                                               <tr>
                                                <td  class="f-s-22 f-w-b d-f j-c-sb"><span>Avalible Time</span><span>:</span></td>
                                                 <td class="f-s-20 f-f-cursive" style={{"padding-left": "1rem;"}}>10 AM to 12 PM</td>
                                              </tr>
                                               <tr>
                                                <td  class="f-s-22 f-w-b d-f j-c-sb"><span>Language</span><span>:</span></td>
                                                 <td class="f-s-20 f-f-cursive" style={{"padding-left": "1rem;"}}>Hindi,English,Bhajopuri</td>
                                              </tr>
                                              <tr>
                                                <td  class="f-s-22 f-w-b d-f j-c-sb"><span>Qualification</span><span>:</span></td>
                                                 <td class="f-s-20 f-f-cursive" style={{"padding-left": "1rem;"}}>MD in hindu</td>
                                              </tr>
                                              <tr>
                                                <td  class="f-s-22 f-w-b d-f j-c-sb"><span>Expertise</span><span>:</span></td>
                                                 <td class="f-s-20 f-f-cursive" style={{"padding-left": "1rem;"}}>Love Expert</td>
                                              </tr>
                                           </tbody>
                                    </table>
                              </div>
                              <div style={{"padding": "1rem"}}>
                                    <div class="f-s-28 f-w-b" >About Us&nbsp;&nbsp;  :-</div>
                                    <p  class="f-s-24 overflow-text-3 f-f-cursive"  style={{"margin-top":"0.5rem"}}>I have 12 years of expreiance about the real hindi sanskirit I have 12 years of expreiance about the real hindi sanskirit</p>
                              </div>
                            </div>
                            <div class="demo__card__choice m--reject"></div>
                            <div class="demo__card__choice m--like"></div>
                            <div class="demo__card__drag"></div>
                            <div class="f-s-24 t-a-c" style={{"background":"#00aff2","padding": "1rem 0rem","color": "white","margin":"2rem 3rem","border-radius": "0.25rem","position": "absolute","left": "0","bottom": "-0.5rem","right": "0","z-index": "6"}} onclick="alert(1)">Call Now</div>
                          </div>
                          )
                      })
                  }

              </div>
            </div>
          </div>
        )
    }
}

export default Astro;