import React from 'react';
import BotCard from "../components/BotCard";

// BotCollection component definition
const BotCollection = ({ botCollection, action, removeCard }) => {
  // Map through botCollection to display each BotCard
  const displayBotCards = botCollection.map(bot => (
    <div className="four wide column" key={bot.id}>
      <div className="ui segment">
        <BotCard bot={bot} action={action} removeCard={removeCard} />
      </div>
    </div>
  ));

  return (
    <div className="ui grid">
      <div className="row bot-army-row">
        {displayBotCards.length > 0 ? (
          displayBotCards
        ) : (
          <div className="ui message">There is nothing to display!</div>
        )}
      </div>
    </div>
  );
};

export default BotCollection;
