'use client'

import { submitForm } from '@/lib/supabase-client'
import { FormEvent, useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  boatName: string
  boatRegistration: string
}

export default function SkiBoatVhfLicensingForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    boatName: '',
    boatRegistration: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.boatName || !formData.boatRegistration) {
        throw new Error('Please fill in all required fields')
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Submit form to Supabase
      await submitForm('ski-boat-vhf-licensing', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        boatName: formData.boatName,
        boatRegistration: formData.boatRegistration,
        message: 'Ski Boat VHF Licensing Application',
      })

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        boatName: '',
        boatRegistration: '',
      })

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Ski Boat VHF Licensing
          </h1>
          <p className="text-gray-600">
            Apply for VHF radio licensing for your ski boat. Fill out the form below and our team
            will process your application.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h3 className="font-medium text-green-800">Application Submitted Successfully</h3>
                <p className="text-sm text-green-700">
                  We have received your application. You will receive a confirmation email shortly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-red-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <div>
                <h3 className="font-medium text-red-800">Error</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>

            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="John Smith"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="+27 21 555 0001"
              />
            </div>
          </div>

          {/* Boat Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Boat Information</h2>

            {/* Boat Name Field */}
            <div className="mb-6">
              <label htmlFor="boatName" className="block text-sm font-medium text-gray-700 mb-2">
                Boat Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="boatName"
                name="boatName"
                value={formData.boatName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="e.g., Seabreeze"
              />
            </div>

            {/* Boat Registration Number Field */}
            <div className="mb-6">
              <label
                htmlFor="boatRegistration"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Boat Registration Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="boatRegistration"
                name="boatRegistration"
                value={formData.boatRegistration}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="e.g., SB-2024-001"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            <span className="text-red-500">*</span> Required fields
          </p>
        </form>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-700 mb-3">
            If you have questions about VHF licensing requirements, please contact our support team:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@bilacert.co.za"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              📧 support@bilacert.co.za
            </a>
            <a href="tel:+27215550000" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              📞 +27 21 555 0000
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
