import { motion } from 'framer-motion';
import { Info, Heart, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 flex items-center justify-center"
          >
            <Info className="mr-4 h-12 w-12 text-blue-600" />
            关于我们
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            大连旅游网致力于为全球游客提供最全面、最真实、最便捷的大连旅游资讯和服务。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-slate-100 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">我们的使命</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                让每一位来到大连的游客都能感受到这座城市的浪漫与热情。我们通过精心整理的景点介绍、地道的美食推荐和实用的旅游攻略，帮助您规划完美的旅程。
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                无论您是寻找宁静的海滨漫步，还是渴望刺激的主题乐园体验，我们都能为您提供最佳的建议。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
                alt="大连风光" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">用心服务</h3>
            <p className="text-slate-600 leading-relaxed">
              我们热爱大连，更热爱为每一位游客提供贴心的服务和建议。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">真实可靠</h3>
            <p className="text-slate-600 leading-relaxed">
              所有资讯均经过实地考察和严格审核，确保信息的真实性和时效性。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
          >
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">游客至上</h3>
            <p className="text-slate-600 leading-relaxed">
              倾听游客的声音，不断优化我们的平台功能和内容质量。
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
