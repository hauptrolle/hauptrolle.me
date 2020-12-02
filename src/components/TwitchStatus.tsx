import useSWR from "swr";
import { Box, Tooltip } from "@chakra-ui/react";

import { ChannelStatusResponse } from "../pages/api/twitch-status";

export const TwitchStatus = () => {
  const { data } = useSWR<ChannelStatusResponse>("/api/twitch-status");
  const bgColor = data?.isLive ? "red.500" : "gray.600";
  const label = data?.isLive
    ? "Hey, I'm now live on twitch ✌️"
    : "I'm currently not live 🙁";

  return (
    <Tooltip
      hasArrow={true}
      label={label}
      aria-label="Twitch Channel Status"
      bg={"gray.900"}
      color={"white"}
    >
      <Box
        cursor={"pointer"}
        as={"span"}
        mx={2}
        w={3}
        h={3}
        display={"inline-block"}
        rounded={"full"}
        bg={bgColor}
        transition={"background-color 0.3s ease"}
        animation={data?.isLive ? "pulse-live 2s infinite" : undefined}
      />
    </Tooltip>
  );
};
