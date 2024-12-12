# MovieNest

MovieNest is a React-based movie management application built with Vite. It allows users to browse movies, manage a watchlist, and interact with movies using features like pagination, sorting, filtering, and searching.

## Features

- 🎬 **Fetch movies from IMDb Movie API**: Display popular and trending movies.
- 🎨 **Tailwind CSS for styling**: A modern and responsive UI.
- ⚛️ **React Hooks**: Utilizes `useState` and `useEffect` for state and lifecycle management.
- 📄 **Pagination**: Browse through movies with seamless pagination.
- 🖱️ **Watchlist Management**:
  - Add movies to the watchlist with a single click.
  - Remove movies with a double-click.
  - Persist the watchlist using LocalStorage.
  - Proper arrangement and sorting of the watchlist based on popularity.
- 🔍 **Filter and Search**:
  - Filter movies by genre.
  - Search movies by name.

## Tech Stack

- **React.js**: Component-based architecture for building the UI.
- **Vite**: A fast development environment and build tool.
- **Tailwind CSS**: For responsive and modern styling.
- **IMDb Movie API**: For fetching movie data.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movienest.git
   cd movienest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the root directory and add your IMDb Movie API key:

```
VITE_API_KEY=your_api_key_here
```

## Usage

1. **Browse Movies**: Explore movies with pagination.
2. **Add to Watchlist**: Click on a movie to add it to your watchlist.
3. **Remove from Watchlist**: Double-click a movie in the watchlist to remove it.
4. **Sort and Filter**:
   - Sort movies by popularity.
   - Filter movies by genre.
5. **Search Movies**: Use the search bar to find movies by name.

## Project Structure

```
movienest/
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable React components
│   ├── pages/      # Page components
│   ├── styles/     # Tailwind CSS customizations
│   ├── utils/      # Helper functions and API calls
│   └── App.jsx     # Root component
└── vite.config.js  # Vite configuration
```

## Future Enhancements

- Add user authentication for personalized watchlists.
- Implement movie trailers and detailed descriptions.
- Add support for multiple languages.

## Acknowledgments

- [IMDb Movie API](https://www.imdb.com/interfaces/) for movie data.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [React.js](https://reactjs.org/) for the framework.
