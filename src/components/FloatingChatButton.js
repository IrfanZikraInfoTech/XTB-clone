import React from 'react';
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const FloatingChatButton = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-700 transition">
        <ChatBubbleLeftRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </div>
    </div>
  );
};

export default FloatingChatButton;
