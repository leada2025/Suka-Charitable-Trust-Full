import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import AdminLayout from './Layouts.sx/AdminLayout';
import UsersPage from './pages/UserPage';
import PostsPage from './pages/PostPage';
import SettingsPage from './pages/SettingPage';
import ProtectedRoute from './components/ProtectedRoutes';
import NewsAdmin from './pages/NewsAdmin';
import EventsAdmin from './pages/EventAdmin';
import ManageStories from './pages/ManageStories';
import AdminFooter from './components/Footer';
import InquiryAdmin from './pages/Inquiries';
import ContactInfoAdmin from './pages/ContactInfoAdmin';
import AdminCareers from './pages/AdminCareers';
import AdminSubscriberList from './pages/AdminSubscriber';
import ResetPasswordPage from './pages/resetPassword';
import ForgotPasswordPage from './pages/ForgetPassword';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
       <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
       <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
       
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="news" element={<NewsAdmin />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="events" element={<EventsAdmin />} />
        <Route path="stories" element={<ManageStories />} />
         <Route path="inquiries" element={<InquiryAdmin />} />
          <Route path="contact-us" element={<ContactInfoAdmin />} />
          <Route path="careers" element={<AdminCareers />} />
          <Route path="subscribers" element={<AdminSubscriberList />} />

      </Route>
     
    </Routes>
    </>
  );
}

export default App;
