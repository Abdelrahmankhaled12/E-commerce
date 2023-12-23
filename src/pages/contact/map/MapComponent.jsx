const MapComponent = () => {
    return (
        <iframe
            title="Google Maps Embed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37451031098!2d31.258464350000004!3d30.059488450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1703325959839!5m2!1sen!2seg"
            width="100%"
            height="600"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default MapComponent;
