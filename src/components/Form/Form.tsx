import React, { useEffect, useState } from 'react';
import { IFoodAppMutation } from '../../types';

interface Props {
  addNewPage: (newPage: IFoodAppMutation) => void;
  editMeal?: IFoodAppMutation;
  isEditing?:boolean;
}

const initionState = {
  description:'',
  category:'',
  calories: 0,
};

const Form: React.FC<Props> = ({addNewPage, editMeal=initionState , isEditing=false}) => {
  const [newFood,setNewFood] = useState<IFoodAppMutation>(editMeal);

  const changePageContent = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewFood(prevState => ({
      ...prevState,
      [e.target.name]: e.target.name === 'calories' ? parseFloat(e.target.value) : e.target.value,
    }));
  };

const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (newFood.description.trim().length === 0 || newFood.category.trim().length === 0) {
    alert('Заполните поля');
  }else {
    addNewPage({
      description: newFood.description,
      category: newFood.category,
      calories: newFood.calories,
    });
    if (!isEditing){
      setNewFood({
        description:'',
        category:'',
        calories: 0,
      });
    };
  }
};
  useEffect(() => {
    setNewFood(editMeal);
  }, [editMeal]);

  return (
    <form onSubmit={onSubmit} className='p-3'>
      <h3>add</h3>

      <div className="form-group mb-2">
        <label htmlFor='category'>Category
        <select onChange={changePageContent} name='category' value={newFood.category}>
          <option value='-'  disabled>Select the category</option>
          <option value='Breakfast' >Breakfast</option>
          <option value='Snack' >Snack</option>
          <option value='Lunch' >Lunch</option>
          <option  value='Dinner' >Dinner</option>

        </select>

        </label>

      </div>

      <div className="form-group mb-2">
        <label htmlFor='title'>Food:</label>
        <input
          type="text"
          onChange={changePageContent}
          value={newFood.description}
          id="description"
          name="description"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor='Content'>Content:</label>
        <input
          type="number"
          onChange={changePageContent}
          value={newFood.calories}
          id="calories"
          name="calories"
          className="form-control"
        />
      </div>

      <button type='submit' className='btn btn-primary'>add</button>

    </form>
  );
};

export default Form;