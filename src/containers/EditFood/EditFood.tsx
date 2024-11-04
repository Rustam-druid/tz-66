import React, { useCallback, useEffect, useState } from 'react';
import { ApiFood } from '../../types';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosAPI.ts';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import Form from '../../components/Form/Form.tsx';

const EditFood = () => {
  const [Meal, setMeal] = useState<ApiFood>();
  const [loading, setLoading] = useState<boolean>(false);
  const {id} = useParams();

  const getOnePAgeId = useCallback(async () => {
    const response: { data: ApiFood } = await axiosApi(`Food/${id}.json`);
    if (response.data) {
      setMeal(response.data);
    }
  }, [id]);

  useEffect(() => {
    void getOnePAgeId();
  }, [getOnePAgeId]);

  const addNewPage = async (Meal: ApiFood) => {
    try {
      setLoading(true);
      await axiosApi.put(`Food/${id}.json`, Meal);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Spinner/> : <Form addNewPage={addNewPage} editMeal={Meal} isEditing={true}/>}
    </div>
  );
};

export default EditFood;