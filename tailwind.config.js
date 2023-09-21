import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        dropDownName: "dropDownName 1s ease-out 1s 1 normal both",
        navLinks: "navLinks 0.5s ease-in-out 0.5s 1 normal both",
        navLinks2: "navLinks 0.5s ease-in-out 0.75s 1 normal both",
        navLinks3: "navLinks 0.5s ease-in-out 1s 1 normal both",
      },
      colors: {
        wineBerry: {
          50: "#fdf4f3",
          100: "#fbeae8",
          200: "#f6d7d5",
          300: "#efb6b2",
          400: "#e58b87",
          500: "#d75f5c",
          600: "#c13d41",
          700: "#a22e34",
          800: "#882931",
          900: "#662129",
        },
        "eastern-blue": {
          50: "#eefbfd",
          100: "#d5f4f8",
          200: "#b0e8f1",
          300: "#79d5e7",
          400: "#3bbbd5",
          500: "#1f9dba",
          600: "#1d7f9d",
          700: "#1e6780",
          800: "#215569",
          900: "#1f485a",
          950: "#0f2e3d",
        },
        "fountain-blue": {
          50: "#f0fbfb",
          100: "#daf3f3",
          200: "#b9e6e8",
          300: "#89d4d7",
          400: "#61bec4",
          500: "#369ca4",
          600: "#307f8a",
          700: "#2c6872",
          800: "#2b565f",
          900: "#284951",
          950: "#162f36",
        },
        "cold-purple": {
          50: "#f2f4fb",
          100: "#e8ebf7",
          200: "#d4dbf1",
          300: "#bac3e7",
          400: "#9ba2da",
          500: "#8688ce",
          600: "#6f6dbe",
          700: "#605ba7",
          800: "#4f4c87",
          900: "#43426d",
          950: "#28273f",
        },
        jade: {
          50: "#f4f9f8",
          100: "#dcebe9",
          200: "#8dbbb7",
          300: "#efb6b2",
          400: "#8dbbb7",
          500: "#4b817f",
          600: "#3a6766",
          700: "#325353",
          800: "#2b4344",
          900: "#273a3a",
        },
        "albescent-white": {
          50: "#fcf7f0",
          100: "#f4e6d0",
          200: "#eed8ba",
          300: "#e3bc8e",
          400: "#d79b60",
          500: "#ce8141",
          600: "#c06a36",
          700: "#9f532f",
          800: "#80442c",
          900: "#683a26",
          950: "#381c12",
        },
        "golden-dream": {
          50: "#fdfde9",
          100: "#fbfac6",
          200: "#f8f390",
          300: "#f4e650",
          400: "#f0d938",
          500: "#debc14",
          600: "#c0940e",
          700: "#996b0f",
          800: "#7f5514",
          900: "#6c4517",
          950: "#3f2409",
        },
        wisteria: {
          50: "#fbf8fc",
          100: "#f5eff8",
          200: "#ede2f2",
          300: "#dfcae8",
          400: "#caa8d8",
          500: "#b585c7",
          600: "#a775b9",
          700: "#89559b",
          800: "#734980",
          900: "#5d3c67",
        },
        trendyPink: {
          50: "#fbf8fb",
          100: "#f6f0f7",
          200: "#ece0ee",
          300: "#dec7e0",
          400: "#cba5cd",
          500: "#b280b5",
          600: "#8e5d90",
          700: "#7b4f7c",
          800: "#664266",
          900: "#563956",
        },
        burntUmber: {
          50: "#fdf3f3",
          100: "#fbe8e8",
          200: "#f7d4d6",
          300: "#f0b1b5",
          400: "#e7858d",
          500: "#da5967",
          600: "#c5394f",
          700: "#a52b41",
          800: "#8e273d",
          900: "#772438",
        },
        "citrine-white": {
          50: "#fcf8eb",
          100: "#f7eece",
          200: "#eeda99",
          300: "#e5c264",
          400: "#dfad40",
          500: "#d6902a",
          600: "#bd7022",
          700: "#9e521f",
          800: "#81411f",
          900: "#6a361d",
          950: "#3c1b0c",
        },
        "del-rio": {
          50: "#f9f7f7",
          100: "#f3eded",
          200: "#eadede",
          300: "#dac7c7",
          400: "#c4a5a5",
          500: "#af8a8a",
          600: "#956d6d",
          700: "#7c5959",
          800: "#684c4c",
          900: "#594343",
          950: "#2e2121",
        },
        heather: {
          50: "#f5f7f9",
          100: "#e8ecf1",
          200: "#d6dfe7",
          300: "#bccad7",
          400: "#99adc1",
          500: "#8095b1",
          600: "#6e80a2",
          700: "#627193",
          800: "#545e79",
          900: "#464e62",
          950: "#2e323d",
        },
        rust: {
          50: "#faf5f0",
          100: "#f0e3d5",
          200: "#dfc6a8",
          300: "#cea67b",
          400: "#c28c5d",
          500: "#b77249",
          600: "#ad6042",
          700: "#874436",
          800: "#6f3831",
          900: "#5c302b",
        },
        casal: {
          50: "#f3faf7",
          100: "#d7f0e8",
          200: "#afe0d0",
          300: "#7fc9b4",
          400: "#54ad96",
          500: "#3a927c",
          600: "#2b7161",
          700: "#275e52",
          800: "#234c43",
          900: "#21403a",
          950: "#0e2521",
        },
        tango: {
          50: "#fef6ee",
          100: "#fdead7",
          200: "#f9d1af",
          300: "#f5b17c",
          400: "#f08647",
          500: "#eb5e18",
          600: "#dd4d19",
          700: "#b83816",
          800: "#922f1a",
          900: "#762918",
          950: "#40120a",
        },

        "pirate-gold": {
          50: "#fefbe8",
          100: "#fef7c3",
          200: "#feeb8a",
          300: "#fed946",
          400: "#fbc314",
          500: "#ebaa07",
          600: "#b97703",
          700: "#a25c06",
          800: "#85480e",
          900: "#713b12",
          950: "#421e06",
        },
        nero: {
          50: "#fff3e4",
          100: "#ffe8c5",
          200: "#ffd792",
          300: "#ffc553",
          400: "#fcb81f",
          500: "#e2a000",
          600: "#b58600",
          700: "#896602",
          800: "#6c5308",
          900: "#5b490c",
          950: "#141000",
        },
        sun: {
          50: "#fffbeb",
          100: "#fff4c6",
          200: "#fee889",
          300: "#fed64b",
          400: "#fec221",
          500: "#f8a30d",
          600: "#dc7903",
          700: "#b65507",
          800: "#94410c",
          900: "#79360e",
          950: "#461b02",
        },
        "san-marino": {
          50: "#f2f5fc",
          100: "#e1e9f8",
          200: "#cad9f3",
          300: "#a6c1ea",
          400: "#7ca1de",
          500: "#5d82d4",
          600: "#4968c7",
          700: "#3e55b4",
          800: "#384895",
          900: "#323e76",
          950: "#222849",
        },
        paradiso: {
          50: "#f3faf9",
          100: "#d7f0ef",
          200: "#afe0df",
          300: "#7fc9c8",
          400: "#54aaad",
          500: "#3c9195",
          600: "#2d6f74",
          700: "#27595e",
          800: "#23494c",
          900: "#213d40",
          950: "#0e2225",
        },
        tapestry: {
          50: "#faf5f8",
          100: "#f6edf1",
          200: "#eedce4",
          300: "#e0c1cf",
          400: "#cd99b0",
          600: "#a9667e",
          700: "#8c4a60",
          800: "#744051",
          900: "#623945",
          950: "#3a1d26",
        },
        tutu: {
          50: "#fff7fc",
          100: "#ffe3f6",
          200: "#ffc7ed",
          300: "#ff99dd",
          400: "#ff5ac4",
          500: "#ff2aaa",
          600: "#fc0687",
          700: "#dc006a",
          800: "#b50056",
          900: "#96054b",
          950: "#5d0028",
        },
      },
      keyframes: {
        dropDownName: {
          from: {
            transform: "translateY(-100px)",
            opacity: 0.2,
          },
          "40%": {
            opacity: 0.5,
          },
          "60%": {
            opacity: 0.75,
          },
          "80%": {
            opacity: 0.9,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        navLinks: {
          from: {
            transform: "translate(-100px, 100px)",
            opacity: 0.0,
          },
          "20%": {
            transform: "translate(-75px, 80px)",
            opacity: 0.25,
          },
          "50%": {
            transform: "translate(-50px, 50px)",
            opacity: 0.5,
          },
          "75%": {
            transform: "translate(-25px, 25px)",
            opacity: 0.75,
          },
          to: {
            transform: "translate(0)",
            opacity: 1,
          },
        },
      },
      spacing: {
        "44r": "44rem",
      },
      fontFamily: {
        sans: "'Montserrat', sans-serif",
        lora: " 'Lora, serif",
        caudex: "'Caudex', serif",
        monteserrat: "'Montserrat', sans-serif",
        roboto: "'Roboto', serif",
        cedarville: "'Cedarville Cursive', cursive",
        adelia: ["ADELIA", "cursive"],
        adlery: "'Adlery Swash Trial', sans-serif",
        brightwall: "'Brightwall', serif",
        daydream: "'Daydream', serif",
      },
      backgroundImage: {
        celebration: "url('src/assets/congratulations-7600_512.gif')",
        anu: "url('./assets/Centregif.gif')",
        ourStory: "url('src/assets/IMG_20190924_113403.jpg')",
        rsvp: "url('src/assets/PXL_20210527_101300826.jpg')",
      },
    },
  },
  plugins: [],
};
