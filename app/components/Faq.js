'use client';
import { useState } from 'react';

import React from 'react';

const faqData = [
  {
    question:
      'When did the organization begin its operations, and what inspired its establishment?',
    answer:
      "Since 2017, we've empowered individuals to build self-directed lives, promoting freedom, inclusion, and well-being for all. Guided by our core value of enhancing human well-being, we prioritize the needs of the vulnerable and oppressed. Our aim? To see joy blossom on their faces – a testament to the transformative power of empowerment and service. We believe that serving others is not just an act of kindness, but a potent antidote to stress, enriching our lives through compassion. Join us in building a brighter future where everyone thrives.",
    open: false,
  },
  {
    question: "How can I stay updated on your NGO's activities?",
    answer:
      "Stay connected through our website's news section, social media channels, and newsletters. We regularly share updates, success stories, and upcoming events.",
    open: false,
  },
  {
    question: 'Can I track how my donations are being used?',
    answer:
      'Absolutely! We ensure transparency and accountability by providing regular updates on our website and through newsletters, showcasing how your donations are making a difference in our initiatives.',
    open: false,
  },
  {
    question: 'Can I suggest a project or collaborate with your NGO?',
    answer:
      'We appreciate collaborative efforts! Please reach out to us through our contact page with your project proposal or collaboration ideas. We value partnerships that align with our mission and vision.',
    open: false,
  },
];

const Faq = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <main>
      <div className="w-4/5  m-auto md:p-8 p-2 ">
        <h1 className="md:text-5xl text-4xl font-bold md:text-center my-4 text-centermx-auto  ">
          FAQ's
        </h1>
        {faqs.map((faq, i) => (
          <div
            className={`mb-4  cursor-pointer ${faq.open ? 'text-blue-500' : 'text-gray-500'
              }`}
            key={i}
            onClick={() => toggleFAQ(i)}
          >
            <div className="font-bold p-6 rounded-2xl text-white bg-purple">
              {faq.question}
            </div>
            <div
              className={` rounded-xl m-0 p-4 bg-[#57567D] text-white my-1 ${faq.open ? 'block' : 'hidden'
                }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Faq;
