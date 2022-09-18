import React from "react";
import { observable, action, computed } from 'mobx'
import * as Joi from 'joi'



export class VampireStore {


    baseName = []
    baseSuper = []
    @observable name = ""
    @observable superpower = ""
    @observable age = 0
    @observable nameList = []
    @observable superpowerList = []
    @observable nameDirty = false
    @observable superDirty = false
    @observable ageDirty
    @observable ageE = "Полне не может быть пустым, пожалуйста заполните поле age"
    @observable nameE = 'Поле не может быть пустым, пожалуйста заполните name'
    @observable superE = 'Полне не может быть пустыми, пожалуйста заполните superpower'
    @observable isValid = true

    @observable items = [
        {
            id: 1,
            name: 'kek',
            superpower: "lol",
            age: 50
        }, 
        {
            id: 2,
            name: "Ivan",
            superpower: "KAZAHI",
            age: 20
        }

    ];

    @action
    setName(e){
        this.name = e.target.value

        if (e.target.value.length < 1 || e.target.value.length > 10){

            this.nameDirty = true
            this.nameE = 'Недопустимая длина имени'
            if(!e.target.value){
                this.isValid = true
                this.nameE = 'Поле не может быть пустым, пожалуйста заполните поле name'
            }
        }
        else {
            this.nameE = ""
            this.isValid = false



        }

    }

    @action
    blur(e){
        switch (e.target.name){
            case "name":
                this.nameDirty = true
                break
            case "superpower":
                this.superDirty = true
                break
            case "age":
                this.ageDirty = true
                break
        }

    }




    @action
    setSuperpower(e){
        this.superpower = e.target.value
        if (e.target.value.length < 1 || e.target.value.length > 10){

            this.superDirty = true
            this.superE = 'Недопустимая длина'
            if(!e.target.value){
                this.isValid = true
                this.superE = "Поле не может быть пустым, пожалуйста заполните поле superpower"
            }

        } else {
            this.superE = ""
            this.isValid = false
        }
    }
    @action
    masN(){
        this.items.forEach((i, index) => {
            this.baseName.push(i.name)
            console.log(this.baseName)
        })
    }

    findN(name){
        return this.items.find((item) => item.name === name)
    }

    @action
    switchN(){
        this.nameDirty = false
        this.nameE = ''
    }
    @action
    switchS(){
        this.superDirty = false
        this.superE = ''
    }
    @action
    switchA(){
        this.ageDirty = false
        this.ageE = ''
    }

    @action
    setAge(e){
        this.age = e.target.value
        if (e.target.value.length < 1 || e.target.value.length > 5) {
            this.ageDirty = true
            this.isValid = true
            this.ageE = "Слишком большой возраст"
            if (!e.target.value){
                this.isValid = true
                this.ageE = "Поле не может быть пустым, пожалуйста заполните поле age"
            }
        }
        else {
            this.ageE = ""
            this.isValid = false

        }

    }

    @action
    add(e) {
        e.preventDefault()
        if (this.nameE || this.superE || this.ageE || this.findN(this.name)) {
            this.isValid = false


        } else{

            this.items = [...this.items, {
                id: Date.now(),
                name: this.name,
                superpower: this.superpower,
                age: this.age,
            }]

        }
    }


    @action 
    remover(id){
        this.items = this.items.filter(i => i.id !== id)

    }


}

export default new VampireStore();