import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './component/common/Navbar';
import FooterComponent from './component/common/Footer';
import HomePage from './component/home/HomePage';
import AllRoomsPage from './component/booking_rooms/AllRoomPage';
import FindBookingPage from './component/booking_rooms/FindBookingPage';
import RoomDetailsPage from './component/booking_rooms/RoomDetailsPage';
import LoginPage from './component/auth/LoginPage';
import RegisterPage from './component/auth/RegisterPage';
import ProfilePage from './component/profile/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
          <Route exact path='/home' element={<HomePage/>} />
          <Route exact path='/rooms' element={<AllRoomsPage/>} />
          <Route exact path='/find-booking' element={<FindBookingPage/>} />
          <Route exact path='/room-details-book/:roomId' element={<RoomDetailsPage/>} />
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<RegisterPage/>} />
          <Route exact path='/profile' element={<ProfilePage/>} />
          
          </Routes>
        </div>

        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
