import { ChatType } from "../types/ChatType";
import { useEffect, useState } from "react";
import client from "../utils/client";
import { gql } from "@apollo/client";

const useChatsQuery = (id: string) => {
  const [chats, setChats] = useState<ChatType[]>([]);

  useEffect(() => {
    client.query({
      query: gql`
        query getChats($id: String!) {
          chats(memberId: $id) {
            id,
            name,
            type,
            members {
              id,
              name,
              avatar
            },
            messages {
              from,
              toGroup,
              toMember,
              createdAt,
              content
            }
          }
        }`,
      variables: { id }
    })
    .then(({ data }) => {
      setChats(data.chats);
    });
  }, []);

  return {
    chats, setChats
  };
};

export default useChatsQuery;
