"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, PlaneTakeoff } from "lucide-react";
import { countries } from "@/data/countries";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    academicYear: "",
    isJpsaMember: "",
    preferredCountry: "",
    secondPreferredCountry: "",
    preferredField: "",
    preferredDates: "",
    participatedBefore: "",
    motivation: "",
    expectations: "",
    agreement: false
  });

  // Listen for custom event from CountriesExplorer
  useEffect(() => {
    const handleSelectCountry = (e: Event) => {
      const customEvent = e as CustomEvent;
      setFormData(prev => ({ ...prev, preferredCountry: customEvent.detail }));
    };

    window.addEventListener("sep-select-country", handleSelectCountry);
    return () => window.removeEventListener("sep-select-country", handleSelectCountry);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          university: formData.university,
          academicYear: formData.academicYear,
          isJpsaMember: formData.isJpsaMember,
          preferredCountry: formData.preferredCountry,
          secondPreferredCountry: formData.secondPreferredCountry,
          preferredField: formData.preferredField,
          preferredDates: formData.preferredDates,
          participatedBefore: formData.participatedBefore,
          motivation: formData.motivation,
          expectations: formData.expectations,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application.");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "", email: "", phone: "", university: "", academicYear: "",
        isJpsaMember: "", preferredCountry: "", secondPreferredCountry: "",
        preferredField: "", preferredDates: "", participatedBefore: "",
        motivation: "", expectations: "", agreement: false
      });
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-white border border-sep-light-gray rounded-xl py-3 px-4 text-sep-dark-text placeholder-sep-muted focus:outline-none focus:border-sep-primary focus:ring-4 focus:ring-sep-primary/10 transition-all shadow-sm hover:border-sep-primary/50";
  const labelClasses = "block text-xs font-bold text-sep-muted uppercase tracking-wider mb-2 ml-1";

  return (
    <section id="apply" className="py-24 relative z-10 bg-sep-warm-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sep-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-sep-light-gray relative overflow-hidden group">
          
          {/* Header Area with Shemagh Pattern */}
          <div className="h-40 bg-sep-primary relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\' fill-rule=\\'evenodd\\'/%3E')] opacity-40 mix-blend-overlay animate-float-slow" />
            <PlaneTakeoff className="w-10 h-10 text-white mb-2 relative z-10" />
            <h2 className="text-3xl font-black text-white relative z-10 tracking-wide">SEP APPLICATION</h2>
          </div>

          <div className="p-8 md:p-12 relative z-10 bg-white">
            {submitStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-sep-dark-text mb-2">Application Submitted!</h3>
                <p className="text-sep-muted mb-8 max-w-md mx-auto">Thank you for applying. We will review your application and contact you via email or phone shortly.</p>
                <button 
                  onClick={() => setSubmitStatus("idle")}
                  className="px-6 py-3 border-2 border-sep-primary text-sep-primary rounded-xl hover:bg-sep-primary hover:text-white transition-colors font-bold"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800 font-medium">{errorMessage}</p>
                  </div>
                )}

                {/* Section 1: Personal Details */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-sep-primary/10 flex items-center justify-center text-sep-primary font-bold">1</div>
                    <h3 className="text-xl font-bold text-sep-dark-text">Personal Details</h3>
                    <div className="flex-1 h-px bg-sep-light-gray" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className={labelClasses}>Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone / WhatsApp *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+962..." />
                    </div>
                    <div>
                      <label className={labelClasses}>University *</label>
                      <input required type="text" name="university" value={formData.university} onChange={handleChange} className={inputClasses} placeholder="e.g. University of Jordan" />
                    </div>
                    <div>
                      <label className={labelClasses}>Academic Year *</label>
                      <select required name="academicYear" value={formData.academicYear} onChange={handleChange} className={inputClasses}>
                        <option value="" disabled>Select Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                        <option value="6th Year (PharmD)">6th Year (PharmD)</option>
                        <option value="Recent Graduate">Recent Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>JPSA Member? *</label>
                      <select required name="isJpsaMember" value={formData.isJpsaMember} onChange={handleChange} className={inputClasses}>
                        <option value="" disabled>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Exchange Preferences */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-sep-primary/10 flex items-center justify-center text-sep-primary font-bold">2</div>
                    <h3 className="text-xl font-bold text-sep-dark-text">Exchange Preferences</h3>
                    <div className="flex-1 h-px bg-sep-light-gray" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>First Choice Country *</label>
                      <select required name="preferredCountry" value={formData.preferredCountry} onChange={handleChange} className={inputClasses}>
                        <option value="" disabled>Select First Choice</option>
                        {countries.map(c => <option key={c.country} value={c.country}>{c.country}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Second Choice Country</label>
                      <select name="secondPreferredCountry" value={formData.secondPreferredCountry} onChange={handleChange} className={inputClasses}>
                        <option value="">Select Second Choice (Optional)</option>
                        {countries.map(c => <option key={c.country} value={c.country}>{c.country}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Preferred Field *</label>
                      <select required name="preferredField" value={formData.preferredField} onChange={handleChange} className={inputClasses}>
                        <option value="" disabled>Select Field</option>
                        <option value="Community Pharmacy">Community Pharmacy</option>
                        <option value="Hospital Pharmacy">Hospital Pharmacy</option>
                        <option value="Clinical Pharmacy">Clinical Pharmacy</option>
                        <option value="Industrial Pharmacy">Industrial Pharmacy</option>
                        <option value="Research">Research</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Preferred Dates</label>
                      <input type="text" name="preferredDates" value={formData.preferredDates} onChange={handleChange} className={inputClasses} placeholder="e.g. July - August" />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClasses}>Participated in SEP before? *</label>
                      <select required name="participatedBefore" value={formData.participatedBefore} onChange={handleChange} className={inputClasses}>
                        <option value="" disabled>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Motivation */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-sep-primary/10 flex items-center justify-center text-sep-primary font-bold">3</div>
                    <h3 className="text-xl font-bold text-sep-dark-text">Motivation</h3>
                    <div className="flex-1 h-px bg-sep-light-gray" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className={labelClasses}>Why do you want to join SEP? *</label>
                      <textarea required name="motivation" value={formData.motivation} onChange={handleChange} rows={4} className={inputClasses} placeholder="Tell us what drives you..." />
                    </div>
                    <div>
                      <label className={labelClasses}>What do you hope to gain? *</label>
                      <textarea required name="expectations" value={formData.expectations} onChange={handleChange} rows={4} className={inputClasses} placeholder="Professional and personal goals..." />
                    </div>
                  </div>
                </div>

                <div className="pt-4 pb-2 border-t border-sep-light-gray">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-start">
                      <input required type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} className="peer sr-only" />
                      <div className="w-6 h-6 border-2 border-sep-light-gray rounded bg-white peer-checked:bg-sep-primary peer-checked:border-sep-primary transition-all flex items-center justify-center mt-0.5 group-hover:border-sep-primary/50 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <span className="text-sm text-sep-dark-text font-medium leading-relaxed">
                      I confirm that the information I provided is accurate and I agree to the <a href="#" className="text-sep-primary hover:underline">terms and conditions</a> of JPSA SEP.
                    </span>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreement}
                    className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting || !formData.agreement 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                        : 'bg-sep-primary hover:bg-sep-deep-red text-white shadow-[0_8px_20px_rgba(178,34,34,0.3)] hover:shadow-[0_12px_25px_rgba(178,34,34,0.4)] hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <PlaneTakeoff className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
