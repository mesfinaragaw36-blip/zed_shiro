import { t } from "../../translations";
import "./PaymentMethods.css";

function PaymentMethods({ language }) {
  const paymentOptions = [
    {
      id: 'cash',
      title: t(language, 'cashTitle'),
      qrCode: '/image/cash-picture.jpg',
      accountNumber: t(language, 'cashPayment'),
      accountName: t(language, 'payAtCounter')
    },
    {
      id: 'telebirr',
      title: t(language, 'telebirrTitle'),
      qrCode: '/image/telebirr.png',
      accountNumber: '0913002858',
      accountName: 'Zewuditu Ngussie'
    },
    {
      id: 'cbe1',
      title: t(language, 'cbeAccount1Title'),
      qrCode: '/image/CBE-QR-1.jpg', 
      accountNumber: '1000304783862',
      accountName: 'Abate Aragaw'
    },
    {
      id: 'cbe2',
      title: t(language, 'cbeAccount2Title'),
      qrCode: '/image/CBE-QR-2.jpg', 
      accountNumber: '1000822711038',
      accountName: 'Zewuditu Ngussie'
    },
    {
      id: 'awash',
      title: t(language, 'awashBankTitle'),
      qrCode: '/image/Awashbank-QR.jpg', 
      accountNumber: '01320000000000',
      accountName: 'Zewuditu Ngussie'
    },
    {
      id: 'amhara',
      title: t(language, 'amharaBankTitle'),
      qrCode: '/image/Amharabank-QR.jpg', 
      accountNumber: '1110000000000',
      accountName: 'Zewuditu Ngussie'
    }
  ];

  return (
    <section className="payment-methods-section" id="payment-methods">
      <div className="container">
        <div className="section-header">
          <h2 className="section-heading">{t(language, 'paymentMethodsHeading')}</h2>
          <p className="section-subheading">{t(language, 'paymentMethodsSubheading')}</p>
        </div>
        <div className="payment-grid">
          {paymentOptions.map((option) => (
            <div key={option.id} className="payment-card">
              <h3 className="payment-title">{option.title}</h3>
              <div className="payment-qr">
                <img 
                  src={option.qrCode} 
                  alt={`${option.title} ${option.id === 'cash' ? '' : 'QR Code'}`}
                  onError={(e) => {
                    e.target.src = '/image/cash-picture.jpg';
                    e.target.style.objectFit = 'contain';
                  }}
                />
                {option.id !== 'cash' && (
                  <p className="scan-text">{t(language, 'scanToPay')}</p>
                )}
              </div>
              <div className="payment-info">
                <div className="info-row">
                  <span className="info-label">
                    {option.id === 'cash' ? t(language, 'paymentType') : t(language, 'accountNumber')}:
                  </span>
                  <span className="info-value">{option.accountNumber}</span>
                </div>
                {option.id !== 'cash' && (
                  <div className="info-row">
                    <span className="info-label">{t(language, 'accountName')}:</span>
                    <span className="info-value">{option.accountName}</span>
                  </div>
                )}
                {option.id === 'cash' && (
                  <div className="info-row">
                    <span className="info-label">{t(language, 'location')}:</span>
                    <span className="info-value">{option.accountName}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;
