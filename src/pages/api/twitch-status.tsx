import type { NextApiRequest, NextApiResponse } from "next";

const TWITCH_USER_ID = "169518813";

interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: "bearer";
}

interface ChannelResponse {
  data: Array<{
    broadcaster_language: string;
    display_name: string;
    game_id: string;
    id: string;
    is_live: boolean;
    thumbnail_url: string;
    title: string;
    started_at: string;
  }>;
}

export interface ChannelStatusResponse {
  isLive: boolean;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ChannelStatusResponse>
) => {
  try {
    const tokenRequestParams = new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: "client_credentials",
    });

    const tokenRequest = await fetch(
      `https://id.twitch.tv/oauth2/token?${tokenRequestParams}`,
      {
        method: "POST",
      }
    );

    const tokenRequestResponse: TokenResponse = await tokenRequest.json();

    const request = await fetch(
      "https://api.twitch.tv/helix/search/channels?query=h1roplays",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "client-id": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${tokenRequestResponse.access_token}`,
        },
      }
    );

    const statusResponse: ChannelResponse = await request.json();

    // Filter for my user id ...
    // Todo check if there is a way to get a channel by ID
    const channelStatus = statusResponse.data.filter(
      (channel) => channel.id === TWITCH_USER_ID
    )[0];

    const status = res.status(200).json({ isLive: channelStatus.is_live });
  } catch (error) {
    console.error(error);
    res.status(500).json({ isLive: false });
  }
};
