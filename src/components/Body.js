
import { Outlet } from 'react-router-dom';
import LeftContainerPart from './LeftContainerPart';

const Body = () => {
  return (
    <div className='bg-black flex'>
      <LeftContainerPart/>
      <Outlet/>
    </div>
  )
}

export default Body;
