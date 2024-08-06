import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or any other necessary cleanup
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('userSession');
    navigate('/');
  };

  return (
    <div>
      <div className="flex flex-col items-center p-4 font-sans">

        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-12">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img src='https://s.auto.drom.ru/i24255/pubs/4483/83334/3669438.jpg' alt='Recycling' className='w-full h-auto rounded-lg border-2 border-gray-300 shadow-lg' />
            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img src='https://gorkom.by/sites/default/files/content/news/qw12.jpg' alt='Bins' className='w-full h-auto rounded-lg border-2 border-gray-300 shadow-lg' />
            </div>
            <div className="md:w-1/3">
              <img src='https://grajdanka.ru/wp-content/uploads/2022/03/%D0%9A%D1%83%D0%B4%D0%B0-%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D1%81%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D0%BC%D1%83%D1%81%D0%BE%D1%80.jpg' alt='Waste Bins' className='w-full h-auto rounded-lg border-2 border-gray-300 shadow-lg' />
            </div>
          </div>
          <div className="text-center max-w-4xl mb-12 px-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Уменьшение отходов и вторичное использование
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Производить меньше отходов означает уменьшить потребление товаров, которые быстро становятся мусором. Это включает в себя использование экологичных упаковок, переработку и повторное использование материалов, а также снижение общего количества отходов.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Вторичное использование упаковки и старых вещей позволяет найти новые применения для предметов, которые иначе были бы выброшены. Это помогает снизить нагрузку на свалки и уменьшить потребление ресурсов.
            </p>
            <p className="text-lg text-gray-700">
              Ресайклинг, или переработка отходов, играет ключевую роль в охране окружающей среды, поскольку позволяет превратить использованные материалы в новые продукты, снижая необходимость в новых сырьевых ресурсах.
            </p>
          </div>
          <div className="w-full border-t-4 border-gray-300 mt-12 pt-6 text-center bg-gray-100">
            <p className="text-sm text-gray-600">
              Если у тебя есть жалобы, обращайся к нашему телеграмм-боту:
              <a href="https://t.me/your_bot_username" className="text-teal-600 font-semibold underline" target="_blank" rel="noopener noreferrer">
                @your_bot_username
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
