"use client";
"use client";
import Card from "../components/cards";
import React, { useState } from "react";

interface CardData {
  title: string;
  tag: string;
  time: string;
  category: string;
  imgSrc: string;
}

const cardsData: CardData[] = [
  {
    title: "How to deactivate your Instagram account",
    tag: "Instagram",
    time: "32s",
    category: "Social Media",
    imgSrc: "/insta.jpg",
  },
  {
    title: "How to deactivate your Instagram account",
    tag: "Instagram",
    time: "32s",
    category: "Social Media",
    imgSrc: "/insta.jpg",
  },
  {
    title: "How to deactivate your Instagram account",
    tag: "Instagram",
    time: "32s",
    category: "Social Media",
    imgSrc: "/insta.jpg",
  },
  {
    title: "How to deactivate your Instagram account",
    tag: "Instagram",
    time: "32s",
    category: "Social Media",
    imgSrc: "/insta.jpg",
  },
  {
    title: "How to deactivate your Github account",
    tag: "Github",
    time: "32s",
    category: "Social Media",
    imgSrc: "/git.png",
  },
  {
    title: "Enhancing Facebook Privacy Settings",
    tag: "Facebook",
    time: "1m 40s",
    category: "Social Media",
    imgSrc: "/facebook.png",
  },
  {
    title: "Gmail Keyboard Shortcuts for Productivity",
    tag: "Gmail",
    time: "1m 25s",
    category: "Email",
    imgSrc: "/gmail.png",
  },
  {
    title: "YouTube Content Strategy: Growing Your Channel",
    tag: "YouTube",
    time: "2m 45s",
    category: "Video Streaming",
    imgSrc: "/youtube.png",
  },
  {
    title: "WhatsApp Backup and Restore Guide",
    tag: "WhatsApp",
    time: "2m 10s",
    category: "Messaging",
    imgSrc: "/whatsapp.png",
  },
  {
    title: "Twitter Hashtags: Harnessing Their Power",
    tag: "Twitter",
    time: "1m 35s",
    category: "Social Media",
    imgSrc: "/twitter.png",
  },
  {
    title: "Building a Facebook Business Page",
    tag: "Facebook",
    time: "1m 55s",
    category: "Social Media",
    imgSrc: "/facebook.png",
  },
  {
    title: "Effective Email Signatures in Gmail",
    tag: "Gmail",
    time: "1m 30s",
    category: "Email",
    imgSrc: "/gmail.png",
  },
  {
    title: "YouTube Live Streaming: Engaging Your Audience",
    tag: "YouTube",
    time: "3m",
    category: "Video Streaming",
    imgSrc: "/youtube.png",
  },
  {
    title: "WhatsApp Emojis and Stickers Guide",
    tag: "WhatsApp",
    time: "1m 50s",
    category: "Messaging",
    imgSrc: "/whatsapp.png",
  },
  {
    title: "Twitter Marketing Strategies for Businesses",
    tag: "Twitter",
    time: "1m 45s",
    category: "Social Media",
    imgSrc: "/twitter.png",
  },
  {
    title: "Facebook Live: Connecting with Your Audience",
    tag: "Facebook",
    time: "2m 10s",
    category: "Social Media",
    imgSrc: "/facebook.png",
  },
  {
    title: "Managing Gmail Contacts Effectively",
    tag: "Gmail",
    time: "1m 15s",
    category: "Email",
    imgSrc: "/gmail.png",
  },
  {
    title: "YouTube Video Editing Tips and Tricks",
    tag: "YouTube",
    time: "2m 20s",
    category: "Video Streaming",
    imgSrc: "/youtube.png",
  },
  {
    title: "WhatsApp Group Chat Management",
    tag: "WhatsApp",
    time: "2m 5s",
    category: "Messaging",
    imgSrc: "/whatsapp.png",
  },
  {
    title: "Twitter Polls: Engaging Your Followers",
    tag: "Twitter",
    time: "1m 40s",
    category: "Social Media",
    imgSrc: "/twitter.png",
  },
  {
    title: "Facebook Marketplace: Buying and Selling",
    tag: "Facebook",
    time: "1m 50s",
    category: "Social Media",
    imgSrc: "/facebook.png",
  },
  {
    title: "Gmail Security: Protecting Your Email",
    tag: "Gmail",
    time: "1m 25s",
    category: "Email",
    imgSrc: "/gmail.png",
  },
  {
    title: "YouTube Monetization: Ad Revenue",
    tag: "YouTube",
    time: "2m 30s",
    category: "Video Streaming",
    imgSrc: "/youtube.png",
  },
  {
    title: "WhatsApp Voice and Video Calling",
    tag: "WhatsApp",
    time: "2m 15s",
    category: "Messaging",
    imgSrc: "/whatsapp.png",
  },
  {
    title: "Twitter Analytics: Measuring Success",
    tag: "Twitter",
    time: "1m 55s",
    category: "Social Media",
    imgSrc: "/twitter.png",
  },
  {
    title: "How to deactivate your Netflix account",
    tag: "Netflix",
    time: "32s",
    category: "Social Media",
    imgSrc: "/netflix.png",
  },
  {
    title: "Managing Facebook Groups Effectively",
    tag: "Facebook",
    time: "1m 30s",
    category: "Social Media",
    imgSrc: "/facebook.png",
  },
  {
    title: "Organizing Your Inbox in Gmail",
    tag: "Gmail",
    time: "1m 10s",
    category: "Email",
    imgSrc: "/gmail.png",
  },
  {
    title: "YouTube SEO: Boosting Your Video Rankings",
    tag: "YouTube",
    time: "2m 30s",
    category: "Video Streaming",
    imgSrc: "/youtube.png",
  },
  {
    title: "WhatsApp Web: A Comprehensive Guide",
    tag: "WhatsApp",
    time: "1m 45s",
    category: "Messaging",
    imgSrc: "/whatsapp.png",
  },
  {
    title: "Twitter Analytics: Understanding Your Audience",
    tag: "Twitter",
    time: "1m 20s",
    category: "Social Media",
    imgSrc: "/twitter.png",
  },
  {
    title: "Creating Facebook Ads that Convert",
    tag: "Facebook",
    time: "1m 15s",
    category: "Social Media",
    imgSrc: "/facebook.png",
  },
  {
    title: "Advanced Email Filters in Gmail",
    tag: "Gmail",
    time: "1m 5s",
    category: "Email",
    imgSrc: "/gmail.png",
  },
  {
    title: "YouTube Monetization: Earning from Your Channel",
    tag: "YouTube",
    time: "2m 15s",
    category: "Video Streaming",
    imgSrc: "/youtube.png",
  },
  {
    title: "WhatsApp Business: Tips for Small Businesses",
    tag: "WhatsApp",
    time: "1m 30s",
    category: "Messaging",
    imgSrc: "/whatsapp.png",
  },
  {
    title: "Twitter Etiquette: Dos and Don'ts",
    tag: "Twitter",
    time: "1m 10s",
    category: "Social Media",
    imgSrc: "/twitter.png",
  },
  {
    title: "How to deactivate your Instagram account",
    tag: "Instagram",
    time: "32s",
    category: "Social Media",
    imgSrc: "/insta.jpg",
  },
  {
    title: "How to link Debit or Credit Card to your PayPal",
    tag: "Amazon",
    time: "32s",
    category: "E-commerce",
    imgSrc: "/amazon.png",
  },
  {
    title: "How to return an Amazon Package",
    tag: "Amazon",
    time: "32s",
    category: "E-commerce",
    imgSrc: "/amazon.png",
  },
  {
    title: "How to track your Amazon Package",
    tag: "Amazon",
    time: "32s",
    category: "E-commerce",
    imgSrc: "/amazon.png",
  },
];

