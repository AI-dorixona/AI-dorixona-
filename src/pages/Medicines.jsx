import React, { useState, useEffect } from "react";
import "../App.css";

const Medicines = ({ onBack }) => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});

  useEffect(() => {
    // Mock medicines data with optimized images
    const mockMedicines = [
      {
        id: 1,
        name: "Paracetamol",
        price: "12,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OyFFfRyemQvK5oraLp0L8gPfY0BEOFe4hhCucUORkw&s=100",
        icon: "💊",
        description: "Og'riqqa qarshi dori",
      },
      {
        id: 2,
        name: "Aspirin",
        price: "15,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eoesA131Xols-djwni5kN5ntwuksd08VMRzXOFt6FQ&s=60",
        icon: "⚕️",
        description: "Yurak va asab tizimi uchun",
      },
      {
        id: 3,
        name: "Vitamin C",
        price: "18,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYPmhejtnvkXpiqKYsLmZD3ZNdvmDhMX9SdDGU4U7mg&s=100",
        icon: "🥗",
        description: "Immunitetni mustahkamlash",
      },
      {
        id: 4,
        name: "Ibuprofen",
        price: "14,200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClsIU0-Qm-Md58p7pZ4dRYsvwQH0wFdiay3sNSjULxg&s=10",
        icon: "💉",
        description: "Turli xil og'riqlar uchun",
      },
      {
        id: 5,
        name: "Metformin",
        price: "22,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQEwijb9i7OXllDzkqTmBH9B9GMtKj4i_27LBTk_OiQ&s=10",
        icon: "🩺",
        description: "Shakar kasallik uchun",
      },
      {
        id: 6,
        name: "Lisinopril",
        price: "25,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ET7n7PHNkDm76hN1uHWU3p5eb78fds4Ri2vdpktwsw&s=10",
        icon: "❤️",
        description: "Bosim pasaytirilishi uchun",
      },
      {
        id: 7,
        name: "Omeprazole",
        price: "19,800",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmjk-zLQSYJeLS2O7bog019MCkuNVeMjL6Dk1VE-WoQ&s=10",
        icon: "🍽️",
        description: "Oshqozonda kislota pasaytirilishi",
      },
      {
        id: 8,
        name: "Amoxicillin",
        price: "16,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4DXUd0iYrovQIMhNjdXu0ztl8xNu9f4UlKjVIwxKjA&s=10",
        icon: "🧬",
        description: "Antibiotic - infeksiyalar uchun",
      },
      {
        id: 9,
        name: "Cetirizine",
        price: "13,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-L5be_G8GVm9wJ0U0WjWNbeF5X1jPvyrj-OwZizJVA&s=10",
        icon: "🤧",
        description: "Allergiya kasalligi uchun",
      },
      {
        id: 10,
        name: "Atorvastatin",
        price: "28,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WZF3K7bVSqhvuiHIgbSoIKIV1MJYS5RlrCvKGhC3SA&s=10",
        icon: "🧪",
        description: "Kolesterin pasaytirilishi",
      },
      {
        id: 11,
        name: "Metoprolol",
        price: "20,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31tPkCrmY99YFeV7Boqc6G5GbagGX-V0ZE98Sa0WpPQ&s=10",
        icon: "💓",
        description: "Yurak kasalligi uchun",
      },
      {
        id: 12,
        name: "Loratadine",
        price: "14,800",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09IdrmAlCsDxYWHVkogPCEvWAI-9hwPDI5zoNOyhAWA&s=10",
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

  const handleImageLoad = (id) => {
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handleImageLoadStart = (id) => {
    setImageLoading((prev) => ({
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
                  <>
                    {imageLoading[medicine.id] && (
                      <div
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(135deg, #f0f5f3 0%, #e8f1f0 100%)",
                          zIndex: 1,
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "3px solid #1F9D6B",
                            borderTop: "3px solid #0B3D4D",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                      </div>
                    )}
                    <img
                      src={medicine.image}
                      alt={medicine.name}
                      className="medicine-image"
                      onError={() => handleImageError(medicine.id)}
                      onLoad={() => handleImageLoad(medicine.id)}
                      onLoadStart={() => handleImageLoadStart(medicine.id)}
                      loading="eager"
                      style={{
                        opacity: imageLoading[medicine.id] ? 0 : 1,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  </>
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
