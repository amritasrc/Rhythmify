# Rhythmify 🎵

Rhythmify is a lightweight music player built with React that allows users to search and play YouTube songs through a clean custom interface.

## Features

- Search songs using the YouTube Data API
- Auto-play first search result
- Display song thumbnail and title
- Custom play/pause controls
- Interactive seek bar
- Live playback progress tracking
- Keyboard shortcuts
  - `/` → Focus search box
  - `Space` → Play/Pause
- Responsive UI with Tailwind CSS

## Tech Stack

- React
- Vite
- YouTube Data API v3
- react-youtube
- Tailwind CSS
- React Icons

## How It Works

1. User searches for a song.
2. App fetches matching videos from YouTube.
3. First result is selected automatically.
4. Hidden YouTube player handles audio playback.
5. Custom controls interact with the YouTube IFrame API.
6. Playback progress updates every second.
