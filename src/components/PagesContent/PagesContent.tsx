import PagesItemContent from './PagesItemContent.tsx';
import * as React from 'react';
import { IPagesApp } from '../../types';

interface Props {
  pages: IPagesApp[];
  deletePage:(id:string) => void;
}

const PagesContent: React.FC<Props> = ({ pages , deletePage}) => {
  return (
    <>
      {pages.map((page) => (
        <PagesItemContent key={page.id} page={page} onDeletePage  ={() => deletePage(page.id)}   />
      ))}
    </>
  );
};

export default PagesContent;
