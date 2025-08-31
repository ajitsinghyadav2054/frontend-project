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
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold mb-2">Start your free trial</h3>
        <p className="text-sm text-gray-600 mb-4">Fill the form and we'll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="sr-only">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Phone number</span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Class</span>
            <input
              type="text"
              name="className"
              required
              placeholder="Class"
              value={form.className}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows="3"
              placeholder="Message (optional)"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30"
            />
          </label>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 cursor-pointer rounded-md text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 cursor-pointer bg-[#7B3DFE] text-white rounded-md font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeTrialModal;
