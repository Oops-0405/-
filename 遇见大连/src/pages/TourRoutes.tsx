import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routes } from '../data';
import { Map, Calendar, ArrowRight } from 'lucide-react';

export default function TourRoutes() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center"
          >
            <Map className="mr-3 h-10 w-10 text-emerald-600" />
            推荐旅游路线
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            精心设计的旅游路线，带您高效游览大连的精华景点，省时省力。
          </p>
        </div>

        <div className="space-y-12">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              id={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row group hover:shadow-xl transition-all duration-300"
            >
              <div className="lg:w-1/2 h-80 lg:h-auto relative">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {route.days} 天行程
                </div>
              </div>
              <div className="p-10 lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{route.name}</h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{route.shortDesc}</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">行程概览</h3>
                  <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                    {route.desc}
                  </p>
                </div>
                <Link
                  to={`/routes/${route.id}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md text-lg w-full sm:w-auto"
                >
                  查看详细行程 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
