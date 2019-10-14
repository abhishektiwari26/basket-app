import React, { Component } from 'react';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            basketItems: [],
            removedItems: [],
            showBasketItems: false
        }
    }

    onClickHandlerOfGroceriesList = (item) => {
        let currentBasket = this.state.basketItems;
        let allItems = [];
        for(let i=0;i<currentBasket.length;i++){
            allItems.push(currentBasket[i][0]);
        }
        if(allItems.includes(item)){
            let index = allItems.indexOf(item);
            currentBasket[index][1] += 1;
        }
        else{
            let tempArr = [];
            tempArr.push(item);
            tempArr.push(1);
            currentBasket.push(tempArr);
        }
        this.setState({
            basketItems: currentBasket
        }) 
    }

    onClickHandlerOfBasketList = (item, index) => {
        let temp = this.state.removedItems;
        temp.push(index);
        this.setState({
            removedItems: temp
        })
    }

    onClickHandlerOfTrash = () => {
        this.setState({ 
            basketItems: [],
            removedItems: [],
            showBasketItems: true
        })
    }

    makeGroceriesList = (groceriesItems) => {
        let elemnts = groceriesItems.map((item, index) => {
            return (
                <li onClick={() => this.onClickHandlerOfGroceriesList(item)} key={index}><i className="fa fa-plus-square plus-icon" aria-hidden="true"></i> {item}</li> 
            )
        });
        return elemnts;
    }

    makeBasketList = (basketItems) => {
        let elemnts = basketItems.map((item, index) => {
            return (
                <li className={this.state.removedItems.includes(index) ? 'eliminate' : ''} onClick={() => this.onClickHandlerOfBasketList(item, index)} key={index}><i class="fa fa-minus-square-o minus-icon" aria-hidden="true"></i> {item[1]} {item[0]}</li>
            )
        });
        return elemnts;
    }

    render() {
        let groceriesItems = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread'];
        console.log(this.makeGroceriesList(groceriesItems));
        return (
            <div className='main-container'>
                <div className='groceries-container'>
                    <header className='groceries-header'>
                        <h3>
                            <i class='fa fa-leaf' area-hidden='true' ></i>
                             Groceries
                        </h3>
                    </header>
                    <ul className='groceries-ul'>
                        {this.makeGroceriesList(groceriesItems)}
                    </ul>
                </div>
                <div className='basket-container'>
                    <header className='basket-header'>
                        <h3>
                            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                              Basket
                        </h3>
                        <h3>
                            <i onClick={this.onClickHandlerOfTrash} className='fa fa-trash trash-icon' area-hidden='true'></i>
                        </h3>
                    </header>
                    <ul className='basket-ul'>
                        { this.makeBasketList(this.state.basketItems) }
                    </ul>
                </div>
                <div style={{clear:'both'}}></div>
            </div>
            
        )
    }
}

export default Main;
