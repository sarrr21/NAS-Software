interface ShowcaseItemProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }
  
  const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ title, description, imageUrl, link }) => {
    return (
      <div className="p-4 border rounded-md hover:font-bold cursor-pointer" onClick={() => window.open(link, '_blank')}>
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-2" />
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ShowcaseItem;