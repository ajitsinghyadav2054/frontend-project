import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const FreeTrialModal = ({ open, onClose, onSubmit }) => {
  const dialogRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    className: '',
    message: '',
  });

  useEffect(() => {
    if (!open) return;
    const first = dialogRef.current?.querySelector('input, textarea, select, button');
    first && first.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    } else {
      console.log('Free trial form submitted:', form);
    }
  toast.success('Thanks! We\'ll contact you shortly.');
    onClose?.();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-8 ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold leading-tight">Start your free trial</h3>
            <p className="text-sm text-gray-600 mt-1">Fill the form and we'll get back to you shortly.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="ml-2 p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#7B3DFE]/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
          <label className="block">
            <div className="text-xs font-medium text-gray-700 mb-1">Name</div>
            <input
              type="text"
              name="name"
              required
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <label className="block">
            <div className="text-xs font-medium text-gray-700 mb-1">Email</div>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <div className="text-xs font-medium text-gray-700 mb-1">Phone</div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-solid border-gray-200 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
              />
            </label>

            <label className="block">
              <div className="text-xs font-medium text-gray-700 mb-1">Class</div>
              <input
                type="text"
                name="className"
                required
                placeholder="e.g. Grade 3"
                value={form.className}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-solid border-gray-200 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
              />
            </label>
          </div>

          <label className="block">
            <div className="text-xs font-medium text-gray-700 mb-1">Message</div>
            <textarea
              name="message"
              rows="3"
              placeholder="Message (optional)"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#7B3DFE]/20"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#6F3CFF] to-[#7B3DFE] shadow-md overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#d9c9ff]/40"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full border-none group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden></span>
              <span className="relative z-10">Submit</span>
              <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeTrialModal;
