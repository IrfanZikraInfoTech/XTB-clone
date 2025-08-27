import React from 'react';
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const FloatingChatButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-700 transition">
        <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default FloatingChatButton;
