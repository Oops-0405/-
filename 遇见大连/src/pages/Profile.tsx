import { motion } from 'framer-motion';
import { User, Settings, Heart, Map, LogOut, Camera, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="py-24 bg-slate-50 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-12 shadow-xl border border-slate-100 text-center"
        >
          <div className="mx-auto h-20 w-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-8">
            <User className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">未登录</h2>
          <p className="text-slate-500 mb-10 text-lg">
            请登录后查看您的个人中心和行程规划。
          </p>
          <div className="space-y-4">
            <Link
              to="/login"
              className="flex items-center justify-center w-full py-4 px-6 border border-transparent rounded-xl shadow-md text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              <LogIn className="w-6 h-6 mr-2" /> 立即登录
            </Link>
            <Link
              to="/register"
              className="flex items-center justify-center w-full py-4 px-6 border border-slate-200 rounded-xl text-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
            >
              注册新账号
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
        >
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
              <img 
                src={`https://picsum.photos/seed/${user.username}/200/200`} 
                alt="User Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{user.username}</h1>
            <p className="text-slate-500 mb-4">加入时间：{user.joinDate}</p>
            <p className="text-slate-400 text-sm mb-4">{user.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <span className="block text-2xl font-bold text-blue-600">12</span>
                <span className="text-sm text-slate-500">去过的地方</span>
              </div>
              <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <span className="block text-2xl font-bold text-emerald-600">5</span>
                <span className="text-sm text-slate-500">收藏路线</span>
              </div>
              <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <span className="block text-2xl font-bold text-amber-600">28</span>
                <span className="text-sm text-slate-500">游记/评价</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button className="flex items-center justify-center px-6 py-3 bg-blue-50 text-blue-600 font-medium rounded-xl hover:bg-blue-100 transition-colors w-full">
              <Settings className="w-5 h-5 mr-2" /> 编辑资料
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center px-6 py-3 bg-rose-50 text-rose-600 font-medium rounded-xl hover:bg-rose-100 transition-colors w-full"
            >
              <LogOut className="w-5 h-5 mr-2" /> 退出登录
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Map className="w-6 h-6 mr-3 text-blue-600" />
                我的行程
              </h2>
              <div className="space-y-4">
                <div className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">大连经典3日游</h3>
                    <p className="text-slate-500 text-sm mt-1">计划日期：2024-05-01</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">未开始</span>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer opacity-70">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">金石滩一日游</h3>
                    <p className="text-slate-500 text-sm mt-1">完成日期：2023-08-15</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">已完成</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-rose-500" />
                我的收藏
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center group cursor-pointer">
                  <img src="https://picsum.photos/seed/xinghai/100/100" alt="星海广场" className="w-16 h-16 rounded-xl object-cover mr-4" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">星海广场</h4>
                    <p className="text-sm text-slate-500">景点</p>
                  </div>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <img src="https://picsum.photos/seed/seafood/100/100" alt="大连海鲜" className="w-16 h-16 rounded-xl object-cover mr-4" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">大连海鲜</h4>
                    <p className="text-sm text-slate-500">美食</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
