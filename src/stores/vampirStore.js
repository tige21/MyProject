import React from "react";
import { observable, action } from 'mobx';


export class VampireStore {

    @observable name = ""
    @observable superpower = ""
    @observable age = 0
    @observable nameList = []
    @observable superpowerList = []
    @observable items = [
        {
            id: 1,
            name: 'kek',
            superpower: "lol"
        }, 
        {
            id: 2,
            name: "Ivan",
            superpower: "keklsjafkljslk;adfiljsaifjksa"
        }

    ];

    @action
    setName(name){
        this.name = name
    }


    @action
    setSuperpower(superpower){
        this.superpower = superpower
    }

    @action
    setAge(age){

    }

    @action
    add() {
        this.items = [...this.items, {
            id: Date.now(),
            name: this.name,
            superpower: this.superpower,
            age: this.age,
        }]
    }


    @action 
    remover(id){
        this.items = this.items.filter(i => i.id !== id)

    }
    
    @action complete(id){
        this.items = this.items.map(i => i.id === id ? {...i, complete: 'complete'} : i)

    }

}

export default new VampireStore();