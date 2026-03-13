import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinations, foods, hotels, routes } from '../data';
import { ArrowRight, PlayCircle, Utensils, Hotel } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-beach-and-waves-4103-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            浪漫之都 · 时尚大连
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 font-light text-slate-200"
          >
            探索中国最美的海滨城市，感受山海相连的独特魅力。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/destinations"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              开始探索 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/videos"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full font-medium transition-all flex items-center border border-white/30"
            >
              <PlayCircle className="mr-2 h-5 w-5" /> 观看宣传片
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">热门景点</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">精选大连必游景点，带您领略最美的海滨风光。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-50 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{dest.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4 line-clamp-2">{dest.shortDesc}</p>
                  <Link
                    to={`/destinations/${dest.id}`}
                    className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                  >
                    了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              查看所有景点
            </Link>
          </div>
        </div>
      </section>

      {/* Food & Hotels Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                  <Utensils className="h-6 w-6" />
                </span>
                特色美食
              </h2>
              <div className="space-y-6">
                {foods.slice(0, 2).map((food) => (
                  <Link
                    key={food.id}
                    to={`/food/${food.id}`}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200"
                  >
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-24 h-24 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{food.name}</h3>
                      <p className="text-slate-500 text-sm mt-1">{food.shortDesc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                  <Hotel className="h-6 w-6" />
                </span>
                精选住宿
              </h2>
              <div className="space-y-6">
                {hotels.slice(0, 2).map((hotel) => (
                  <Link
                    key={hotel.id}
                    to={`/hotels/${hotel.id}`}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200"
                  >
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-24 h-24 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{hotel.name}</h3>
                      <p className="text-slate-500 text-sm mt-1">{hotel.shortDesc}</p>
                      <p className="text-indigo-600 font-medium mt-2">{hotel.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
