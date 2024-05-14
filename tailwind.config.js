/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "primary-25": "#f5faff",
        "gray-200": "#eaecf0",
        "color-gray-900": "#101828",
        "color-primary-600": "#1570ef",
        "color-gray-500": "#667085",
        "color-gray-300": "#d0d5dd",
        "color-gray-400": "#98a2b3",
        "color-gray-600": "#475467",
        "gray-700": "#344054",
      },
      spacing: {},
      fontFamily: {
        oktah: "Oktah",
        "caption-regular": "'DM Sans'",
      },
      borderRadius: {
        sm: "14px",
        "9xl": "28px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
