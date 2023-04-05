import React, { useState, useEffect } from "react";

import { MdFavorite } from "react-icons/md";

import useAuthStore from "../store/authStore";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
  const [alredyLiked, setAlredyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();

  const filtredLikes = likes.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filtredLikes?.length > 0) {
      setAlredyLiked(true);
    } else {
      setAlredyLiked(false);
    }
  }, [likes]);

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alredyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#f51997]"
            onClick={handleDislike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4"
            onClick={handleLike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length | 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
