import React from "react";
import { inject, observer } from "mobx-react";
import neeet from "stores/vampirStore";
import Table from '../components/Table'
import "./Vampires.css"
import vampirStore from "stores/vampirStore";
@inject ("vampirStore")
@observer
export class Vamires extends React.Component{

    render(){
        return(
            <div className="vp">

            <div className="containerV">
                <div>
                    <h1>Vampires</h1>
                </div>
                <hr/>
                <div className="form_wrap">
                    <form className="form_add">
                        <input value={neeet.name} onFocus={() => neeet.switchN()} onBlur={e => neeet.blur(e)} style={{ border: (neeet.nameDirty && neeet.nameE) && '1px solid red' }} className="input" name="name" type="text" onChange={(e) => neeet.setName(e)} placeholder="Name" required="required"></input>

                        {(neeet.nameDirty && neeet.nameE) && <div style={{color: "red"}}>{neeet.nameE}</div>}

                        <input onFocus={() => neeet.switchS()} onBlur={e => neeet.blur(e)} style={{border: (neeet.superDirty && neeet.superE) && '1px solid red' }} className="input" name="superpower" type="text" onChange={(e) => neeet.setSuperpower(e)} placeholder="SuperPower" ></input>

                        {/*вывод ошибки*/}
                        {(neeet.superDirty && neeet.superE) && <div style={{color: "red"}}>{neeet.superE}</div>}

                        <input className="input" type="number" onFocus={() => neeet.switchA()} onBlur={e => neeet.blur(e)} style={{ border: (neeet.ageDirty && neeet.ageE) && '1px solid red' ,}} onChange={(e) => neeet.setAge(e)} placeholder="Age"></input>

                        {(neeet.ageDirty && neeet.ageE) && <div style={{color: "red"}}>{neeet.ageE}</div>}

                        <button disabled={neeet.isValid} className="btn_add" onClick={(e) => neeet.add(e)}>ADD</button>
                    </form>
                </div>

                <hr/>


                <div className="vampires">
                    <Table data={neeet.items}/>

                </div>
            </div>
            </div>


        


    );



    }


}

export default Vamires;

