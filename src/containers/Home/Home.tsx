import React, { useCallback, useEffect, useState } from 'react';
import { ApiFoodCategory, IFoodApp } from '../../types';
import FoodContent from '../../components/FoodContent/FoodContent.tsx';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import axiosApi from '../../axiosAPI.ts';
import { useParams } from 'react-router-dom';
import TotalPrice from '../TotalPrice/TotalPrice.tsx';

interface Props {
  total: () => number;
}

const Home:React.FC<Props>= ({total}) => {
  const {categoryId} = useParams();
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState<IFoodApp[]>([]);

  const fetchData = useCallback(async () => {
    try{
      setLoading(true);
      const response = await axiosApi(
        !categoryId ? 'Food.json' : `/Food.json?orderBy="category"&equalTo="${categoryId}"`);

      const FoodObj: ApiFoodCategory = response.data;

      if (FoodObj === null){
        setFood([]);
      }

      if (FoodObj) {
        const Meal = Object.keys(FoodObj).map(FoodId => {
          return {
            id: FoodId,
            ...FoodObj[FoodId],
          };
        });
        setFood(Meal);
      }
    }catch(error){
      console.log(error);
    }finally {
      setLoading(false);
    }

  },[categoryId]);


  const deleteMeal = useCallback(async (id:string) => {
    try {
      await axiosApi.delete(`Food/${id}.json`);
      await  fetchData();
    }catch (e) {
      console.error(e);
    }
  }, [categoryId]);

  useEffect(() => {
    void fetchData();
  }, [fetchData, categoryId ] );

  return (
    <>
      {loading ? <Spinner/> :
        <div className='row justify-content-between m-2'>

          <div className='row'>

            <div className="col-8">
              <h2>Total: {total()}  </h2>
              <div>
                {food.length === 0 ? <p>no pages</p> : <>
                  <FoodContent foodContent={food} deleteMeal={deleteMeal}/>
                </>
                }
              </div>
            </div>
          </div>

        </div>
      }

    </>
  );
};

export default Home;