import { Component } from "react";

export class MyList extends Component {
    constructor () {
        super ();
        this.state = {
            userInput: '',
            userList: []
        }
    }

    onFormSubmit (e) {
        e.preventDefault ();
    }

    onChangeEvent (e) {
        this.setState ( {userInput: e} )
    }

    addItem (e) {
        if (e === '') { alert ('Пожалуйста, заполните поле') }
        else {
            let listArray = this.state.userList;
            this.setState ({
                userList: listArray,
                userInput: ''
            })
            listArray.push (e);
            console.log (listArray)
        }
    }

    crossedItem (e) {
        const item = e.target;
        item.classList.toggle ('crossed')
    }

    delItem () {
        let listArray = this.state.userList;
        listArray = [];
        this.setState ({ userList: listArray })
    }

    render () {
        return (
            <div className='formBox'>
                <img src='https://images.unsplash.com/photo-1556711905-b3f402e1ff80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' width={ "300px" }></img>
                <form className='formContainer' onSubmit = { this.onFormSubmit }>
                    <input type = 'text' placeholder = "В моём списке дел на сегодня..." className='inputClass'
                    onChange = { (e) => { this.onChangeEvent (e.target.value) } }/>

                    <button className='addBtn' onClick = { () => { this.addItem (this.state.userInput) } }>Добавить</button>

                    <ul className='listBox'>
                        { this.state.userList.map ((item, index) => (
                            <li className='listItem' onClick={ this.crossedItem } key={ index }>{ item }</li>
                        ))}
                    </ul>

                    <button className='addBtn' onClick = { () => { this.delItem () } }>Очистить список</button>

                </form>
            </div>
        )
    }
}
