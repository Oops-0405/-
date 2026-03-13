import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 flex items-center justify-center"
          >
            <Phone className="mr-4 h-12 w-12 text-blue-600" />
            联系我们
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            如果您有任何问题或建议，欢迎随时与我们取得联系。我们将竭诚为您服务。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">发送消息</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">您的姓名</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">电子邮箱</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="请输入您的邮箱地址"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">留言内容</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="请输入您的留言内容..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md text-lg"
              >
                <Send className="mr-2 h-5 w-5" /> 发送消息
              </button>
            </form>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-start"
            >
              <div className="bg-blue-50 p-4 rounded-full mr-6 text-blue-600 flex-shrink-0">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">电话咨询</h3>
                <p className="text-slate-600 text-lg mb-2">工作日 09:00 - 18:00</p>
                <p className="text-2xl font-bold text-blue-600">400-123-4567</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-start"
            >
              <div className="bg-emerald-50 p-4 rounded-full mr-6 text-emerald-600 flex-shrink-0">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">邮件联系</h3>
                <p className="text-slate-600 text-lg mb-2">我们会在24小时内回复您</p>
                <p className="text-xl font-bold text-emerald-600">info@daliantravel.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-start"
            >
              <div className="bg-purple-50 p-4 rounded-full mr-6 text-purple-600 flex-shrink-0">
                <MapPin className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">公司地址</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  辽宁省大连市中山区<br />
                  人民路1号 大连国际金融中心 A座 88层
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
