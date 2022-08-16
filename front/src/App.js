import { Route, Routes, Link } from "react-router-dom";
import ListAuthor from "./adminpages/authors/ListAuthor";
import ListBook from "./adminpages/books/ListBook";
import ListCategory from "./adminpages/categories/ListCategory";
import AppContext from "./context/AppContext";
import { useContext, useEffect } from "react";
import AdminAppbar from "./components/adminAppbar/AdminAppbar";
import AddAuthor from "./adminpages/authors/AddAuthor";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Button, createTheme } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import AddCategory from "./adminpages/categories/AddCategory";
import SimpleSnackbar from "./components/snackBar/SimpleSnackbar";
import UserSignIn from "./pages/UserSignIn";
import { useSelector } from "react-redux";
import UpdateCategory from "./adminpages/categories/UpdateCategory";
import AddBook from "./adminpages/books/AddBook";
import CategoryList from "./adminpages/categories/ListCategory";
import Login from "./pages/login/Login";
import BookList from "./pages/book/BookList";
import Authors from "./pages/Authors";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const { authors, setAuthors, isLoading, setIsLoading } =
    useContext(AppContext);
  const { snackbar } = useSelector((state) => state.setting);
  const navigate = useNavigate();

  //Login check according to access tokan
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (!token) {
  //     navigate("/auth/login");
  //   } 
  // } , [localStorage.getItem("accessToken")]);
  //End of login check


  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/books" element={<BookList />} />

        <Route
          path="/admin/books/list"
          element={
            
              <ListBook />
            
          }
        />
        <Route
          path="/admin/books/add"
          element={
            
              <AddBook />
            
          }
        />
        <Route
          path="/admin/categories/list"
          element={
            
              <CategoryList />
            
          }
        />
        <Route
          path="/admin/categories/add"
          element={
            
              <AddCategory />
            
          }
        />
        <Route
          path="/admin/categories/update/:id"
          element={
            
              <UpdateCategory />
            
          }
        />

        <Route
          path="/admin/authors/list"
          element={
            
              <ListAuthor />
            
          }
        />
        <Route
          path="/admin/authors/add"
          element={
            
              <AddAuthor />
            
          }
        />

        <Route path="/auth/login" element={<Login />} />
      </Routes>

      <SimpleSnackbar snackbar={snackbar} />
    </div>
  );
}

export default App;
