import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hotels } from '../data';
import { ArrowLeft, Hotel as HotelIcon, Star, MapPin, CheckCircle, Wifi, Coffee, Car } from 'lucide-react';

export default function HotelDetail() {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">酒店未找到</h1>
        <Link to="/hotels" className="text-indigo-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> 返回酒店列表
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="relative h-[60vh] w-full">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/hotels" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> 返回列表
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center"
          >
            <HotelIcon className="mr-4 h-12 w-12 text-indigo-400" />
            {hotel.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-white/90 text-lg"
          >
            <span className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </span>
            <span className="flex items-center"><MapPin className="mr-2 h-5 w-5 text-indigo-400" /> {hotel.address}</span>
            <span className="font-bold text-2xl text-white">{hotel.price}</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">酒店介绍</h2>
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                {hotel.desc}
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">设施服务</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Wifi className="h-8 w-8 text-indigo-600 mb-3" />
                  <span className="text-slate-700 font-medium">免费高速Wi-Fi</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Coffee className="h-8 w-8 text-indigo-600 mb-3" />
                  <span className="text-slate-700 font-medium">自助早餐</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Car className="h-8 w-8 text-indigo-600 mb-3" />
                  <span className="text-slate-700 font-medium">免费停车</span>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">预订信息</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">入住时间</span>
                  <span className="font-medium text-slate-900">14:00 后</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">退房时间</span>
                  <span className="font-medium text-slate-900">12:00 前</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">支持免费取消（入住前24小时）</span>
                </div>
              </div>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-indigo-600">{hotel.price}</span>
                <span className="text-slate-500 text-sm ml-1">/晚</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md text-lg">
                立即预订
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
