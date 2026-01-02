import { Routes, Route, Navigate } from 'react-router-dom'; 
import LoginScreen from './screens/credentialScreens/loginScreen';
import SignupScreen from './screens/credentialScreens/signupScreen';
import CreateProductScreen from './screens/productScreens/createProductScreen';
import StoreScreen from './screens/storeScreens/storeScreen';
import ProductDatailsScreen from './screens/productScreens/productDatailsScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/createproduct" element={<CreateProductScreen />} />
      <Route path="/store" element={<StoreScreen />} />
      <Route path="/productdetails/:productId" element={<ProductDatailsScreen />} />
      
    </Routes>
  );
}
