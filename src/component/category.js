import React from 'react'
import {category} from '../const/category'

import '../css/style.css'
class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:category
        }
    }
    render(){
        return (
          <div>
                <div className="t-a-c f-s-24" style={{color: "#fff","font-weight": "600","margin": "1rem"}}>ASTRO <i class="fas fa-praying-hands"></i></div>
                <div class="row">
                    {
                      this.state.data.map((d)=>{
                          return (
                            <div class="col s6">
                            <div class="card card-bg" style={{"height": "160px"}}>
                                <div className="d-f j-c-c f-d-c" style={{"height": "100%"}}>
                                        <div className="t-a-c" >{d.icon}</div>
                                        <div className="t-a-c f-s-20" style={{"margin-top": "1rem","color": "#fff","font-weight": "600","letter-spacing": "2px"}}>{d.title}</div>
                                </div>
                            </div>
                            </div>
                          )
                      })  

                    }
                    </div>
          </div>
        )
    }
}

export default Category;
