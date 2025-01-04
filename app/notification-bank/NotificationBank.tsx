import './NotificationBank.css'; 

export default function NotificationBank() {
  return (
    <div> 
      <div className="header-container">
        {/* Header content */}
      </div>

      <div className="blog-container">
        {/* Blog title content */}
      </div>

      <h2 className="blog-title">Calm</h2>
      <h3 className="notification-type">Notifications regarding limited time premium offers</h3>
      <div className="notification-container">
        <Image 
          src="/calm-notification-9.jpg" 
          alt="Calm Notification Premium Offer" 
          width={400} 
          height={400}
          className="notification-image"
        />
      </div>

      {/* Description h6 */}

      <h3 className="notification-type">Notifications about reccomended content</h3>
      <div className="notification-container">
        <Image src="/calm-notification-6.png" /* ... */ />
        <Image src="/calm-notification-7.jpg" /* ... */ />
      </div>

      <h3 className="notification-type">Reminders to check in, which I requested</h3>
      <div className="notification-container">
        <Image src="/calm-notification-15.png" /* ... */ />
      </div>

      <h3 className="notification-type">Notifications not neccessarily to get me in the app...</h3>
      <div className="notification-container">
        <Image src="/calm-notification-10.png" /* ... */ />
        <Image src="/calm-notification-8.jpg" /* ... */ />
        <Image src="/calm-notification-16.jpeg" /* ... */ />
      </div>
    </div>
  );
}