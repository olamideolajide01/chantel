tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#333",
        secondary: "#E6A004",
        white: "#fff",
        accent: "#555",
        text: "#ccc",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1700px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
};
