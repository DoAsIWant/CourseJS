function getMessage() {

    let message;

    message = login =='Employee' ?  "Hi" :
      (login == 'Mr President') ? 
      'Good evening' : login == "" ? 
      "User is noy autorized" : ""
  
    return message;
  }




