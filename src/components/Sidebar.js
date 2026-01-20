import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  UserSearch, 
  MessageSquare, 
  Zap, 
  Briefcase, 
  BarChart3, 
  CreditCard,
  Phone
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Calendar, label: 'My Sessions', active: false },
    { icon: UserSearch, label: 'Search Practitioner', active: true },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: Zap, label: 'Actions', active: false },
    { icon: Briefcase, label: 'Toolkit', active: false },
    { icon: BarChart3, label: 'Insights', active: false },
    { icon: CreditCard, label: 'Billing', active: false },
  ];

  return (
    <div className="sidebar-container">
      {/* Background overlay shape */}
      <div className="sidebar-overlay"></div>
      
      {/* Logo */}
      <div className="sidebar-logo">
        <span className="logo-text">MEN</span>
        <span className="logo-tel">TEL</span>
      </div>

      {/* Navigation Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
            >
              <div className="icon-background">
                <Icon 
                  size={20} 
                  className={item.active ? 'icon-active' : 'icon-inactive'} 
                />
              </div>
              <span className={item.active ? 'text-active' : 'text-inactive'}>
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>

      {/* Helpline Button */}
      <div className="helpline-container">
        <button className="helpline-button">
          <Phone size={20} className="helpline-icon" />
          <span className="helpline-text">Helpline No.</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
