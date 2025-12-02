import { Routes, Route, Navigate } from 'react-router-dom'; 
import SignupScreen from './pages/userPages/signupPage'; 
import LoginScreen from './pages/userPages/loginPage';
import InitialPage from './pages/userPages/initialPage';
import StoreProfilePage from './pages/salesmanPages/storeProfilePage';
import CreatePromotionPage from './pages/salesmanPages/createPromotionPage';
import ProductDetailsPage from './pages/userPages/productDetailsPage';
import CartPage from './pages/userPages/cartPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupScreen />} />

      <Route path="/signup" element={<SignupScreen />} />

      <Route path="/login" element={<LoginScreen />} />

      <Route path="/initialpage" element={<InitialPage />} />

      <Route path="/storeprofilepage" element={<StoreProfilePage />} />

      <Route path='/createpromotionpage' element={<CreatePromotionPage />} />

      <Route path='/productdetailspage/:name' element={<ProductDetailsPage />} />

      <Route path='/cartpage' element={<CartPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
