import React from "react";
import styled from "./message.module.css";
import SearchBar from "@/components/search-bar/searchBar";
import Avatar from "@/components/avatar/avatar";
import UserLayout from "@/components/layouts/UserLayout";

const MessagePage = () => {
  const datas = [
    {
      id: 1,
      username: "bapak",
      message: "haii",
    },
    {
      id: 2,
      username: "ibuk",
      message: "what?",
    },
    {
      id: 3,
      username: "lordgent",
      message: "wkkwk",
    },
    {
      id: 4,
      username: "rafelino",
      message: "Assalamualaikum...",
    },
  ];
  return (
    <UserLayout>
       <div className={styled.bodyMessage}>
          <SearchBar />

          <div className={styled.bodyChat}>
            {datas.map((item) => (
              <div className={styled.chatCard} key={item.id}>
                <Avatar
                  initialName={item.username[0].toUpperCase()}
                  size="sm"
                />
                <div>
                  <p>{item.username}</p>
                  <p className={styled.textMessage}>{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </UserLayout>
  );
};

export default MessagePage;
