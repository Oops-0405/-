import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinations } from '../data';
import { ArrowLeft, Clock, DollarSign, MapPin, Image as ImageIcon } from 'lucide-react';

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">景点未找到</h1>
        <Link to="/destinations" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> 返回景点列表
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/destinations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> 返回列表
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {destination.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-white/90 text-lg"
          >
            <span className="flex items-center"><MapPin className="mr-2 h-5 w-5 text-blue-400" /> 大连市</span>
            <span className="flex items-center"><Clock className="mr-2 h-5 w-5 text-emerald-400" /> {destination.time}</span>
            <span className="flex items-center"><DollarSign className="mr-2 h-5 w-5 text-amber-400" /> {destination.price}</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">景点介绍</h2>
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                {destination.desc}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <ImageIcon className="mr-3 h-8 w-8 text-blue-600" />
                图集欣赏
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.gallery?.map((img, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl overflow-hidden h-64 shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`${destination.name} - 图 ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">实用信息</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">开放时间</h4>
                    <p className="text-slate-600 mt-1">{destination.time}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-50 p-3 rounded-full mr-4 text-emerald-600">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">门票价格</h4>
                    <p className="text-slate-600 mt-1">{destination.price}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-50 p-3 rounded-full mr-4 text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">建议游玩</h4>
                    <p className="text-slate-600 mt-1">2-4小时</p>
                  </div>
                </li>
              </ul>
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                预订门票
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
