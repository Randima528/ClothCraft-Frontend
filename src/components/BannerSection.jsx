const BannerSection = () => {
  const banners = [
    {
      id: 1,
      image: "/images/banner-01.jpg",
      title: "Women",
      subtitle: "Women Collection",
      link: "#",
    },
    {
      id: 2,
      image: "/images/banner-02.jpg",
      title: "Men",
      subtitle: "Modern Wear",
      link: "#",
    },
    {
      id: 3,
      image: "/images/banner-03.jpg",
      title: "Accessories",
      subtitle: "New Trend",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {banners.map((banner) => (
            <div key={banner.id} className="group relative overflow-hidden">
              <div className="relative">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Content */}
                <a
                  href={banner.link}
                  className="absolute inset-0 flex flex-col justify-between p-10 text-black"
                >
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold tracking-wide transition-transform duration-300 group-hover:transform group-hover:translate-y-1">
                      {banner.title}
                    </h3>
                    <p className="text-lg font-light transition-transform duration-300 group-hover:transform group-hover:translate-y-1">
                      {banner.subtitle}
                    </p>
                  </div>

                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-medium uppercase tracking-wide border-b border-black pb-1">
                      Shop Now
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
