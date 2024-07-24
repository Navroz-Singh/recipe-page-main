/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    
    screens:{
        'phone':{'max' : '400px'}
    },
    
    extend: {
        fontFamily:{
            "serif": "Young Serif",
            "outfit":"Outfit",
        },
        
        backgroundColor:{
            "stone-150":"hsl(30, 18%, 87%)",
            "stone-100":"hsl(30, 54%, 90%)",
            "white":"white",
            "Stone-100": "hsl(30, 54%, 90%)",
            "Stone-150": "hsl(30, 18%, 87%)",
            "Stone-900": "hsl(24, 5%, 18%)",
            "Rose-800": "hsl(332, 51%, 32%)",
            "Rose-50":" hsl(330, 100%, 98%)",
            "Brown-800": "hsl(14, 45%, 36%)",
        },
        maxWidth:{
            "600":"600px",
            "screen":"100vw",
        },
        colors:{
            "Stone-100": "hsl(30, 54%, 90%)",
            "Stone-150": "hsl(30, 18%, 87%)",
            "Stone-900": "hsl(24, 5%, 18%)",
            "Rose-800": "hsl(332, 51%, 32%)",
            "Rose-50":" hsl(330, 100%, 98%)",
            "Brown-800": "hsl(14, 45%, 36%)",
        },
    },
  },
  plugins: [],
}

