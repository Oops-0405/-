import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Food from './pages/Food';
import FoodDetail from './pages/FoodDetail';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import TourRoutes from './pages/TourRoutes';
import RouteDetail from './pages/RouteDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Videos from './pages/Videos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="food" element={<Food />} />
          <Route path="food/:id" element={<FoodDetail />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<HotelDetail />} />
          <Route path="routes" element={<TourRoutes />} />
          <Route path="routes/:id" element={<RouteDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
