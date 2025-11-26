import { Routes, Route, Navigate } from 'react-router-dom'; 
import SignupScreen from './pages/credential/signup'; 
import LoginScreen from './pages/credential/login';   

export default function App() {
  return (
    <Routes>
      {}
      <Route path="/" element={<SignupScreen />} />

      {}
      <Route path="/signup" element={<SignupScreen />} />
      
      {}
      <Route path="/login" element={<LoginScreen />} />

      {}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}