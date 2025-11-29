import { Routes, Route, Navigate } from 'react-router-dom'; 
import SignupScreen from './pages/credential/signup'; 
import LoginScreen from './pages/credential/login';
import TestPage from "./pages/credential/test";
import CreateProduct from "./pages/product/createProduct";   
import ViewProducts from './pages/product/viewProducts';
import CreateCampaignPromotion from './pages/campaignPromotions/createCampaignPromotion';
import AddProductsToCampaign from './pages/campaignPromotions/addProductsToCampaignPromotion'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupScreen />} />

      <Route path="/signup" element={<SignupScreen />} />

      <Route path="/login" element={<LoginScreen />} />

      <Route path="/test" element={<TestPage />} />

      <Route path="/createproduct" element={<CreateProduct />} />

      <Route path="/viewproducts" element={<ViewProducts />} />

      <Route path="/createcampaignpromotion" element={<CreateCampaignPromotion />} />

      <Route path="/addproductstocampaign" element={<AddProductsToCampaign />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

