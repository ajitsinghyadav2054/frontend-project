import React from 'react';

const PromptCard = () => {
  const handleCreate = () => {
    console.log('Create Account clicked');
  };

  const handleDownload = () => {
    console.log('Download App clicked');
  };

  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <div className="rounded-2xl bg-gradient-to-r from-[#FBF7FF] via-[#F6FBFF] to-[#F6FFFB] p-5 sm:p-8 shadow-lg border border-solid border-transparent transition duration-300 ease-in-out transform md:hover:-translate-y-0.5 md:hover:shadow-xl hover:border-[#E9D5FF] focus-within:ring-4 focus-within:ring-[#d9c9ff]/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Start Your Child's Mindfulness Journey</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">Try it free. Build calm, focus, and kindness—one small practice a day.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
              <button
                onClick={handleCreate}
                className="inline-flex border-none cursor-pointer items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-[#824BFF] to-[#7B3DFE] text-white text-sm sm:text-base font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform md:hover:scale-105 md:hover:shadow-lg hover:from-[#7B3DFE] hover:to-[#6B21A8] focus:outline-none focus:ring-4 focus:ring-[#d9c9ff]/40 w-full sm:w-auto"
              >
                Create Account
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center border-none cursor-pointer gap-2 px-4 sm:px-5 py-2.5 bg-[#10B981] text-white text-sm sm:text-base font-semibold rounded-full shadow-sm transition-all duration-300 ease-in-out transform md:hover:scale-105 md:hover:shadow-md hover:bg-[#059669] focus:outline-none focus:ring-4 focus:ring-[#34d399]/30 w-full sm:w-auto"
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptCard;
