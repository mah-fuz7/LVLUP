import { Camera, Mail, User } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const ProfilePage = () => {
    const{ user}=useContext(AuthContext)
    console.log(user)
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-500 mt-2">Manage your account information</p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            />
            <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full shadow-lg hover:bg-indigo-600 transition">
              <Camera size={20} />
            </button>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-5 mb-8">
          {/* Name */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <User size={18} className="mr-2 text-indigo-500" />
              Name
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
              {user?.displayName}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <Mail size={18} className="mr-2 text-indigo-500" />
              Email
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
              {user?.email}
            </div>
          </div>

          {/* Image Link */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <Link size={18} className="mr-2 text-indigo-500" />
              Image Link
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200 truncate">
              {user?.photoURL}
            </div>
          </div>
        </div>

        {/* Update Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
          Update Information
        </button>
      </div>
    </div>
    );
};

export default ProfilePage;