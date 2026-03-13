import { motion } from 'framer-motion';
import { PlayCircle, Video as VideoIcon } from 'lucide-react';

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: '大连城市宣传片',
      desc: '领略浪漫之都的四季风光与人文魅力。',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: '星海湾跨海大桥航拍',
      desc: '以上帝视角俯瞰壮观的跨海大桥与蔚蓝大海。',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: '发现王国奇妙夜',
      desc: '感受主题乐园夜场的狂欢与绚丽烟花。',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1513889959010-65a4ec81a2a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: '大连海鲜美食探秘',
      desc: '跟随镜头寻找大连街头巷尾的地道海味。',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center"
          >
            <VideoIcon className="mr-3 h-10 w-10 text-rose-500" />
            视听大连
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            通过精彩的视频影像，身临其境地感受大连的城市脉搏与自然之美。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video bg-slate-900">
                <video
                  controls
                  poster={video.poster}
                  className="w-full h-full object-cover"
                  preload="none"
                >
                  <source src={video.url} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <PlayCircle className="w-16 h-16 text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{video.title}</h2>
                <p className="text-slate-600">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
