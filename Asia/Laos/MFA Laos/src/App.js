import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Announcements from './components/Announcements/Announcements';
import Aside from './components/Aside/Aside';
import Bilateral from './pages/International-Cooperation/Bilateral/Bilateral';
import Departments from './pages/The-Ministry/Departments/Departments';
import DiplomaticRelations from './pages/Foreign-Policy/Diplomatic Relations/DiplomaticRelations'
import Footer from './components/Footer/Footer';
import ForeignPolicy from './pages/Foreign-Policy/Foreign Policy/ForeignPolicy';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import LaoMissionsInAbroad from './pages/The-Ministry/Lao Mission in Abroad/LaoMissionsInAbroad';
import MassOrganization from './pages/The-Ministry/Mass Organization/MassOrganization';
import MOFALeaders from './pages/The-Ministry/MOFA Leaders/MOFALeaders';
import Multilateral from './pages/International-Cooperation/Multilateral/Multilateral';
import Navigation from './components/Navigation/Navigation';
import OrganizationalStructure from './pages/The-Ministry/Organizational Structure/OrganizationalStructure'

const App = () =>{
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Navigation />
                <main className='main p-5'>
                    <Aside />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/the-ministry/mofa-leaders' element={<MOFALeaders />} />
                        <Route path='/the-ministry/departments' element={<Departments />} />
                        <Route path='/the-ministry/overseas-mission' element={<LaoMissionsInAbroad />} />
                        <Route path='/the-ministry/organizational-structure' element={<OrganizationalStructure />} />
                        <Route path='/the-ministry/mass-organization' element={<MassOrganization />} />
                        <Route path='/foreign-policy/foreign-policy' element={<ForeignPolicy />} />
                        <Route path='/foreign-policy/diplomatic-relations' element={<DiplomaticRelations />} />
                        <Route path='/international-cooperation/bilateral' element={<Bilateral />} />
                        <Route path='/international-cooperation/multilateral' element={<Multilateral />} />
                    </Routes>
                    <Announcements />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;