const CardList: React.FC<{ cards: CardData[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

const Button: React.FC<{
  tag: string;
  onClick: (tag: string) => void;
  active: boolean;
}> = ({ tag, onClick, active }) => (
  <button
    className={`px-4 py-2 rounded-md ${
      active
        ? "bg-transparent text-basic"
        : "bg-transparent  text-gray-400 hover:text-basic"
    }`}
    onClick={() => onClick(tag)}
  >
    {tag}
  </button>
);

const CardsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleButtonClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredCards = cardsData
    .filter((card) => {
      const titleMatch = card.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch = card.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return titleMatch || categoryMatch;
    })
    .filter((card) => !selectedTag || card.tag === selectedTag);

  const uniqueTags = Array.from(new Set(cardsData.map((card) => card.tag)));
  return (
    <div className="container m-auto  px-6 md:px-[1.5rem]">
      <div className="flex flex-col items-center justify-center space-y-4 my-16 ">
        <h1 className="font-bold text-4xl sm:text-10xl">Video Gallery</h1>
        <p className="text-xl text-center sm:text-2xl text-gray-500 dark:text-gray-300 sm:w-[60%]">
          guidde magically creates video documentation with AI. Check out the
          Gallery to see what the guidde team and the guidde community is up to.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  sm:justify-evenly  md:space-x-4">
        <div className="mb-4 flex flex-col items-start ">
          <input
            type="text"
            className=" w-full  p-2 mb-4 border rounded outline-basic"
            placeholder="Search by title or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="md:flex flex-col items-start hidden">
            {uniqueTags.map((tag) => (
              <Button
                key={tag}
                tag={tag}
                onClick={handleButtonClick}
                active={selectedTag === tag}
              />
            ))}
            <span className="border-top border-gray-200 border-[1px] w-full"></span>
            <Button
              tag="All"
              onClick={() => handleButtonClick("")}
              active={!selectedTag}
            />
          </div>
        </div>
        <div className="flex-grow">
          {filteredCards.length > 0 ? (
            <CardList cards={filteredCards} />
          ) : (
            <h1 className="container mx-auto text-center h-full w-full">
              Searched item does not exist
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
