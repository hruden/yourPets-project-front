import SharedLayout from 'components/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { GlobalStyle } from './GlobalStyle.styled';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserPage from 'pages/UserPage/UserPage';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/notices" element={<Navigate to={'/notices/sell'} />} />
          <Route path="/notices/:categories" element={<NoticesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
};
