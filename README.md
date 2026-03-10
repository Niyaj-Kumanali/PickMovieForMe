# 🎬 Pick a Movie for Me
[https://pick-movie-for-me.vercel.app/](https://pick-movie-for-me.vercel.app/)

A smart movie recommendation web app built with **React**, **TypeScript**, and **Vite**. Browse movies by genre or top actors, search titles, and use the interactive quiz to find the perfect movie for your mood.

---

## ✨ Features

- **Movie Picker Quiz** — Answer 4 questions (mood, occasion, genre, era) to get a personalized movie recommendation
- **Browse by Genre** — Action, Comedy, Drama, Thriller, Adventure
- **Browse by Actor** — Tom Hanks, Leonardo DiCaprio, Brad Pitt, Robert De Niro
- **Search** — Search movies by title from any page
- **Movie Detail Page** — View movie info, rating, release year, and trailer section
- **Pagination** — Browse through large movie lists across multiple pages
- **Responsive Design** — Works on desktop and mobile

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| React Router v6 | Client-side routing |
| Axios | HTTP client |
| Remix Icons / FontAwesome | Icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repository
git clone <your-repo-url>
cd Movie_React_TS_App

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── App.tsx                  # Root layout (Navbar + Outlet + Footer)
├── main.tsx                 # Entry point
├── Router/
│   └── AppRouter.tsx        # All route definitions
├── Pages/
│   ├── Homepage/            # Landing page (Hero + HeroBottom)
│   ├── Movies/              # Genre/actor browsing with pagination
│   ├── MoviesDescription/   # Individual movie detail page
│   ├── Blog/                # Blog page
│   ├── ContactUs/           # Contact page
│   └── PrivacyPolicy/       # Privacy policy page
├── components/
│   ├── Navbar/              # Sticky glassmorphism navbar with search
│   ├── Footer/              # Footer with links
│   ├── Hero/                # Hero banner + Start Now button
│   ├── HeroBottom/          # Stats and description section
│   ├── Movie/               # Individual movie card component
│   ├── MovieRecommend/      # 4-step interactive quiz
│   ├── MovieDescribe/       # Movie detail tabs (desc / info / cast)
│   ├── MovieBanner/         # Movie backdrop banner
│   ├── MovieShare/          # Share section
│   └── WatchMovie/          # Trailer + Watch links section
└── data/
    ├── action.ts            # Action movies dataset
    ├── comedy.ts            # Comedy movies dataset
    ├── drama.ts             # Drama movies dataset
    ├── thriller.ts          # Thriller movies dataset
    ├── adventure.ts         # Adventure movies dataset
    └── blog.ts              # Blog posts data
```

---

## 🎯 How the Movie Picker Works

1. **Mood** — Choose how you're feeling (Happy / Meh / Sad)
2. **Occasion** — Solo night, movie night, date night, or family time
3. **Genre** — Pick a genre or hit "Surprise me!"
4. **Era** — New (2015+), Mid (2000–2015), Classic (pre-2000), or Any

Based on your answers, the app navigates you to the matching genre's movie list.

---

## 📝 Notes

- Movie data is stored as local static TypeScript files (no external API calls in the current version)
- The app uses IMDB-sourced movie data with ratings and poster images
- Actor filtering uses movie title keywords as a proxy (actual cast data is not included in the dataset)

---

## 📄 License

MIT
