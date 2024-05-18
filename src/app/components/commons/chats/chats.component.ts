import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  chats = [
    {
      id: 1,
      sender: "Conversa 1",
      messages: [
        {
          created_at :"2024-03-21 10:14:57",
          message: "mensagem",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "resposta",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "outra",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "teste",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "abacate",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "bem-te-vi",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "roxo",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "roxo",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "banco",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "estratosfera",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "fitoplâncton",
          receiver_id: 1,
          sender_id: 5
        }
      ]
    },
    {
      id: 2,
      sender: "Conversa 2",
      messages: [
        {
          created_at :"2024-03-21 10:14:57",
          message: "mensagem",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "resposta",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "outra",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "teste",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "abacate",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "bem-te-vi",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "roxo",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "roxo",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "banco",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "estratosfera",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton",
          receiver_id: 5,
          sender_id: 1
        }
      ]
    },
    {
      id: 3,
      sender: "Conversa 3",
      messages: [
        {
          created_at :"2024-03-21 10:14:57",
          message: "mensagem",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "resposta",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "outra",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "teste",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "abacate",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "bem-te-vi",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "roxo",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "roxo",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "banco",
          receiver_id: 5,
          sender_id: 1
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "estratosfera",
          receiver_id: 1,
          sender_id: 5
        },
        {
          created_at :"2024-03-21 10:14:57",
          message: "fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton fitoplâncton",
          receiver_id: 5,
          sender_id: 1
        }
      ]
    }
  ]

  selectedChat = this.chats.filter(elem => elem.id == this.chats[0].id);
  isChatListOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
  }

  toggleChatList() {
    this.isChatListOpen = !this.isChatListOpen;
  }

  setSelectedChat(id: number) {
    this.selectedChat = this.chats.filter(elem => elem.id == id);
  }

  getScreenSize() {
    const width = window.innerWidth;

    if (width < 768) {
      this.isChatListOpen = false;
    } else {
      this.isChatListOpen = true;
    }
  }
}
