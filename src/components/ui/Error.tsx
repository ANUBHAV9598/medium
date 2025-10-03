import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white flex flex-col items-center justify-center px-4">
            {/* Error Code */}
            <h1 className="text-8xl md:text-9xl font-extrabold text-purple-600 mb-4 animate-pulse">
                404
            </h1>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
                The page you’re looking for doesn’t exist or has been moved. Try navigating back to the homepage.
            </p>

            {/* Button */}
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors font-medium"
            >
                <FiArrowLeft className="text-lg" />
                Go Back Home
            </button>

            {/* Optional Illustration */}
            <div className="mt-12 w-full max-w-lg">
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt="Error Illustration"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default Error;
