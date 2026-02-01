
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/lib/supabase/supabase';
import { v4 as uuidv4 } from 'uuid';

import Link from 'next/link';

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function IcasasForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: 'ICASA Type Approval',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setFormError(null);

    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .insert([{ id: uuidv4(), ...formData, created_at: new Date().toISOString() }]);

      if (error) {
        throw error;
      }

      setSubmissionStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        serviceType: 'ICASA Type Approval',
        message: '',
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      setFormError('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Link href='/'>
          <img className='mx-auto h-12 w-auto' src='/logo.png' alt='Bilacert' />
        </Link>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          ICASA Type Approval Application
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-xl'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          {submissionStatus === 'success' ? (
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-green-600 mb-4'>Submission Successful!</h3>
              <p className='text-gray-700'>
                Thank you for your application. We will review your information and get back to you shortly.
              </p>
              <Link href='/'>
                <span className='mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors'>
                  Back to Home
                </span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
                  Full Name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='fullName'
                    id='fullName'
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                  Phone Number
                </label>
                <div className='mt-1'>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='companyName' className='block text-sm font-medium text-gray-700'>
                  Company Name (optional)
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='companyName'
                    id='companyName'
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                  Additional Information
                </label>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className='rounded-md bg-red-50 p-4'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <svg className='h-5 w-5 text-red-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-red-800'>{formError}</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type='submit'
                  disabled={submissionStatus === 'submitting'}
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50'
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
