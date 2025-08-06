🔹 POST /chat
Chat endpoint that takes user input, maintains conversation history, uses background tasks for name/role extraction, and optionally generates a UX report if an email is detected.
🔸 Description
This endpoint allows users to interact with a chatbot. It maintains the chat history in a database, fetches relevant knowledge base context using a retriever, and responds using a language model (LLM). Additionally, it asynchronously extracts user name/role and generates a personalized report if an email is found in the user’s message.

✅ Request Body: ChatRequest
{
  "user_id": "string",
  "user_input": "string"
}

Field
Type
Required
Description
user_id
string
✅
Unique identifier for the user
user_input
string
✅
The latest message from the user


🔁 Response: ChatResponse
{
  "history": [
    { "role": "user", "content": "string" },
    { "role": "assistant", "content": "string" }
  ],
  "bot_message": "string",
  "context": "string"
}

Field
Type
Description
history
List of Message
The full conversation history including the current message
bot_message
string
The most recent response from the assistant
context
string (optional)
Retrieved knowledge base context used to help generate the response


📌 Message Object
{
  "role": "user | assistant",
  "content": "string"
}

Field
Type
Description
role
string
Role of the message sender: user or assistant
content
string
Message content


⚙️ Background Tasks
This endpoint also runs these background tasks:
extract_name_async(conversation, user_id)


extract_role_async(conversation, user_id)


generate_report_async(conversation_text, user_email, user_id)


save_user_conversation_async(user_id, conversation, user_email)



🔍 Functionality Summary
Component
Description
Database Lookup
Retrieves the latest conversation for the user
Conversation Handling
Appends new user and assistant messages
LLM Integration
Composes full prompt and generates a response using llm()
Context Retrieval
Uses retriever.get_relevant_documents() to add knowledge base context
Email Detection
If an email is found, a report is generated asynchronously
Persistence
Saves updated conversation and metadata to the database


📣 Example Request
POST /chat
Content-Type: application/json

{
  "user_id": "user_12345",
  "user_input": "Can you help me improve my UX career?"
}

📥 Example Response
{
  "history": [
    {
      "role": "user",
      "content": "Can you help me improve my UX career?"
    },
    {
      "role": "assistant",
      "content": "Sure! Let's get started by reviewing your current experience..."
    }
  ],
  "bot_message": "Sure! Let's get started by reviewing your current experience...",
  "context": "Relevant knowledge base content..."
}

