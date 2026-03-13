import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '../data';
import { MapPin, Clock, DollarSign, Filter } from 'lucide-react';
import { useMemo } from 'react';

export default function Destinations() {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const categories = useMemo(() => [
    { id: 'all', name: '全部景点' },
    { id: 'beach', name: '浪漫海滩' },
    { id: 'park', name: '主题公园' },
    { id: 'square', name: '城市广场' },
    { id: 'museum', name: '文化场馆' },
  ], []);

  const filteredDestinations = useMemo(() => {
    if (!typeFilter || typeFilter === 'all') return destinations;
    return destinations.filter(dest => (dest as any).type === typeFilter);
  }, [typeFilter]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            探索大连景点
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            从广阔的星海广场到神秘的发现王国，大连拥有众多令人流连忘返的旅游胜地。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.id === 'all' ? '/destinations' : `/destinations?type=${cat.id}`}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                (typeFilter === cat.id || (!typeFilter && cat.id === 'all'))
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800 flex items-center shadow-sm">
                    <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                    大连
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{dest.name}</h2>
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-2">{dest.shortDesc}</p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6 border-t border-slate-100 pt-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {dest.time}
                    </div>
                    <div className="flex items-center text-emerald-600 font-medium">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {dest.price}
                    </div>
                  </div>

                  <Link
                    to={`/destinations/${dest.id}`}
                    className="w-full block text-center bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    查看详情
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">暂无该分类的景点推荐</p>
          </div>
        )}
      </div>
    </div>
  );
}
