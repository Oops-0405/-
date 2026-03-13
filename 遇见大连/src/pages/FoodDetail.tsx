import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { foods, restaurantRecommendations } from '../data';
import { ArrowLeft, Utensils, Star, MapPin, CreditCard } from 'lucide-react';

export default function FoodDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Search in both foods and restaurantRecommendations
  const food = foods.find((f) => f.id === id);
  const restaurant = restaurantRecommendations.find((r) => r.id === id);
  
  const item = food || restaurant;

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">内容未找到</h1>
        <Link to="/food" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> 返回美食列表
        </Link>
      </div>
    );
  }

  const isRestaurant = !!restaurant;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="relative h-[50vh] w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center">
          <Link to="/food" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> 返回列表
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center"
          >
            <Utensils className="mr-4 h-12 w-12 text-orange-500" />
            {item.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center items-center space-x-2 text-amber-400"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-6 w-6 ${i < Math.floor(isRestaurant ? restaurant.rating : 5) ? 'fill-current' : 'opacity-30'}`} />
            ))}
            <span className="text-white/90 ml-2 text-lg">{isRestaurant ? `${restaurant.rating}分` : '必吃推荐'}</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <h2 className="text-3xl font-bold text-slate-900">{isRestaurant ? '餐厅介绍' : '美食介绍'}</h2>
            {isRestaurant && (
              <div className="flex items-center text-red-500 font-bold text-2xl">
                <CreditCard className="mr-2 h-6 w-6" />
                ¥{restaurant.avgPrice}/人
              </div>
            )}
          </div>
          
          <p className="text-xl text-slate-700 leading-relaxed whitespace-pre-line mb-12">
            {item.desc}
          </p>

          {isRestaurant && restaurant.specialties && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">招牌特色</h3>
              <div className="flex flex-wrap gap-4">
                {restaurant.specialties.map((spec, i) => (
                  <span key={i} className="bg-orange-50 text-orange-700 px-6 py-3 rounded-2xl font-medium border border-orange-100">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-blue-600" />
              {isRestaurant ? '详细地址' : '推荐品尝地点'}
            </h3>
            {isRestaurant ? (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-xl text-slate-700">
                {restaurant.address}
              </div>
            ) : (
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-4">1</span>
                  大连各大夜市及小吃街
                </li>
                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-4">2</span>
                  星海广场周边餐厅
                </li>
                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-4">3</span>
                  老字号海鲜大排档
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
