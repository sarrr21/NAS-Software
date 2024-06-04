import ShowcaseItem from './ShowCaseItem';

const items = [
  {
    title: 'USSD Menu Manager UI',
    description: 'USSD Menu is a management UI for menus used in Equity Bank mobile banking system.',
    imageUrl:'/images/your-image1.png',
    link: 'https://github.com/your-repo1',
  },
  {
    title: 'Flutter-Ecom',
    description: '',
    imageUrl:  '/images/your-image2.png',
    link: 'https://github.com/your-repo2',
  },
  {
    title: 'Case Manager 2.0',
    description: '',
    imageUrl: '/images/your-image3.png',
    link: 'https://github.com/your-repo3',
  },
  {
    title: 'MidYaf',
    description: '',
    imageUrl:  '/images/your-image4.png',
    link: 'https://github.com/your-repo4',
  },
  {
    title: 'TME EDU ARD V2',
    description: 'User manual for TME Education Arduino board.',
    imageUrl: '/images/your-image5.png',
    link: 'https://github.com/your-repo5',
  },
];

const Showcase: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <ShowcaseItem
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Showcase;