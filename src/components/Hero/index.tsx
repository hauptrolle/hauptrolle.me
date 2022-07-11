import {
  Button,
  chakra,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { SiGithub, SiTwitter } from "react-icons/si";

import avatarUrl from "../../../public/avatar.png";
import { GITHUB_PROFILE, TWITTER_PROFILE } from "../../constants";

const AvatarImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "layout",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

export const Hero = () => {
  return (
    <VStack spacing={4} alignItems="flex-start">
      <AvatarImage
        src={avatarUrl}
        alt="Memoji of me"
        priority
        quality={100}
        height={81}
        width={64}
        placeholder="blur"
      />

      <Heading size="lg" as="h1">
        Hi, I’m Achim
      </Heading>

      <Text lineHeight={1.75} as="h2">
        A self taught <strong>frontend developer & web designer</strong> from
        Hessen/Germany. I love building products that are{" "}
        <strong>user friendly</strong> and <strong>performant</strong>. If you
        want to know more about me, feel free to check out my social media.
      </Text>

      <HStack spacing={4}>
        <NextLink href={GITHUB_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiGithub />}>
            GitHub
          </Button>
        </NextLink>
        <NextLink href={TWITTER_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiTwitter />}>
            Twitter
          </Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
