import React, { useState, useRef, useEffect } from 'react';
import chatApiService, { getUserId } from '../services/chatApi.js';

const conversation = () => {
  const [stage, setStage] = useState("intro"); // 'intro' or 'chat'
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const chatbotImages = [
    '/assets/chatbot/s2ico1.png',
    '/assets/chatbot/s2ico2.png',
    '/assets/chatbot/s2ico3.png',
  ];
  const chatbotImgIndexRef = useRef(0);

  // Ref for auto-scrolling to bottom
  const chatContainerRef = useRef(null);

  // Initialize user ID on component mount
  useEffect(() => {
    const id = getUserId();
    setUserId(id);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !userId) return;

    const cleanedInput = input
      .split('\n')
      .map(line => line.trim().replace(/\s+/g, ' ')) // remove extra spaces within each line
      .join('\n')                                     // preserve line breaks
      .replace(/\n{3,}/g, '\n\n\n');                  // limit 3 max consecutive line breaks

    // Add user message immediately
    const userMsg = { type: "user", text: cleanedInput };
    setMessages(prev => [...prev, userMsg]);
    
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Call the real API
      const response = await chatApiService.sendMessage(userId, cleanedInput);
      
      // Get current bot image
      const currentBotImg = chatbotImages[chatbotImgIndexRef.current];
      chatbotImgIndexRef.current = (chatbotImgIndexRef.current + 1) % chatbotImages.length;

      // Add bot response
      const aiReply = {
        type: "ai",
        text: response.bot_message,
        image: currentBotImg,
        context: response.context
      };

      setMessages(prev => [...prev, aiReply]);
      
      // Move to chat stage if we're in intro
      if (stage === "intro") {
        setStage("chat");
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setError('Sorry, something went wrong. Please try again.');
      
      // Add error message to chat
      const errorMsg = {
        type: "ai",
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        image: chatbotImages[0]
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };


  return (<>
    {/* h-[calc(100vh-11rem)] */}
    <section className="w-full h-[81.5vh] bg-gray800 relative overflow-hidden">
      <div className="w-[97%] h-full mx-auto bg-white relative  rounded-xl">













        {/* Intro View */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${stage === "intro" ? " pb-10 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            } flex md:w-[90%] mx-auto justify-center items-center px-6`}
        >
          {!isLoading ? (
            <div className="flex max-md:flex-col bg-red500/35 w-full items-center justify-between max-md:justify-center space-x-32 max-md:space-x-10">
              <div className="maxmd:hidden bg-blue500/35 md:w-[27%] flex items-center justify-center">
                <img 
                  src="assets/chatbot/logo.png" 
                  alt="Logo" 
                  className="w-[32rem] max-md:w-[15rem] max-md:pb-10"
                />
              </div>

              <div className="bg-yellow500/35 md:w-[75%] pr-12 space-y-20">
              <h1 className="bg-red500/35 font-juana font-normal text-[5.35rem] max-sm:text-[3.35rem] leading-[1.1] tracking-[0]">
                Let's start with a simple question. What's your name?
              </h1>

              <div className="bg-green500/35 flex items-center w-full bg-UXHQ-white px-6 py-3 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="flex-1 text-2xl min-w-40 font-dmsans placeholder:text-UXHQ-black text-UXHQ-black bg-UXHQ-white bg-red500 outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault(); // optional, avoids form submit
                      handleSend();
                    }
                  }}
                />
                <button onClick={handleSend} disabled={isLoading || !userId} className="relative group w-14 max-md:w-12 h-14 max-md:h-12 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-UXHQ-black border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <>
                      <img
                        className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-opacity duration-200"
                        src="/assets/chatbot/sendbtn1.svg"
                        alt="Send"
                      />
                      <img
                        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        src="/assets/chatbot/sendbtn1-hover.svg"
                        alt="Send Hover"
                      />
                    </>
                  )}
                </button>
              </div>


            </div>
            </div>
          ) : (
            <div className="flex w-full h-full items-center justify-center">
              <img 
                src="assets/chatbot/logo.png" 
                alt="Logo" 
                className="w-[32rem] max-md:w-[15rem] animate-spin-slow"
              />
            </div>
          )}
        </div>

















        {/* Chat View */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${stage === "chat" ? "opacity-100 pointer-events-auto pb-12" : "opacity-0 pointer-events-none"
            } flex flex-col h-full md:w-[70%] mx-auto`}
        >
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto scrollbar-hide px-6 max-md:px-3 py-8 space-y-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`w-full  flex items-start gap-3 ${msg.type === "user" ? "justify-start flex-row-reverse" : "justify-start"
                  }`}
              >
                <img
                  src={
                    msg.type === "user"
                      ? "/assets/chatbot/user.png"
                      : msg.image || "/assets/chatbot/s2ico1.png"
                  }
                  alt="profile"
                  className="w-10 object-cover"
                />
                <div
                  className={`whitespace-pre-line max-w-[70%] text-[1.4rem] max-md:text-[1.2rem] leading-[1.6rem] font-dmsans p-10 max-sm:p-4 mt-4 rounded-b-md  ${msg.type === "user"
                    ? "bg-UXHQ-white rounded-l-md"
                    : "border border-UXHQ-white rounded-r-md"
                    }`}
                >
                  {msg.text}
                </div>

              </div>
            ))}
            
            {/* Typing indicator when loading */}
            {isLoading && (
              <div className="w-full flex items-start gap-3 justify-start">
                <img
                  src="/assets/chatbot/s2ico1.png"
                  alt="profile"
                  className="w-10 object-cover"
                />
                <div className="max-w-[70%] text-[1.4rem] max-md:text-[1.2rem] leading-[1.6rem] font-dmsans p-10 max-sm:p-4 mt-4 rounded-b-md border border-UXHQ-white rounded-r-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-UXHQ-black rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-UXHQ-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-UXHQ-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Error message display */}
            {error && (
              <div className="w-full flex items-start gap-3 justify-start">
                <img
                  src="/assets/chatbot/s2ico1.png"
                  alt="profile"
                  className="w-10 object-cover"
                />
                <div className="max-w-[70%] text-[1.4rem] max-md:text-[1.2rem] leading-[1.6rem] font-dmsans p-10 max-sm:p-4 mt-4 rounded-b-md border border-red-400 rounded-r-md bg-red-50">
                  <div className="text-red-600">{error}</div>
                  <button 
                    onClick={() => setError(null)}
                    className="mt-2 text-sm text-red-500 hover:text-red-700 underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

          </div>

          <div className="w-full px-8 max-md:px-3 py-4 bordert bg-white flex items-center">



            <div className="bg-green500/35 w-full bg-UXHQ-white bg-blue400/60 px-8 py-6 rounded-lg overflow-hidden flex justify-between space-x-8 relative min-h-[7rem]">
              <textarea
                rows={3}
                placeholder="Type your message"
                className="w-[96%] max-md:w-[94%] resize-none text-[1.4rem] max-md:text-[1.5rem] leading-[2rem] font-dmsans placeholder:text-UXHQ-black text-UXHQ-black bg-UXHQ-white bg-red400/50 outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault(); // prevents newline
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !userId}
                className="absolute bottom-3 right-4 group w-10 max-md:w-12 h-10 max-md:h-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-UXHQ-black border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <>
                    <img
                      className="w-full h-full block group-hover:hidden"
                      src="/assets/chatbot/sendbtn2.svg"
                      alt="Send"
                    />
                    <img
                      className="w-full h-full hidden group-hover:block absolute top-0 left-0"
                      src="/assets/chatbot/sendbtn2-hover.svg"
                      alt="Send Hover"
                    />
                  </>
                )}
              </button>
            </div>






          </div>

        </div>






      </div>



    </section>


  </>);
};

export default conversation;
