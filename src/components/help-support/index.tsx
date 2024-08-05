import SupportCard from './SupportCard';

const supportList = [
  {
    icon: '/images/help.svg',
    title: 'FAQs',
    info: 'Find Answers under Frequently Asked Quesitons',
    link: '/tutor/support/faqs',
  },
  {
    icon: '/images/support.svg',
    title: 'Get Support',
    info: 'Send a message to our support team and get quick response',
    link: '/tutor/support/help',
  },
];

const HelpAndSupport = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-5 pb-4">
      {supportList.map((support) => (
        <SupportCard key={support.title} support={support} />
      ))}
    </div>
  );
};

export default HelpAndSupport;
