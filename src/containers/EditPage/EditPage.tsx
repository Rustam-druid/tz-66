import React, { useCallback, useEffect, useState } from 'react';
import { ApiPage } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosAPI.ts';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import PagesForm from '../../components/PagesForm/PagesForm.tsx';

const EditPage = () => {
  const [page, setPage] = useState<ApiPage>();
  const [loading, setLoading] = useState<boolean>(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const getOnePAgeId = useCallback(async () => {
    const response: { data: ApiPage } = await axiosApi(`pages/${id}.json`);
    if (response.data) {
      setPage(response.data);
    }
  }, [id]);

  useEffect(() => {
    void getOnePAgeId();
  }, [getOnePAgeId]);

  const addNewPage = async (page: ApiPage) => {
    try {
      setLoading(true);
      await axiosApi.put(`pages/${id}.json`, page);
      navigate('/');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Spinner/> : <PagesForm addNewPage={addNewPage} editPage={page} isEditing={true}/>}
    </div>
  );
};

export default EditPage;