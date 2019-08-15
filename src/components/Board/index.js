import React, { useState } from 'react'

import prof from '../../imgs/icons8-b-50.png'

import './styles.css'

export default function Board() {
  const [name, setName] = useState('')
  const names = ["Thalyson Sousa", "Natasha Romanoff", "Loki"]
  return (
    <div className="board">
      <div className="contato-b">
        <div className="title-c">
          <span>RECENT</span>
        </div>
        {
          names.map(name => (
            <div className="conts-c" onClick={() => setName(name)}>
              <div className="img">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/cat-profile--v2.png" alt="icon" />
              </div>
              <div className="name">
                <span>{name}</span>
              </div>
              <div className="notif">
                <span></span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="chat-b">

        <div className="title-chat">
          <div className="name-chat">
            <div className="img">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/cat-profile--v2.png" alt="icon" />
            </div>
            <div className="name">
              <span>{name}</span>
            </div>
          </div>
        </div>
        <div className="msgm-chat">

        </div>

        <div className="set-chat">
          <input type="text" placeholder="Mensagem" name="msgm" />
          <button>>>></button>
        </div>
      </div>

    </div>
  );
}
