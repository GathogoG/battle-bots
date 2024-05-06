import React from 'react';
import BotCard from "../components/BotCard";

// YourBotArmy component definition
const YourBotArmy = (props) => {
  // Map through props.bots to display each bot card
  const displayBots = props.bots.map(bot => (
    <BotCard key={bot.id} bot={bot} action={props.action} removeCard={props.removeCard} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
