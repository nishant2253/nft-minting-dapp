import Placeholder1 from "@/assets/placeholders/bear-1.png";
import Placeholder2 from "@/assets/placeholders/bear-2.png";
import Placeholder3 from "@/assets/placeholders/bear-3.png";
// import Placeholder1 from "@/assets/placeholders/uncle1.jpg";

export const config: Config = {
  // TODO: Fill in your collection id
  collection_id: "hellp",

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://x.com/nishant_2253",
    homepage: "#",
  },

  defaultCollection: {
    name: "CryptoFlow",
    description:
      "At Cryptoflow, we believe that everyone should have the freedom to earn, hold, spend, share, and stake their NFTs - no matter who you are or where you come from.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Our Story",
    subTitle: "Welcome to CryptoFlow",
    description:
      "Today, CrytoFlow is the world leading blockchain ecosystem, with a product suite that includes the largest digital asset exchange. Our mission is to be the infrastructure provider for crypto in tomorrow world.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3],
  },

  ourTeam: {
    title: "Our Founder",
    members: [
      {
        name: "Nishant Gupta",
        role: "Founder of CrpytoFlow",
        img: Placeholder1,
        socials: {
          twitter: "https://x.com/nishant_2253",
        },
      },
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "What is Cryptoflow?",
        description:
          "Cryptoflow is a cutting-edge blockchain startup focused on developing decentralized applications (DApps) for the NFT ecosystem. Our primary offering is an NFT staking platform that allows users to stake their NFTs and earn rewards.",
      },
      {
        title: "What is NFT staking?",
        description:
          "NFT staking involves locking up your non-fungible tokens (NFTs) on our platform to earn rewards, similar to how traditional staking works with cryptocurrencies. By staking your NFTs, you can earn passive income and other benefits.",
      },
      {
        title: "How long do I need to stake my NFTs?",
        description:
          "Staking periods can vary. We offer flexible staking options ranging from short-term (a few days) to long-term (several months). You can choose the duration that best fits your needs.",
      },
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
