import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axiosAPI from './axiosAPI.ts';
import ToolBar from './components/ToolBar/ToolBar.tsx';
import Home from './containers/Home/Home.tsx';
import NewPage from './containers/NewPage/NewPage.tsx';
import EditPage from './containers/EditPage/EditPage.tsx';

const App = () => {
  const [food, setFood] = useState([]);


  const fetchPages = useCallback (async () => {
    try {
      const responsePages = await axiosAPI('pages.json');

      if (responsePages.data === null) {
        setFood([]);
        return;
      };

      const addNewKeyInObj = Object.keys(responsePages.data).map(Newkey => {
        return {
          ...responsePages.data[Newkey],
          id: Newkey
        };
      });
      setFood(addNewKeyInObj);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {

    void fetchPages();

  }, [fetchPages ]);


  return (
    <>
      <div className="container p-0 w-50 border border-3 border-black bg-secondary-subtle">
        <div style={{backgroundColor: '#ccc', height: 60, borderBottom: '3px solid black'}}></div>
        <header><ToolBar/></header>
        <main>
          {food
            ? <div className="row">
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pages/:categoryId' element={<Home/>}/>
                <Route path='/editDish/:id' element={<EditPage/>}/>
                <Route path='/newpage' element={<NewPage/>}/>
              </Routes>
            </div>
           : null
          }

        </main>


        <div style={{backgroundColor: '#ccc', height: 30, borderTop: '3px solid black'}}></div>
      </div>

    </>
  );
};

export default App;