import React, { useState, useEffect } from "react";
import "../App.css";

const Medicines = ({ onBack }) => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    // Mock medicines data
    const mockMedicines = [
      {
        id: 1,
        name: "Paracetamol",
        price: "12,500",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0d?w=300&q=80",
        icon: "💊",
        description: "Og'riqqa qarshi dori",
      },
      {
        id: 2,
        name: "Aspirin",
        price: "15,000",
        image: "https://images.unsplash.com/photo-1585518419759-472ca3b24840?w=300&q=80",
        icon: "⚕️",
        description: "Yurak va asab tizimi uchun",
      },
      {
        id: 3,
        name: "Vitamin C",
        price: "18,500",
        image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=300&q=80",
        icon: "🥗",
        description: "Immunitetni mustahkamlash",
      },
      {
        id: 4,
        name: "Ibuprofen",
        price: "14,200",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0d?w=300&q=80",
        icon: "💉",
        description: "Turli xil og'riqlar uchun",
      },
      {
        id: 5,
        name: "Metformin",
        price: "22,000",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&q=80",
        icon: "🩺",
        description: "Shakar kasallik uchun",
      },
      {
        id: 6,
        name: "Lisinopril",
        price: "25,500",
        image: "https://images.unsplash.com/photo-1585518419759-472ca3b24840?w=300&q=80",
        icon: "❤️",
        description: "Bosim pasaytirilishi uchun",
      },
      {
        id: 7,
        name: "Omeprazole",
        price: "19,800",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0d?w=300&q=80",
        icon: "🍽️",
        description: "Oshqozonda kislota pasaytirilishi",
      },
      {
        id: 8,
        name: "Amoxicillin",
        price: "16,500",
        image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=300&q=80",
        icon: "🧬",
        description: "Antibiotic - infeksiyalar uchun",
      },
      {
        id: 9,
        name: "Cetirizine",
        price: "13,000",
        image: "https://images.unsplash.com/photo-1585518419759-472ca3b24840?w=300&q=80",
        icon: "🤧",
        description: "Allergiya kasalligi uchun",
      },
      {
        id: 10,
        name: "Atorvastatin",
        price: "28,000",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0d?w=300&q=80",
        icon: "🧪",
        description: "Kolesterin pasaytirilishi",
      },
      {
        id: 11,
        name: "Metoprolol",
        price: "20,500",
        image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=300&q=80",
        icon: "💓",
        description: "Yurak kasalligi uchun",
      },
      {
        id: 12,
        name: "Loratadine",
        price: "14,800",
        image: "https://images.unsplash.com/photo-1585518419759-472ca3b24840?w=300&q=80",
        icon: "😤",
        description: "Allergiya va bezasablichlik",
      },
    ];

    // Simulate API call
    setTimeout(() => {
      setMedicines(mockMedicines);
      setLoading(false);
    }, 500);
  }, []);

  const handleBuy = (medicineName) => {
    alert(`${medicineName} sizning savatga qo'shildi!`);
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="medicines-page">
      {/* Header */}
      <div className="medicines-header">
        <button className="back-button" onClick={onBack}>
          ← Orqaga
        </button>
        <h1>Dorilar Katalogi</h1>
        <p>Barcha dorilarni ko'rib oling va sotib oling</p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Dorilar yuklanmoqda...</p>
        </div>
      ) : (
        /* Medicines Grid */
        <div className="medicines-grid">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              {/* Image */}
              <div className="medicine-image-wrapper">
                {imageErrors[medicine.id] ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "64px",
                      background: "linear-gradient(135deg, #f4fff8 0%, #eef8ff 100%)",
                    }}
                  >
                    {medicine.icon}
                  </div>
                ) : (
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="medicine-image"
                    onError={() => handleImageError(medicine.id)}
                    loading="lazy"
                  />
                )}
              </div>

              {/* Content */}
              <div className="medicine-content">
                {/* Name */}
                <h3 className="medicine-name">{medicine.name}</h3>

                {/* Description */}
                <p className="medicine-description">{medicine.description}</p>

                {/* Footer - Price and Button */}
                <div className="medicine-footer">
                  <span className="medicine-price">{medicine.price} so'm</span>
                  <button
                    className="buy-button"
                    onClick={() => handleBuy(medicine.name)}
                  >
                    Sotib olish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Medicines;
