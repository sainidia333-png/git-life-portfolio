import dashboard from "../assets/dashboard.png";
import marketplace from "../assets/marketplace.png";
import productdetail from "../assets/productdetail.png";
import payment from "../assets/payment.png";

export default function ProjectGallery() {
  const images = [
    dashboard,
    marketplace,
    productdetail,
    payment,
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="project"
          className="rounded-xl border border-gray-700"
        />
      ))}
    </div>
  );
}