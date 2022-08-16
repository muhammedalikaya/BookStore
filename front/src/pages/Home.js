import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import BooksSlider from "../components/sliders/BooksSlider";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      {" "}
      <main className="main">
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="home__content">
                  <h1 className="home__title">Welcome to INV BookStore</h1>
                  <p className="home__text">
                    The bookstore where you can find your favorite books and
                    authors <br /> Buy, sell, and discover exclusive books.
                  </p>

                  <div className="home__btns">
                    <a onClick={() => navigate("/signup")} className="home__btn home__btn--clr">
                      Sign up
                    </a>
                    <a onClick={() => navigate("/signin")} className="home__btn">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <BooksSlider />
        </div>
      </main>
      <Footer />
    </>
  );
}
