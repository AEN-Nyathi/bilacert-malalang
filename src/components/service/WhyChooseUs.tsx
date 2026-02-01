import { Shield, Users, Clock } from 'lucide-react';

const benefits = [
    {
        icon: <Clock className='h-6 w-6' />,
        title: 'Efficient Processing',
        description: 'Streamlined applications and proactive problem-solving to minimize delays and maximize success rates.',
    },
    {
        icon: <Shield className='h-6 w-6' />,
        title: 'Regulatory Expertise',
        description: 'In-depth knowledge of ICASA and NRCS regulations to ensure your applications are accurate and complete.',
    },
    {
        icon: <Users className='h-6 w-6' />,
        title: 'Client-Centric Approach',
        description: 'Personalized support and clear communication throughout your compliance journey.',
    },
];

export  function WhyChooseUs() {
    return (
        <section className='py-20 bg-secondary-gray'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
                        Why Choose Bilacert?
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        We make compliance simple, efficient, and stress-free for businesses of all sizes
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className='text-center'>
                            <div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                                <div className='text-accent'>{item.icon}</div>
                            </div>
                            <h3 className='text-xl font-semibold text-primary mb-4'>{item.title}</h3>
                            <p className='text-gray-600'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
