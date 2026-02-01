'use client';

import { useEffect, useState } from 'react';
import type { Testimonial } from '@/types';
import { createClient } from '@/lib/supabase/client';

declare global {
    interface Window {
        FB?: {
            XFBML: {
                parse: () => void;
            };
            init: (options: { xfbml: boolean; version: string }) => void;
        };
        fbAsyncInit?: () => void;
    }
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const supabase = createClient();

    useEffect(() => {
        const fetchTestimonials = async () => {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching testimonials:', error);
                return;
            }

            if (data) {
                setTestimonials(data.map(item => ({ 
                    id: item.id, 
                    postUrl: item.post_url, 
                    createdAt: item.created_at 
                })));
            }
        };

        fetchTestimonials();
    }, [supabase]);

    useEffect(() => {
        if (testimonials.length > 0) {
            if (window.FB && window.FB.XFBML) {
                window.FB.XFBML.parse();
            } else {
                window.fbAsyncInit = function () {
                    if(window.FB) {
                        window.FB.init({
                            xfbml: true,
                            version: 'v18.0'
                        });
                        window.FB.XFBML.parse();
                    }
                };
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s) as HTMLScriptElement; js.id = id;
                    js.src = "https://connect.facebook.net/en_US/sdk.js";
                    if (fjs && fjs.parentNode) {
                        fjs.parentNode.insertBefore(js, fjs);
                    } else {
                        d.head.appendChild(js);
                    }
                }(document, 'script', 'facebook-jssdk'));
            }
        }
    }, [testimonials]);

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="fb-root"></div>
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Trusted by South African Businesses
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        See what our clients say about our services
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="fb-post bg-white rounded-xl overflow-hidden"
                            data-href={t.postUrl}
                            data-width="500"
                            data-show-text="true"
                        >
                            <blockquote cite={t.postUrl} className="fb-xfbml-parse-ignore">
                                <a href={t.postUrl}>Post</a>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
