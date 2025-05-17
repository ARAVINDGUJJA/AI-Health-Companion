import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ChevronLeft } from "lucide-react";

const languagesettings = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("english"); // Default language

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Add logic to change the language of the application
    alert(`Language changed to ${language}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="mr-2" size={20} />
          Back to Settings
        </button>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Language Settings
          </h1>
          <p className="text-gray-600">
            Choose your preferred language for the application.
          </p>
        </div>

        {/* Language Options */}
        <div className="space-y-4">
          <button
            onClick={() => handleLanguageChange("english")}
            className={`w-full flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] ${
              selectedLanguage === "english" ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Globe size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-medium">English</h3>
                <p className="text-sm text-gray-500">Default language</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleLanguageChange("hindi")}
            className={`w-full flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] ${
              selectedLanguage === "hindi" ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Globe size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-medium">हिंदी</h3>
                <p className="text-sm text-gray-500">Hindi language</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default languagesettings;