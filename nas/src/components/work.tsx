import ProductCard from "./ProductCart";

const ProductList = () => {
  const products = [
    {
      image: 'path_to_construction_image',  // Replace with actual image path
      title: 'Construction 360',
      description: 'All In One Construction Management Software for Builders, Contractors, and Real Estate Developers.',
    },
    {
      image: 'path_to_litiga_image',  // Replace with actual image path
      title: 'LitigaEase',
      description: 'LitigaEase is a legal case management software that helps lawyers and law firms manage their cases, clients, and documents.',
    },
    {
      image: 'path_to_tokenhead_image',  // Replace with actual image path
      title: 'Tokenhead',
      description: 'A crypto, NFT collection wallet tracking application which is connected to an API.',
    },
  ];

  return (
    <div className="p-24">
      <div>
        <h1 className="text-yellow-500 font-semibold mb-4">Our Work</h1>
        <p className="text-slate-900 text-6xl font-bold mb-16">Our Latest Works</p>
        </div>
    <div className="grid md:grid-cols-3 gap-8 ">
    
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
