import React from 'react';
import { 
  Home,
  Calendar,
  UserSearch, 
  MessageCircle,
  ClipboardList,
  Wrench,
  BarChart2,
  FileText,
  Phone,
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Calendar, label: 'My Sessions', active: false },
    { icon: UserSearch, label: 'Search Practitioner', active: true },
    { icon: MessageCircle, label: 'Messages', active: false },
    { icon: ClipboardList, label: 'Actions', active: false },
    { icon: Wrench, label: 'Toolkit', active: false },
    { icon: BarChart2, label: 'Insights', active: false },
    { icon: FileText, label: 'Billing', active: false },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-overlay"></div>
      
      <div className="sidebar-logo">
        <span className="logo-text">MEN</span>
        <span className="logo-tel">TEL</span>
      </div>

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
