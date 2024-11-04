import FoodItemContent from './FoodItemContent.tsx';
import * as React from 'react';
import { IFoodApp} from '../../types';

interface Props {
  foodContent: IFoodApp[];
  deletePage:(id:string) => void;
}

const FoodContent: React.FC<Props> = ({ foodContent , deletePage}) => {
  return (
    <>
      {foodContent.map((f) => (
        <FoodItemContent key={f.id} food={f} onDeletePage  ={() => deletePage(f.id)}   />
      ))}
    </>
  );
};

export default FoodContent;
