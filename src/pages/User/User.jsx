import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or any other necessary cleanup
    localStorage.removeItem("authToken"); // Example
    sessionStorage.removeItem("userSession"); // Example
    navigate("/");
  };

  return (
    <div>
      <Navbar isAdmin={false} handleLogout={handleLogout} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div>
          <h1>
            Производить меньше отходов Значит, меньше покупать того, что сразу
            же летит в мусорное ведро. ... Вторичное использование упаковки и
            отслуживших вещей Найти применение чему угодно — от исписанного
            стержня до автопокрышки — всегда умудрялись отечественные мастера.
            ... Ресайклинг — переработка отходов
          </h1>
          <img src="https://s.auto.drom.ru/i24255/pubs/4483/83334/3669438.jpg"></img>
          <p>
            Отдельно видро для мусоров есть например для бакалажок, бумаги,
            стекло и тогдале
          </p>
          <img src="https://gorkom.by/sites/default/files/content/news/qw12.jpg"></img>
          <img src="https://grajdanka.ru/wp-content/uploads/2022/03/%D0%9A%D1%83%D0%B4%D0%B0-%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D1%81%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D0%BC%D1%83%D1%81%D0%BE%D1%80.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default User;
