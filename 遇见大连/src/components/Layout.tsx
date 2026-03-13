import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Utensils, Hotel, Map, Info, Phone, Video, User, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const navItems = [
  { 
    path: '/destinations', 
    label: '景点', 
    icon: MapPin,
    children: [
      { path: '/destinations', label: '全部景点' },
      { path: '/destinations?type=beach', label: '浪漫海滩' },
      { path: '/destinations?type=park', label: '主题公园' },
      { path: '/destinations?type=square', label: '城市广场' },
      { path: '/destinations?type=museum', label: '文化场馆' },
    ]
  },
  { path: '/food', label: '美食', icon: Utensils },
  { 
    path: '/hotels', 
    label: '住宿', 
    icon: Hotel,
    children: [
      { path: '/hotels', label: '全部酒店' },
      { path: '/hotels?type=luxury', label: '奢华五星' },
      { path: '/hotels?type=comfort', label: '高端舒适' },
      { path: '/hotels?type=economic', label: '经济优选' },
    ]
  },
  { 
    path: '/routes', 
    label: '路线', 
    icon: Map,
    children: [
      { path: '/routes', label: '全部路线' },
      { path: '/routes#coastline-scenic', label: '海岸线路线' },
      { path: '/routes#indoor-culture', label: '文化室内线' },
      { path: '/routes#foodie-paradise', label: '美食之旅' },
    ]
  },
  { path: '/videos', label: '视频', icon: Video },
  { path: '/about', label: '关于', icon: Info },
  { path: '/contact', label: '联系', icon: Phone },
];

export default function Layout() {
  const location = useLocation();
  const { user } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                浪漫之都 · 时尚大连
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div 
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.path)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors py-2 ${
                        isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                      {hasChildren && <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.path ? 'rotate-180' : ''}`} />}
                    </Link>

                    {hasChildren && activeDropdown === item.path && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="absolute left-0 mt-0 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50 origin-top"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center space-x-4">
              {!user ? (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-blue-600 flex items-center space-x-1">
                    <LogIn className="h-5 w-5" />
                    <span className="hidden sm:inline text-sm font-medium">登录</span>
                  </Link>
                  <Link 
                    to="/register" 
                    className="hidden sm:flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>注册</span>
                  </Link>
                </>
              ) : (
                <Link to="/profile" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                    <img 
                      src={`https://picsum.photos/seed/${user.username}/50/50`} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{user.username}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" />
              大连旅游网
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              探索浪漫之都大连，感受海滨城市的独特魅力。提供最全面的大连旅游攻略、景点介绍、美食推荐和住宿指南。
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="hover:text-white transition-colors">热门景点</Link></li>
              <li><Link to="/food" className="hover:text-white transition-colors">特色美食</Link></li>
              <li><Link to="/routes" className="hover:text-white transition-colors">推荐路线</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>电话: 400-123-4567</li>
              <li>邮箱: info@daliantravel.com</li>
              <li>地址: 辽宁省大连市中山区</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} 大连旅游网. 保留所有权利.
        </div>
      </footer>
    </div>
  );
}
