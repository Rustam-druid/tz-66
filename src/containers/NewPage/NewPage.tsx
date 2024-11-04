import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosAPI.ts';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import PagesForm from '../../components/PagesForm/PagesForm.tsx';
import { ApiPage } from '../../types';

const NewPage = () => {
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();

  const addNewPage = async (page: ApiPage) => {
    try{

      setLoading(true);
      await axiosApi.post('pages.json' , page);
      navigate('/');

    }catch(err){
      console.log(err);
    }finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {loading ? <Spinner /> : <PagesForm addNewPage={addNewPage} />}
    </div>
  );
};

export default NewPage;