import React, { useState } from 'react'
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function ApiFetch(query) {
    const url =
        `https://www.googleapis.com/youtube/v3/search` +
        `?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(query)}` +
        `&key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch videos");
    }

    const data = await response.json();

    console.log(data.items);
    let ytdata =  data.items;
    return ytdata;

}

