import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.js'
import ApiService from '../../service/ApiService'

const  RoomSearch =({handleSearchResult})=> {

  const [startDate,setStartDate]= useState(null);
  const [endDate,setEndDate]= useState(null);
  const [roomType,setRoomType]= useState('');
  const [roomTypes,setRoomTypes]= useState([]);
  const [error,setError]= useState('');

  useEffect(()=>{

    const fetchRoomTypes = async ()=>{
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (error) {
        console.log(error.message);
        
      }
    }
  },[])
  

  const showError = (message,ti)

}

export default RoomSearch