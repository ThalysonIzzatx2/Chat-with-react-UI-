import React from 'react'

import prof from '../../imgs/icons8-b-50.png'

import './styles.css'

export default function
  () {

  const names = ["Thalyson Sousa", "Natasha Romanoff", "Loki"]
  return (
    <div className="board">
      <div className="contato-b">
        <div className="title-c">
          <span>RECENT</span>
        </div>
        {
          names.map(name => (
            <div className="conts-c">
              <div className="img">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/cat-profile--v2.png" />
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
              <img src="https://img.icons8.com/ios-glyphs/30/000000/cat-profile--v2.png" />
            </div>
            <div className="name">
              <span>Thalyson Sousa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
