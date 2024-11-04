import { IFoodApp } from '../../types';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  food: IFoodApp;
  onDeletePage:React.MouseEventHandler<HTMLButtonElement>;
}

const FoodItemContent: React.FC<Props> = ({ food, onDeletePage}) => {

  return (
    <div className="row  border border-dark mb-3 border-3 p-2 bg-light">

          <div className="col">
            <span className="card-title text-secondary">{food.category}</span>
            <h4 className="card-text">{food.description}</h4>

          </div>

          <div className='row col-6 align-items-center'>
            <p className="card-text col-6">{food.calories} kcal</p>
            <div
              className='row col-6 gap-3'>
              <NavLink className='btn btn-info' to={`/editDish/${food.id}`}>E</NavLink>
              <button className='btn btn-danger' onClick={() => onDeletePage(food.id)}>d</button>
            </div>
          </div>

    </div>

  );
};

export default FoodItemContent;