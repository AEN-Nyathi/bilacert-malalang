import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)

/**
 * Submit form data to submissions table
 * @param serviceType - One of the 7 service types
 * @param data - Form submission data
 */
export async function submitForm(
  serviceType: string,
  data: {
    name: string
    email: string
    phone?: string
    message: string
    [key: string]: any
  }
) {
  // Separate service-specific fields from base fields
  const baseFields = ['name', 'email', 'phone', 'message']
  const serviceData: Record<string, any> = {}

  for (const [key, value] of Object.entries(data)) {
    if (!baseFields.includes(key)) {
      serviceData[key] = value
    }
  }

  try {
    const { data: submission, error } = await supabase
      .from('submissions')
      .insert({
        service_type: serviceType,
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        service_data: serviceData || {},
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      })
      .select()

    if (error) {
      console.error('Form submission error:', error)
      throw new Error(error.message)
    }

    return submission?.[0] || null
  } catch (error) {
    console.error('Supabase form submission failed:', error)
    throw error
  }
}

/**
 * Fetch submissions by service type (for public view)
 */
export async function getSubmissionByEmail(email: string, serviceType?: string) {
  try {
    let query = supabase
      .from('submissions')
      .select('*')
      .eq('email', email)

    if (serviceType) {
      query = query.eq('service_type', serviceType)
    }

    const { data, error } = await query.order('created_at', {
      ascending: false,
    })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Failed to fetch submission:', error)
    return null
  }
}

/**
 * Get all testimonials (for homepage)
 */
export async function getTestimonials() {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('verified', true)
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Failed to fetch testimonials:', error)
    return []
  }
}
