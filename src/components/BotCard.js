import React from "react";

// Define classes for different bot types
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

// BotCard component definition
const BotCard = ({ bot, action, removeCard }) => {
  // Handler for bot card click
  const handleClick = () => {
    // Alert to indicate bot card click
    alert("Bot card clicked!");
    // Perform action associated with the bot
    action(bot);
  };

  // Handler for discharging a bot
  const handleDischarge = (e) => {
    // Alert to indicate bot discharge
    alert("Bot discharged!");
    // Prevent event propagation to parent elements
    e.stopPropagation();
    // Remove the bot card
    removeCard(bot);
  };

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={handleClick}>
        <div className="image">
          <img alt="Bot Avatar" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              {/* Button to remove the bot */}
              <button className="ui mini red button" onClick={handleDischarge}>
                Remove Bot
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
