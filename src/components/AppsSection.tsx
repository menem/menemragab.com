import { Link } from "react-router-dom";

const apps = [
  {
    name: "Al Zekr",
    description: "Your Muslim Companion",
    icon: "/Zekr-AppIcon.png",
    link: "/alzekr",
    appStoreUrl: "https://apps.apple.com/app/zekr",
  },
  {
    name: "Stoic Calendar",
    description: "Your life, in weeks",
    icon: "/Stoic-Calendar-AppIcon.png",
    link: "/stoic-calendar",
    appStoreUrl: "https://apps.apple.com/us/app/stoic-calendar/id6758130312",
  },
];

const AppsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-secondary/30">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 text-center">
            Personal Apps
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
            Digital products I've built to help people live better lives.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {apps.map((app) => (
              <div
                key={app.name}
                className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-foreground/5 flex items-center justify-center shadow-md shadow-black/10 ring-1 ring-black/5 overflow-hidden mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium mb-2 text-foreground">
                  {app.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                  {app.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-[200px] hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1704067200"
                      alt="Download on the App Store"
                      className="w-full h-auto"
                    />
                  </a>
                  <Link
                    to={app.link}
                    className="flex-1 bg-background border border-foreground/20 text-foreground px-4 py-2.5 sm:py-3 font-medium hover:bg-foreground/5 transition-colors rounded-md text-sm sm:text-base text-center"
                  >
                    View app
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
