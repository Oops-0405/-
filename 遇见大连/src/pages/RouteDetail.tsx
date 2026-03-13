import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routes } from '../data';
import { ArrowLeft, Map, Calendar, Navigation, CheckCircle } from 'lucide-react';

export default function RouteDetail() {
  const { id } = useParams<{ id: string }>();
  const route = routes.find((r) => r.id === id);

  if (!route) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">路线未找到</h1>
        <Link to="/routes" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> 返回路线列表
        </Link>
      </div>
    );
  }

  const daysList = route.desc.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="relative h-[50vh] w-full">
        <img
          src={route.image}
          alt={route.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/routes" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> 返回列表
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center"
          >
            <Map className="mr-4 h-12 w-12 text-emerald-400" />
            {route.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-6 text-white/90 text-lg"
          >
            <span className="flex items-center bg-emerald-600/80 px-4 py-2 rounded-full font-bold">
              <Calendar className="mr-2 h-5 w-5" /> {route.days} 天行程
            </span>
            <span className="flex items-center">
              <Navigation className="mr-2 h-5 w-5 text-emerald-400" /> 经典必游
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">详细行程安排</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {daysList.map((dayDesc, index) => {
              const [dayTitle, ...activities] = dayDesc.split('：');
              const activityText = activities.join('：');
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">
                    D{index + 1}
                  </div>
                  
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-slate-900 text-xl">{dayTitle}</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed">{activityText}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <CheckCircle className="mr-3 h-6 w-6 text-emerald-600" />
              行程亮点
            </h3>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                合理规划，不走回头路，最大化游览时间。
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                涵盖大连最具代表性的自然风光和人文景观。
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                适合首次来大连游玩的旅客，轻松体验浪漫之都。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
