export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#030014",
            },
            backgroundImage: {
                "hero-pattern": "url('/hero-bg.png')", // file is in /public
            },
        },
    },
    plugins: [],
};