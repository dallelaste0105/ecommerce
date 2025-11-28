import { Routes, Route, Navigate } from 'react-router-dom'; 
import SignupScreen from './pages/user/signup'; 
import LoginScreen from './pages/user/login';
import TestPage from "./pages/user/test";
import CreateProduct from "./pages/salesman/createProduct";   

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupScreen />} />

      <Route path="/signup" element={<SignupScreen />} />

      <Route path="/login" element={<LoginScreen />} />

      <Route path="/test" element={<TestPage />} />

      <Route path="/createproduct" element={<CreateProduct />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}