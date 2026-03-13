import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hotels } from '../data';
import { Hotel as HotelIcon, Star, MapPin, Filter } from 'lucide-react';

// Memoized Star Rating component to prevent unnecessary re-renders
const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center space-x-1 text-amber-400 mb-3">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

export default function Hotels() {
  const [searchParams] = useSearchParams();
  const filter = (searchParams.get('type') as 'all' | 'luxury' | 'comfort' | 'economic') || 'all';

  const categories = useMemo(() => [
    { id: 'all', name: '全部酒店' },
    { id: 'luxury', name: '奢华五星 (¥1000+)' },
    { id: 'comfort', name: '高端舒适 (¥500-1000)' },
    { id: 'economic', name: '经济优选 (¥500以下)' },
  ], []);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      if (filter === 'all') return true;
      const price = (hotel as any).priceValue;
      if (filter === 'luxury') return price >= 1000;
      if (filter === 'comfort') return price >= 500 && price < 1000;
      if (filter === 'economic') return price < 500;
      return true;
    });
  }, [filter]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center"
          >
            <HotelIcon className="mr-3 h-10 w-10 text-indigo-600" />
            精选住宿
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            从奢华的海景酒店到温馨的特色民宿，大连为您提供多样化的住宿选择，让您的旅途更加舒适。
          </p>
        </div>

        {/* Price Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center text-slate-500 mr-2">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">价格分类：</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.id === 'all' ? '/hotels' : `/hotels?type=${cat.id}`}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredHotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-indigo-600 shadow-sm">
                    {hotel.price}
                  </div>
                </div>
                <div className="p-8">
                  <StarRating />
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{hotel.name}</h2>
                  <p className="text-slate-600 mb-6 text-lg">{hotel.shortDesc}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {(hotel as any).address}
                    </div>
                    <Link
                      to={`/hotels/${hotel.id}`}
                      className="inline-flex items-center px-6 py-3 bg-indigo-50 text-indigo-700 font-medium rounded-xl hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">暂无该价格区间的酒店推荐</p>
          </div>
        )}
      </div>
    </div>
  );
}
