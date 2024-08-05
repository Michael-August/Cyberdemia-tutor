'use client';

import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import { faqsArray } from '../../../utils/constant/faqs';
import Breadcrumb from '../ui/breadcrumb';

const breadcrumbs = [
  {
    url: '/tutor/support',
    name: 'Help & Support',
  },
  {
    url: '',
    name: 'FAQs',
  },
];

const Faqs = () => {
  const [faqs, setFaqs] = useState(faqsArray);

  const toggleFaq = (faqId: number) => {
    const updatedFaqs = faqs.map((faq) =>
      faq.id === faqId ? { ...faq, expanded: !faq.expanded } : faq,
    );
    setFaqs(updatedFaqs);
  };

  return (
    <div>
      <div className="breadcrumbs">
        <Breadcrumb breadcrumbsArray={breadcrumbs} />
      </div>
      <div className="faqs mt-8">
        <div className="questions">
          {faqs.map((faq: any) => (
            <div
              key={faq.id}
              className="border-t border-solid border-cp-secondary"
            >
              <div
                className="question-head flex items-center justify-between py-5 cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-sm font-medium text-[#000000]">
                  {faq.question}
                </span>
                {faq.expanded ? (
                  <IoChevronUp size={22} className="text-cp-secondary" />
                ) : (
                  <IoChevronDown size={22} className="text-cp-secondary" />
                )}
              </div>
              {faq.expanded && (
                <div className=" ">
                  <span className="text-xs font-normal  text-[#000000B2]">
                    {faq.answer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
