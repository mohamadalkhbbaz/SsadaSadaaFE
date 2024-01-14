import React, { useState } from "react";
import "./Form.css";
import { addUser } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="send" />
        </div>
      </form>
    </div>
  );
};

export default Form;
