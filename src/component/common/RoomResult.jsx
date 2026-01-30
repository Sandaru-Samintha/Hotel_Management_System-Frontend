import React from 'react'
import ApiService from "../../service/ApiService"
import { useNavigate } from 'react-router-dom';

const RoomResult = ({roomSearchResults})=>{
  const navigate = useNavigate(); // Initialize useNavigate hook
  const isAdmin = ApiService.isAdmin();
  return (
    <section className="room-result">
      {roomSearchResults && roomSearchResults.length > 0 && (
        <div className="room-list">
          {roomSearchResults.map(room =>(
            <div key={room.id} className="room-list-item">
              <img src={room.roomPhotoUrl} alt={room.roomType} className="room-list-item-image" />
              <div className="room-details">
                <h3>{room.roomType}</h3>
                <p>Price:LKR.{room.roomPrice} / night </p>
                <p>Description: {room.roomDescription}</p>
              </div>

              <div className="book-now-div">
                {isAdmin? (
                  <button className="edit-room-button" onClick={()=>navigate(`/admin/edit-room/${room.id}`)} //Navigate to edit room with room ID
                  >
                    Edit Room
                  </button>
                ):(
                  <button className="book-now-button" onClick={()=>navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
                  >
                    View/Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default RoomResult