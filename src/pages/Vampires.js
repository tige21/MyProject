import React from "react";
import { inject, observer } from "mobx-react";
import neeet from "stores/vampirStore";
import "./Vampires.css"
import vampirStore from "stores/vampirStore";
// @inject ("vampirStore")
@observer
export class Vamires extends React.Component{
    render(){
        return(
            <div className="vp">

            <div className="containerV">
                <div>
                    <h1>Vampires</h1>
                </div>
                <div className="form_wrap">
                    <form className="form_add">
                        <input className="input" onChange={(e) => neeet.setName(e.target.value)} placeholder="Name" required="required"></input>
                        <input className="input" onChange={(e) => neeet.setSuperpower(e.target.value)} placeholder="SuperPower" required="required"></input>
                        <input className="input" onChange={(e) => neeet.setAge(e.target.value)} placeholder="Age" required="required" type="int"></input>
                        <button className="btn_add" onClick={() => neeet.add()}>ADD</button>
                    </form>
                </div>




                <div className="vampires">
                    <div className="table">
                        <h3>Name</h3><div className="vl"></div><h3>Super power</h3><div className="vl"></div><h3>Age</h3>

                    </div>
                    <hr/>

                    {neeet.items.map(i => {
                        return(
                            <div className="item" key={i.id}>
                                <div>{i.name}</div><div>{i.superpower}</div><div>{i.age}</div>

                            </div>


                        );


                    })}

                </div>
            </div>
            </div>


        


    );



    }


}

export default Vamires;

