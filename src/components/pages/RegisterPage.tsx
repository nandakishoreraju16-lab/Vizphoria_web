import { useState } from "react";
import { motion } from "motion/react";
import { User, Mail, Phone, GraduationCap, Calendar, Users, CreditCard, QrCode, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { toast } from "sonner@2.0.3";
import { Toaster } from "../ui/sonner";

export function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    event: "",
    teamName: "",
    teamSize: "",
    paymentMethod: "",
  });

  const events = [
    "Parliamentary Debate",
    "Runway Renaissance",
    "CodeVinci Hackathon",
    "Baroque Ballet Battle",
    "Renaissance Reels",
    "Classical Symphony",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Please fill all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.event) {
        toast.error("Please select an event");
        return;
      }
      setStep(3);
    } else {
      toast.success("Registration Successful!", {
        description: "Check your email for confirmation and payment details.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        event: "",
        teamName: "",
        teamSize: "",
        paymentMethod: "",
      });
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Playfair_Display'] text-6xl text-[#660000] mb-4">
            Registration
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
          <p className="font-['EB_Garamond'] text-xl text-[#4A0000] max-w-3xl mx-auto">
            Join us in this Renaissance celebration. Fill the scroll to secure your place.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <motion.div
                  animate={{
                    scale: step === num ? 1.2 : 1,
                    backgroundColor: step >= num ? "#660000" : "#E8E4DB",
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                    step >= num ? "border-[#C9A227]" : "border-[#C9A227]/30"
                  }`}
                >
                  <span className={`font-['Playfair_Display'] ${
                    step >= num ? "text-white" : "text-[#4A0000]"
                  }`}>
                    {num}
                  </span>
                </motion.div>
                {num < 3 && (
                  <div className={`w-16 md:w-32 h-1 mx-2 ${
                    step > num ? "bg-[#C9A227]" : "bg-[#C9A227]/30"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 max-w-md mx-auto">
            <span className="font-['EB_Garamond'] text-sm text-[#4A0000]">Personal Info</span>
            <span className="font-['EB_Garamond'] text-sm text-[#4A0000]">Event Details</span>
            <span className="font-['EB_Garamond'] text-sm text-[#4A0000]">Payment</span>
          </div>
        </div>

        {/* Registration Form - Scroll Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#F5F1E8] to-[#EDE9E0] rounded-3xl p-8 md:p-12 border-4 border-[#C9A227] shadow-2xl">
            {/* Ornamental scroll edges */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#C9A227]/20 to-transparent rounded-t-2xl" />
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#C9A227]/20 to-transparent rounded-b-2xl" />
            
            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[#660000]/30 rounded-tl-2xl" />
            <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-[#660000]/30 rounded-tr-2xl" />
            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-[#660000]/30 rounded-bl-2xl" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[#660000]/30 rounded-br-2xl" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-6 text-center">
                    Personal Information
                  </h2>

                  <div className="space-y-2">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        College/University
                      </Label>
                      <Input
                        value={formData.college}
                        onChange={(e) => handleInputChange("college", e.target.value)}
                        placeholder="Your institution"
                        className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Year of Study
                      </Label>
                      <Input
                        value={formData.year}
                        onChange={(e) => handleInputChange("year", e.target.value)}
                        placeholder="e.g., 2nd Year"
                        className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Event Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-6 text-center">
                    Event Selection
                  </h2>

                  <div className="space-y-2">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000]">
                      Select Event *
                    </Label>
                    <Select value={formData.event} onValueChange={(value) => handleInputChange("event", value)}>
                      <SelectTrigger className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg">
                        <SelectValue placeholder="Choose an event" />
                      </SelectTrigger>
                      <SelectContent>
                        {events.map((event) => (
                          <SelectItem key={event} value={event} className="font-['EB_Garamond']">
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Team Name (if applicable)
                    </Label>
                    <Input
                      value={formData.teamName}
                      onChange={(e) => handleInputChange("teamName", e.target.value)}
                      placeholder="Enter your team name"
                      className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000]">
                      Team Size (if applicable)
                    </Label>
                    <Input
                      type="number"
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange("teamSize", e.target.value)}
                      placeholder="Number of team members"
                      min="1"
                      max="10"
                      className="border-2 border-[#C9A227]/40 focus:border-[#C9A227] bg-white/60 backdrop-blur-sm rounded-xl py-6 font-['EB_Garamond'] text-lg"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-6 text-center">
                    Payment Information
                  </h2>

                  <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] rounded-2xl p-6 text-white">
                    <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#E5C158]">
                      Registration Fee
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-['Playfair_Display']">₹500</span>
                      <span className="font-['EB_Garamond'] text-lg opacity-80">per participant</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="font-['EB_Garamond'] text-lg text-[#660000] flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Payment Method
                    </Label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["UPI", "Bank Transfer", "Card Payment", "Cash"].map((method) => (
                        <motion.button
                          key={method}
                          type="button"
                          onClick={() => handleInputChange("paymentMethod", method)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.paymentMethod === method
                              ? "bg-[#660000] text-white border-[#C9A227]"
                              : "bg-white/60 text-[#660000] border-[#C9A227]/40 hover:border-[#C9A227]"
                          }`}
                        >
                          <span className="font-['EB_Garamond'] text-lg">{method}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="bg-white/60 rounded-2xl p-6 border-2 border-[#C9A227]/40">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <QrCode className="w-5 h-5 text-[#660000]" />
                      <h3 className="font-['Playfair_Display'] text-xl text-[#660000]">
                        Scan to Pay
                      </h3>
                    </div>
                    <div className="bg-white rounded-xl p-8 flex items-center justify-center border-2 border-[#C9A227]/20">
                      <div className="text-center">
                        <div className="w-48 h-48 bg-[#4A0000]/10 rounded-xl flex items-center justify-center mb-4">
                          <QrCode className="w-32 h-32 text-[#660000]/30" />
                        </div>
                        <p className="font-['EB_Garamond'] text-sm text-[#4A0000]">
                          UPI ID: vizphoria@fest
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-[#C9A227] p-4 rounded">
                    <p className="font-['EB_Garamond'] text-sm text-[#4A0000]">
                      <strong>Note:</strong> After payment, save the transaction ID. You'll receive a confirmation email with further details.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1 py-6 rounded-full font-['EB_Garamond'] text-lg border-2 border-[#C9A227]/40 hover:border-[#C9A227] hover:bg-[#C9A227]/10"
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  className={`${step === 1 ? 'w-full' : 'flex-1'} bg-gradient-to-r from-[#660000] to-[#8B0000] hover:from-[#8B0000] hover:to-[#660000] text-white py-6 rounded-full font-['EB_Garamond'] text-lg border-2 border-[#C9A227] shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  {step === 3 ? (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Complete Registration
                    </span>
                  ) : (
                    "Next Step"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
