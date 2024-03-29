import React, { useRef } from "react";
import Navigation from "../Navigation/Navigation";
import axios from "axios";

const ContactUs = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNo: numberRef.current.value,
    };
    nameRef.current.value =
      emailRef.current.value =
      numberRef.current.value =
        "";

    // const response = await axios.post('https://ecommerce-anime-posters-default-rtdb.firebaseio.com/contact.json', obj);
    // console.log(response);
    const response = await axios.post(
      "https://getform.io/f/a625449a-3086-4cf1-bbd2-d1580182a43b",
      obj
    );
    console.log(response.data);
  };
  return (
    <div>
      <Navigation />
      <div className="mt-[68px] flex flex-col items-center ">
        <div className=" text-6xl my-4">CONTACT US</div>
        <div className="flex  border border-black box-border p-6">
          <div>
            <form
              className=" min-h-[400px] flex flex-col justify-evenly md:min-h-[500px] md:min-w-[400px]"
              action=""
              onSubmit={formSubmitHandler}>
              <div className="flex flex-col  py-3 ">
                <label>Name</label>
                <input
                  ref={nameRef}
                  className="text-center border-b-4 p-2 border-gray-400"
                  type="text"></input>
              </div>
              <div className="flex flex-col py-3">
                <label>Email Id</label>
                <input
                  ref={emailRef}
                  className="text-center border-b-4 p-2 border-gray-400"
                  type="email"></input>
              </div>
              <div className="flex flex-col py-3">
                <label>Phone No</label>
                <input
                  ref={numberRef}
                  className=" text-center border-b-4 p-2 border-gray-400"
                  type="number"></input>
              </div>
              <div className="bg-black rounded-[500px] text-white text-2xl p-2 text-center">
                <button>Contact us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center mt-3 text-2xl p-3 ">
        <div className="p-3">
          <h1>Contact</h1>
          <p className="font-thin">221vijaychandel@gmail.com</p>
        </div>
        <div className="p-3">
          <h1>Based in</h1>
          <p className="font-thin">Himachal Pradesh,</p>
          <p className="font-thin">India</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
