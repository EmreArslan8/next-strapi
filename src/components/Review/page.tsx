import React, { FC, useCallback, useState, ChangeEvent, FormEvent } from "react";

interface ReviewProps {
  productId: string;
}

const Review: FC<ReviewProps> = ({ productId }) => {
  const [userDisplayName, setUserDisplayName] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      await fetch("http://localhost:1337/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            userDisplayName: userDisplayName,
            body: body,
            product: productId,
          },
        }),
      });

      setUserDisplayName("");
      setBody("");
    },
    [userDisplayName, body, productId]
  );

  const handleUserDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDisplayName(e.currentTarget.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.currentTarget.value);
  };

  return (
    <form
      className="flex flex-col max-w-md gap-4 mt-10"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={userDisplayName}
        onChange={handleUserDisplayNameChange}
        className="bg-gray-100 rounded-md p-4"
      />
      <textarea
        placeholder="Review"
        value={body}
        onChange={handleBodyChange}
        className="bg-gray-100 rounded-md p-4"
      />
      <button
        type="submit"
        className="bg-blue-500 p-4 text-white rounded-md self-start"
      >
        Submit Review
      </button>
    </form>
  );
};

export default Review;