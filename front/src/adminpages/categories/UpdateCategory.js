import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField, Container } from "@mui/material";
import React from "react";
import {
  getOneCategory,
  putOneCategory,
} from "../../store/actions/categoryActions";
import { useNavigate, useParams } from "react-router-dom";
import { showSnackbar } from "../../store/actions/settingActions";
import AdminAppbar from "../../components/adminAppbar/AdminAppbar";
import CategoryService from "../../services/CategoryService";


export default function UpdateCategory() {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/auth/login");
    } 
  } , [localStorage.getItem("accessToken")]);
  const categoryDispatch = useDispatch();
  const navigate = useNavigate();

  const { snackbar } = useSelector((state) => state.setting);
  const categoryService = new CategoryService();
  const { id } = useParams();


  useEffect(() => {
    categoryService.getOneCategory(id).then((resp) => {
      setForm({
        categoryName: resp.data.categoryName,
        description: resp.data.description,
      });
    }).catch((err) => {
      console.log(err);
    }); 


  }, []);

  const [form, setForm] = useState({
    categoryName: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    categoryDispatch(putOneCategory(id, form));
    categoryDispatch(
      showSnackbar({
        message: "Category has been updated.",
        open: true,
        severity: "success",
      })
    );
    navigate("/admin/categories/list");
  };

  return (
    <>
    <AdminAppbar />
    <Container maxWidth='md'>
      <Box sx={{ m: 3 }} maxWidth={"md"}>
        <Stack spacing={3}>
          <TextField
            name='categoryName'
            label='Category Name'
            onChange={handleChange}
            value={form.categoryName}
          ></TextField>

          <TextField
            name='description'
            label='Description'
            value={form.description}
            onChange={handleChange}
          ></TextField>

          <Button onClick={handleClick} variant='contained'>
            Save
          </Button>
        </Stack>
      </Box>
      {/* <SimpleFab url="/admin/categories/list" /> */}
    </Container>
    </>
  );
}
