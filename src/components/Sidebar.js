import React, { useEffect, useState } from 'react';
// import { Button } from '../components';
import * as lucideReact from 'lucide-react';
import { FiPlus, FiTool, FiStar, FiSliders, FiBookOpen, FiUsers, FiHelpCircle, FiMessageSquare } from 'react-icons/fi';
import '../styles/Sidebar.css';

const Sidebar = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [menuOption, setMenuOption] = useState(false);
    const menuItems = [
        { label: 'Create New Post', icon: <lucideReact.SquarePen size={24} strokeWidth={2.25} /> },
        { label: 'Services', icon: <lucideReact.List size={24} strokeWidth={2.25} /> },
        { label: 'Reviews', icon: <lucideReact.FileClock size={24} strokeWidth={2.25} /> },
        { label: 'DIY', icon: <lucideReact.Handshake size={24} strokeWidth={2.25} /> },
        { label: 'Stories', icon: <lucideReact.CircleFadingPlus size={24} strokeWidth={2.25} /> },
        { label: 'Groups', icon: <lucideReact.UsersRound size={24} strokeWidth={2.25} /> },
        { label: 'Q&A', icon: <lucideReact.MessageCircleQuestion size={24} strokeWidth={2.25} /> },
        { label: 'Q&Chats', icon: <lucideReact.MessageSquareMore size={24} strokeWidth={2.25} /> }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
            setMenuOption(false); // Close menu on resize
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openMenu = () => {
        setMenuOption(!menuOption);
    }

    return (
        <div className="sidebar-container">
            {/* Create New Post Button (Big Box) */}
            <div className="big-box">
                <FiPlus className="big-box-icon" />
                <span>Create New Post</span>
            </div>

            {/* Menu Items (Small Boxes) */}
            <div className="sidebar-menu">
                <div className="small-box">
                    <FiTool className="small-box-icon" />
                    <span>Services</span>
                </div>
                <div className="small-box">
                    <FiStar className="small-box-icon" />
                    <span>Reviews</span>
                </div>
                <div className="small-box">
                    <FiSliders className="small-box-icon" />
                    <span>DIY</span>
                </div>
                <div className="small-box">
                    <FiBookOpen className="small-box-icon" />
                    <span>Stories</span>
                </div>
                <div className="small-box">
                    <FiUsers className="small-box-icon" />
                    <span>Groups</span>
                </div>
                <div className="small-box">
                    <FiHelpCircle className="small-box-icon" />
                    <span>Q&A</span>
                </div>
                <div className="small-box">
                    <FiMessageSquare className="small-box-icon" />
                    <span>Chats</span>
                </div>
            </div>
        </div>



    //  <>
            
    //         <aside className={`${isMobile ? 'h-8vh' : 'space-y-4'} w-full lg:w-1/5 p-4 bg-gray-900`}>
    //             <div className="header-title text-orange-500 text-2xl font-bold flex items-end gap-4">Logo <lucideReact.Menu onClick={openMenu}/></div>
    //             {
    //                 menuOption || !isMobile ?
    //                 <div className={`${isMobile ? 'fixed w-screen h-screen left-0 top-8vh bottom-0 bg-gray-900 space-y-2' : ''}`}>
    //                     {menuItems.map((item) => (
    //                         <Button className="w-full flex justify-start items-center text-white p-4 gap-4" variant="ghost" key={item}> {item.icon} {item.label}</Button>
    //                     ))}
    //                 </div> : null
    //             }
                
                
    //         </aside>
    //     </>

    );
};

export default Sidebar;