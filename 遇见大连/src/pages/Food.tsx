import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { foods, famousSnacks, famousDishes, foodStreets, famousRestaurants, restaurantRecommendations } from '../data';
import { Utensils, MapPin, Star, CreditCard, ChefHat, Soup, ThumbsUp } from 'lucide-react';

export default function Food() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center"
          >
            <Utensils className="mr-3 h-10 w-10 text-orange-500" />
            大连必吃美食
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            前10榜单吃透滨城味道！从街头小吃到高端海鲜宴，带你领略大连舌尖上的魅力。
          </p>
        </div>

        {/* Featured Foods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {foods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{food.name}</h2>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{food.shortDesc}</p>
                <Link
                  to={`/food/${food.id}`}
                  className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700"
                >
                  查看详情 <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Restaurant Recommendations List */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-orange-100 p-3 rounded-2xl mr-4">
              <ThumbsUp className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">热门餐厅推荐</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantRecommendations.map((res, i) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="h-56 relative">
                  <img src={res.image} alt={res.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg flex items-center shadow-md">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                    <span className="text-sm font-bold text-slate-900">{res.rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{res.name}</h3>
                    <span className="text-red-500 font-bold text-lg">¥{res.avgPrice}/人</span>
                  </div>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed line-clamp-2">
                    {res.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {res.specialties.map((spec, j) => (
                      <span key={j} className="bg-slate-50 text-slate-400 text-xs px-3 py-1.5 rounded-lg border border-slate-100/50">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/food/${res.id}`}
                    className="block w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                  >
                    查看详情
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ten Famous Dishes */}
        <div className="mb-20">
          <section>
            <div className="flex items-center mb-8">
              <div className="bg-red-100 p-3 rounded-2xl mr-4">
                <ChefHat className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">十大名菜</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {famousDishes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
                >
                  <div className="h-32 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-lg flex items-center shadow-md">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500 mr-1" />
                      <span className="text-xs font-bold text-slate-900">{item.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 mb-1 truncate">{item.name}</h3>
                    <p className="text-slate-500 text-xs line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Food Streets */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-2xl mr-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">十大美食街</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {foodStreets.map((street, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="h-32 relative">
                  <img src={street.image} alt={street.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-lg flex items-center shadow-md">
                    <Star className="h-3 w-3 text-amber-500 fill-amber-500 mr-1" />
                    <span className="text-xs font-bold text-slate-900">{street.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 mb-1 truncate">{street.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{street.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Famous Restaurants */}
        <section className="mb-12">
          <div className="flex items-center mb-8">
            <div className="bg-emerald-100 p-3 rounded-2xl mr-4">
              <Star className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">十大菜馆推荐</h2>
          </div>
          
          <div className="space-y-16">
            {/* Economy */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-emerald-500" />
                经济型 (人均 &lt; 100)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {famousRestaurants.economy.map((res, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="h-32 relative">
                      <img src={res.image} alt={res.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-lg flex items-center shadow-md">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500 mr-1" />
                        <span className="text-xs font-bold text-slate-900">{res.rating}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <h4 className="font-bold text-base text-slate-900 truncate">{res.name}</h4>
                        <span className="text-red-500 font-bold text-sm">¥{res.price}/人</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{res.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Banquet */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center">
                <Star className="mr-2 h-5 w-5 text-amber-500" />
                宴请型 (人均 &gt; 100)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {famousRestaurants.banquet.map((res, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="h-32 relative">
                      <img src={res.image} alt={res.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-lg flex items-center shadow-md">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500 mr-1" />
                        <span className="text-xs font-bold text-slate-900">{res.rating}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <h4 className="font-bold text-base text-slate-900 truncate">{res.name}</h4>
                        <span className="text-red-500 font-bold text-sm">¥{res.price}/人</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{res.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
