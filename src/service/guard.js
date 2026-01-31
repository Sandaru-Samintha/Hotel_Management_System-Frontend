import React from 'react';
import { Navigate,useLocation } from "react-router-dom";
import ApiService from './ApiService';


//If the user is logged in, it allows access to the page
//If the user is NOT logged in, it redirects them to the login page

export const ProtectedRoute =({element:Component})=>{
                                      
                                    // useLocation() gets the current URL location  // This helps us remember where the user was trying to go
  const location = useLocation();
                                      /*
                                        ApiService.isAdmin():
                                        - returns true if user is logged in
                                        - returns false if user is NOT logged in
                                      */
  return ApiService.isAuthenticated()?(
                                    // If user IS Admin:  // allow access to the requested component/page
    Component
  ):(
                                    // If user is NOT Admin:  // redirect them to the login page  // "replace" prevents back button returning to protected page // "state" saves the previous location for redirect after login
    <Navigate to="/login" replace state={{from:location}}/>
  );
}




export const AdminRoute =({element:Component})=>{

                                      
                                    // useLocation() gets the current URL location  // This helps us remember where the user was trying to go
  const location = useLocation();
                                      /*
                                        ApiService.isAdmin():
                                        - returns true if user is logged in
                                        - returns false if user is NOT logged in
                                      */
  return ApiService.isAdmin()?(
                                    // If user IS Admin:  // allow access to the requested component/page
    Component
  ):(
                                    // If user is NOT Admin:  // redirect them to the login page  // "replace" prevents back button returning to protected page // "state" saves the previous location for redirect after login
    <Navigate to="/login" replace state={{from:location}}/>
  );
}


