"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, Clock, Users, ArrowRight, Plane, CheckCircle2, Globe } from "lucide-react";
import { countries } from "@/data/countries";

export default function CountriesExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filterContinent, setFilterContinent] = useState("All Continents");
  const [filterCountry, setFilterCountry] = useState("All Countries");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const allFields = useMemo(() => {
    const fields = new Set<string>();
    countries.forEach(c => c.fields.forEach(f => fields.add(f)));
    return ["All", ...Array.from(fields)];
  }, []);

  const availableCountriesForFilter = useMemo(() => {
    let filtered = countries;
    if (filterContinent !== "All Continents") {
      filtered = filtered.filter(c => c.continent === filterContinent);
    }
    return ["All Countries", ...filtered.map(c => c.country).sort()];
  }, [filterContinent]);

  const isFiltering = searchQuery !== "" || 
                      selectedField !== "All" || 
                      selectedStatus !== "All" || 
                      filterContinent !== "All Continents" || 
                      filterCountry !== "All Countries";

  const displayedCountries = useMemo(() => {
    if (!isFiltering) {
      const featured: typeof countries = [];
      const targets = ["Spain", "Egypt", "Poland"];
      
      targets.forEach(t => {
        const c = countries.find(c => c.country === t);
        if (c) featured.push(c);
      });
      
      if (featured.length < 3) {
        for (const c of countries) {
          if (!featured.includes(c)) {
            featured.push(c);
            if (featured.length === 3) break;
          }
        }
      }
      return featured;
    }

    return countries.filter(country => {
      const matchesSearch = country.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            country.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesField = selectedField === "All" || country.fields.includes(selectedField);
      const matchesStatus = selectedStatus === "All" || country.status === selectedStatus;
      const matchesContinent = filterContinent === "All Continents" || country.continent === filterContinent;
      const matchesFilterCountry = filterCountry === "All Countries" || country.country === filterCountry;
      
      return matchesSearch && matchesField && matchesStatus && matchesContinent && matchesFilterCountry;
    });
  }, [searchQuery, selectedField, selectedStatus, filterContinent, filterCountry, isFiltering]);

  const handleContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterContinent(e.target.value);
    setFilterCountry("All Countries");
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedField("All");
    setSelectedStatus("All");
    setFilterContinent("All Continents");
    setFilterCountry("All Countries");
  };

  const handleSelectCountry = (countryName: string) => {
    setSelectedCountry(countryName);
    // Dispatch custom event for the form to catch
    window.dispatchEvent(new CustomEvent("sep-select-country", { detail: countryName }));
    
    // Scroll to form
    const formSection = document.getElementById("apply");
    if (formSection) {
      setTimeout(() => {
        formSection.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <section id="countries" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-sep-primary/5 rounded-full blur-[40px] pointer-events-none" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-sep-dark-text"
          >
            Available <span className="text-gradient relative inline-block">
              Destinations
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-sep-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-sep-muted"
          >
            Browse countries, fields, training dates, and find your perfect SEP exchange experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-sep-primary/10 text-sep-primary font-bold text-sm tracking-wide border border-sep-primary/20 shadow-sm neon-glow hover-shine cursor-default">
              <Globe className="w-4 h-4" /> {countries.length} Destinations Available
            </div>
            <p className="text-sm text-sep-muted/80 font-medium italic">
              Search or filter to explore all available destinations.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 mb-16 max-w-5xl mx-auto relative z-20"
        >
          {/* Top row: Search, Continent, Country */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sep-muted group-focus-within:text-sep-primary transition-colors" />
              <input
                type="text"
                placeholder="Search by country or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 bg-white/90 backdrop-blur-sm border border-sep-light-gray rounded-2xl pl-12 pr-4 text-sep-dark-text placeholder-sep-muted focus:outline-none transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] filter-glow"
              />
            </div>
            
            <select
              value={filterContinent}
              onChange={handleContinentChange}
              className="h-14 w-full sm:w-auto bg-white/90 backdrop-blur-sm border border-sep-light-gray rounded-2xl px-4 text-sep-dark-text focus:outline-none transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] filter-glow cursor-pointer"
            >
              <option value="All Continents">All Continents</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
            </select>

            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="h-14 w-full sm:w-auto bg-white/90 backdrop-blur-sm border border-sep-light-gray rounded-2xl px-4 text-sep-dark-text focus:outline-none transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] filter-glow cursor-pointer"
            >
              {availableCountriesForFilter.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Bottom row: Fields, Status, Clear */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="h-14 w-full sm:w-auto bg-white/90 backdrop-blur-sm border border-sep-light-gray rounded-2xl px-4 text-sep-dark-text focus:outline-none focus:border-sep-primary focus:ring-2 focus:ring-sep-primary/20 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] cursor-pointer"
            >
              {allFields.map(field => (
                <option key={field} value={field}>{field === "All" ? "All Fields" : field}</option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="h-14 w-full sm:w-auto bg-white/90 backdrop-blur-sm border border-sep-light-gray rounded-2xl px-4 text-sep-dark-text focus:outline-none focus:border-sep-primary focus:ring-2 focus:ring-sep-primary/20 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Open">Open</option>
              <option value="Limited">Limited</option>
              <option value="Coming Soon">Coming Soon</option>
            </select>

            <div className="flex-1" />

            <AnimatePresence>
              {isFiltering && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={clearFilters}
                  className="text-sm font-bold text-sep-muted hover:text-sep-primary transition-colors h-14 px-4 bg-white/50 rounded-2xl hover:bg-white border border-sep-light-gray/50 hover:border-sep-primary/30"
                >
                  Clear Filters
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Grid */}
        {!isFiltering && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-sep-primary/10 text-sep-primary font-bold text-xs tracking-widest uppercase border border-sep-primary/20">
              Featured Destinations
            </span>
          </motion.div>
        )}
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {displayedCountries.map((country, index) => {
              const isSelected = selectedCountry === country.country;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={country.country}
                  className={`group relative flex flex-col h-full bg-white rounded-3xl interactive-card ${
                    isSelected 
                      ? 'shadow-[0_10px_40px_rgba(178,34,34,0.15)] ring-2 ring-sep-primary -translate-y-2' 
                      : 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-sep-light-gray hover:border-sep-primary/30'
                  }`}
                >
                  {/* Featured Badge */}
                  {country.featured && (
                    <div className="absolute -top-3 left-6 z-10 px-3 py-1 bg-sep-dark-text text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] border border-gray-700">
                      Featured Example
                    </div>
                  )}

                  {/* Decorative Header Area */}
                  <div className={`h-24 rounded-t-3xl relative overflow-hidden transition-colors duration-300 ${isSelected ? 'bg-sep-primary' : 'bg-sep-warm-white group-hover:bg-sep-primary/5'}`}>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 16 16\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h4v4H0V0zm4 4h4v4H4V4zm4-4h4v4H8V0zm4 4h4v4h-4V4zM0 8h4v4H0V8zm4 4h4v4H4v-4zm4-4h4v4H8V8zm4 4h4v4h-4v-4zM4 0L0 4v4l4-4V0zm4 4L4 8v4l4-4V4zm4-4L8 4v4l4-4V0zm4 4l-4 4v4l4-4V4z\\' fill=\\'%23B22222\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'%3E')] mix-blend-multiply" />
                    {isSelected && <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 16 16\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h4v4H0V0zm4 4h4v4H4V4zm4-4h4v4H8V0zm4 4h4v4h-4V4zM0 8h4v4H0V8zm4 4h4v4H4v-4zm4-4h4v4H8V8zm4 4h4v4h-4v-4zM4 0L0 4v4l4-4V0zm4 4L4 8v4l4-4V4zm4-4L8 4v4l4-4V0zm4 4l-4 4v4l4-4V4z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\' fill-rule=\\'evenodd\\'%3E')]" />}
                    
                    {/* Destination Icon/Flag Placeholder */}
                    <div className={`absolute -bottom-8 left-6 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white shadow-md transition-colors duration-300 ${isSelected ? 'bg-white text-sep-primary' : 'bg-sep-primary text-white'}`}>
                      <Plane className={`w-7 h-7 ${isSelected ? '' : '-rotate-45'}`} />
                    </div>

                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                      country.status === 'Open' ? 'bg-green-100/90 text-green-700 border-green-200' :
                      country.status === 'Limited' ? 'bg-orange-100/90 text-orange-700 border-orange-200' :
                      'bg-gray-100/90 text-gray-600 border-gray-200'
                    }`}>
                      {country.status}
                    </span>
                  </div>

                  <div className="p-6 pt-12 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-black text-sep-dark-text mb-1 group-hover:text-sep-primary transition-colors">{country.country}</h3>
                      {country.city && !country.city.toLowerCase().includes("announced") && (
                        <div className="flex items-center text-sm font-medium text-sep-muted">
                          <MapPin className="w-4 h-4 mr-1 text-sep-soft-red" />
                          {country.city}
                        </div>
                      )}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 bg-sep-warm-white/50 p-4 rounded-2xl border border-sep-light-gray/50">
                      <div>
                        <p className="text-[10px] text-sep-muted uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-sep-primary/70" /> Dates
                        </p>
                        <p className="text-sm font-semibold text-sep-dark-text">{country.dates}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-sep-muted uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-sep-primary/70" /> Duration
                        </p>
                        <p className="text-sm font-semibold text-sep-dark-text">{country.duration}</p>
                      </div>
                      <div className="col-span-2 mt-1">
                        <p className="text-[10px] text-sep-muted uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                          <Users className="w-3 h-3 text-sep-primary/70" /> Spots
                        </p>
                        <p className="text-sm font-semibold text-sep-dark-text">{country.spots} available</p>
                      </div>
                    </div>

                    <div className="mb-6 flex-1">
                      <h4 className="text-xs font-bold text-sep-muted uppercase tracking-wider mb-3">Fields</h4>
                      <div className="flex flex-wrap gap-2">
                        {country.fields.map(field => (
                          <span key={field} className="px-3 py-1.5 bg-white border border-sep-light-gray rounded-lg text-xs font-medium text-sep-dark-text shadow-sm hover:border-sep-primary/40 transition-colors">
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative pl-4 border-l-2 border-sep-primary/30 mb-6 group-hover:border-sep-primary transition-colors">
                      <p className="text-sm text-sep-muted italic line-clamp-2 group-hover:line-clamp-none transition-all">
                        "{country.note}"
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-sep-light-gray border-dashed">
                      <button 
                        onClick={() => handleSelectCountry(country.country)}
                        disabled={country.status === 'Coming Soon'}
                        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold hover-shine neon-glow ${
                          isSelected
                            ? 'bg-green-500 text-white shadow-md hover:bg-green-600'
                            : country.status === 'Coming Soon' 
                              ? 'bg-red-50 text-sep-soft-red border border-red-100 cursor-not-allowed hover-shine-none text-sm'
                              : 'bg-sep-primary/5 text-sep-primary hover:bg-sep-primary hover:text-white border border-sep-primary/20 group-hover:bg-sep-primary group-hover:text-white'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            Selected
                          </>
                        ) : country.status === 'Coming Soon' ? (
                          'Contact the SEO for more details'
                        ) : (
                          <>
                            Select Destination
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {displayedCountries.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-sep-light-gray shadow-sm max-w-3xl mx-auto mt-8">
            <Plane className="w-12 h-12 text-sep-light-gray mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sep-dark-text mb-2">No destinations found</h3>
            <p className="text-sep-muted">Try adjusting your filters or search query.</p>
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center flex flex-col items-center bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-sep-primary/20 shadow-[0_10px_40px_rgba(178,34,34,0.08)] max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sep-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl md:text-3xl font-black text-sep-dark-text mb-3">Ready to apply?</h3>
          <p className="text-sm md:text-base text-sep-muted font-medium mb-8 max-w-md mx-auto">Start your SEP journey by submitting your application.</p>
          <button
            onClick={() => {
              const formSection = document.getElementById("apply");
              if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center gap-2 bg-sep-primary hover:bg-sep-deep-red text-white font-bold px-8 py-4 rounded-full shadow-[0_8px_25px_rgba(178,34,34,0.3)] hover:shadow-[0_12px_30px_rgba(178,34,34,0.4)] transition-all hover:-translate-y-1 neon-glow hover-shine"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
