import React, { useState, useEffect } from "react";
import { useAuth } from "../context/userContext";


// student : name , email , password , branch , registrationNo
// admin(Warden) : name , email , password , HostelID , HostelName

const Profile = () => {

  const [auth, setAuth] = useAuth();
  // const [newPhoto, setNewPhoto] = useState(null);

  const name = auth.user.name;
  const email = auth.user.email;

 
  // useEffect(() => {
  //   const storedPhoto = localStorage.getItem("userPhoto");
  //   if (storedPhoto) {
  //     setAuth({
  //       ...auth,
  //       user: {
  //         ...auth.user,
  //         photo: storedPhoto,
  //       },
  //     });
  //   }
  // }, [setAuth, auth]);

  
  // const handlePhotoChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     setNewPhoto(reader.result);
  //   };

  //   if (selectedFile) {
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  
  // const saveNewPhoto = () => {
  //   if (newPhoto) {
  //     setAuth({
  //       ...auth,
  //       user: {
  //         ...auth.user,
  //         photo: newPhoto, 
  //       },
  //     });
      
  //     localStorage.setItem("userPhoto", newPhoto);
  //     setNewPhoto(null);
  //   }
  // };

  if (!auth.user) {
    return (
      <>
        <h1>You Do not have access to this page. Please Login!</h1>
      </>
    );
  }
  

  return (
    <>
      <h1>Profile {auth.user.role} </h1>
      {/* <div>
        <img src={newPhoto || auth.user.photo} alt="Profile" />
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        <button onClick={saveNewPhoto}>Save Photo</button>
      </div> */}
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        
        {auth.user.role === 2 && (
          <>
            <p>Branch: {auth.user.branch}</p>
            <p>Registration No: {auth.user.registrationNo}</p>
          </>
        )}
        {auth.user.role === 1 && (
          <>
            <p>Hostel ID: {auth.user.HostelID}</p>
            <p>Hostel Name: {auth.user.HostelName}</p>
          </>
        )}
        {auth.user.role === 3 && (
          <>
            <p>Hostel ID: {auth.user.HostelID}</p>
            <p>Hostel Name: {auth.user.HostelName}</p>
          </>
        )}
        {auth.user.role === 4 && (
          <>
            <p>Branch: {auth.user.branch}</p>
            <p>Registration No: {auth.user.registrationNo}</p>
          </>
        )}
        
      </div>
    </>
  );
};

export default Profile;
