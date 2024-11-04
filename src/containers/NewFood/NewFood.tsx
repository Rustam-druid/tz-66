import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosAPI.ts';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import Form from '../../components/Form/Form.tsx';
import { ApiFood } from '../../types';

const NewFood = () => {
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();

  const addNewPage = async (page: ApiFood) => {
    try{

      setLoading(true);
      await axiosApi.post('Food.json' , page);
      navigate('/');

    }catch(err){
      console.log(err);
    }finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {loading ? <Spinner /> : <Form addNewPage={addNewPage} />}
    </div>
  );
};

export default NewFood;