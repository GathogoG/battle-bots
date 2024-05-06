import React from "react";

// Mapping of bot classes to corresponding icon classes
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

// BotSpecs component definition
const BotSpecs = ({ bot, back, enlist }) => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          {/* Bot Avatar */}
          <div className="four wide column">
            <img
              alt="Bot Avatar"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          {/* Bot Details */}
          <div className="four wide column">
            {/* Bot Name */}
            <h2>Name: {bot.name}</h2>
            {/* Bot Catchphrase */}
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            {/* Bot Class */}
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            {/* Bot Stats */}
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    {/* Bot Health */}
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    {/* Bot Damage */}
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    {/* Bot Armor */}
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            {/* Button to go back */}
            <button className="ui button fluid" onClick={back}>
              Go Back
            </button>
            {/* Button to enlist the bot */}
            <button className="ui button fluid" onClick={() => enlist(bot)}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
