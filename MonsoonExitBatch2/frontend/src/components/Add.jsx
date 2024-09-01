import { Box, Button, TextField } from "@mui/material";
import  { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  var [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };
  const addData = () => {
    console.log("clicked");
    if (location.state !== null) {
      axios
        .put("http://localhost:3001/edit/"+location.state.val._id,inputs)
        .then((res) => {
            alert(res.data.message)
            navigate('/')
            
        })
        .catch((err) => console.log(err));
    }else{
        axios
        .post("http://localhost:3001/add", inputs)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate('/')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        EmpName: location.state.val.EmpName,
        designation: location.state.val.designation,
        empId: location.state.val.empId,
        img_url: location.state.val.img_url,
      });
    }
  }, []);
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.EmpName}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline={4}
            />
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
           

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
