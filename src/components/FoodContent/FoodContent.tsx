import FoodItemContent from './FoodItemContent.tsx';
import * as React from 'react';
import { IFoodApp} from '../../types';

interface Props {
  foodContent: IFoodApp[];
  deleteMeal:(id:string) => void;
}

const FoodContent: React.FC<Props> = ({ foodContent , deleteMeal}) => {
  return (
    <>
      {foodContent.map((f) => (
        <FoodItemContent key={f.id} food={f} onDeleteFood  ={() => deleteMeal(f.id)}   />
      ))}
    </>
  );
};

export default FoodContent;
