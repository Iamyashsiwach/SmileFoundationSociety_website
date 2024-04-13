/** @type {import('next').NextConfig} */
const nextConfig = {

};

module.exports = {
  env: {
    //RazorPay keys
    RAZORPAY_KEY: 'rzp_test_RkPa6eSDdWnkKn',
    RAZORPAY_SECRET: 'xlRf7zAOWQEGvCqjxNhr9gJJ',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
