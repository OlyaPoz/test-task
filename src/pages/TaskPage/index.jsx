import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from '../../components/Body';
import style from './TaskPage.module.scss';

const TaskPage = (props) => {
  return (
    <div className={style.pageWrapper}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default TaskPage;