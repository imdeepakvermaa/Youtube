import React from 'react';
import Button from './Button';

const ButtonLists = () => {
  return (
    <div className='flex justify-center items-center overflow-x-auto max-w-screen-lg mx-auto'>
      <Button name="All"/>
      <Button name="mixes"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="Gaming"/>
      <Button name="Wickets"/>
      <Button name="Java"/>
      <Button name="News"/>
      <Button name="Auditions"/>
      <Button name="BGMI"/>
      <Button name="Dramedy"/>
      <Button name="Comedy"/>
      <Button name="Cars"/>
      <Button name="Recently Uploaded"/>
      <Button name="News to"/>
    </div>
  );
}

export default ButtonLists;
