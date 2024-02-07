// PollingApp.jsx
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [options, setOptions] = useState([
    { id: 1, question: 'Which is your favorite color?', options: ['Red', 'Blue', 'Green'], counts: [0, 0, 0], voted: false },
    { id: 2, question: 'What is your preferred programming language?', options: ['JavaScript', 'Python', 'Java'], counts: [0, 0, 0], voted: false },
    { id: 3, question: 'Which type of music do you enjoy the most?', options: ['Rock', 'Pop', 'Hip Hop'], counts: [0, 0, 0], voted: false },
  ]);

  const handleVote = (questionId, optionIndex) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === questionId
          ? {
              ...option,
              counts: option.counts.map((count, index) =>
                index === optionIndex ? count + 1 : count
              ),
              voted: true
            }
          : option
      )
    );
  };

  const handleSubmit = () => {
    // Here you can handle the submission of votes, for example, sending them to a server
    console.log("Votes submitted!");
  };

  return (
    <div className="polling-app">
      <h2>Live Polling App</h2>
      <div className="questions">
        {options.map(option => (
          <div key={option.id} className="question">
            <p>{option.question}</p>
            <div className="options">
              {option.options.map((opt, index) => (
                <div key={index} className="option">
                  <p>{opt}</p>
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      onClick={() => handleVote(option.id, index)}
                      style={{ cursor: "pointer", color: star <= option.counts[index] ? "gold" : "gray" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {option.voted && <p>You have voted!</p>}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit Votes</button>
      </div>
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [options, setOptions] = useState([
    { id: 1, question: 'Which is your favorite color?', options: ['Red', 'Blue', 'Green'], counts: [0, 0, 0], voted: false },
    { id: 2, question: 'What is your preferred programming language?', options: ['JavaScript', 'Python', 'Java'], counts: [0, 0, 0], voted: false },
    { id: 3, question: 'Which type of music do you enjoy the most?', options: ['Rock', 'Pop', 'Hip Hop'], counts: [0, 0, 0], voted: false },
  ]);

  const handleVote = (questionId, optionIndex) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === questionId
          ? {
              ...option,
              counts: option.counts.map((count, index) =>
                index === optionIndex ? count + 1 : 0  // Reset counts for other options
              ),
              voted: true
            }
          : option
      )
    );
  };

  const handleSubmit = () => {
    // Here you can handle the submission of votes, for example, sending them to a server
    console.log("Votes submitted!");
  };

  return (
    <div className="polling-app">
      <h2>Live Polling App</h2>
      <div className="questions">
        {options.map(option => (
          <div key={option.id} className="question">
            <p>{option.question}</p>
            <div className="options">
              {option.options.map((opt, index) => (
                <div key={index} className="option">
                  <p>{opt}</p>
                  <span
                    onClick={() => handleVote(option.id, index)}
                    style={{ cursor: "pointer", color: option.counts[index] > 0 ? "gold" : "gray" }}
                  >
                    ★
                  </span>
                </div>
              ))}
            </div>
            {option.voted && <p>You have voted!</p>}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit Votes</button>
      </div>
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [options, setOptions] = useState([
    { id: 1, question: 'Which is your favorite color?', options: ['Red', 'Blue', 'Green'], selectedOptionIndex: -1, voted: false },
    { id: 2, question: 'What is your preferred programming language?', options: ['JavaScript', 'Python', 'Java'], selectedOptionIndex: -1, voted: false },
    { id: 3, question: 'Which type of music do you enjoy the most?', options: ['Rock', 'Pop', 'Hip Hop'], selectedOptionIndex: -1, voted: false },
  ]);

  const handleVote = (questionId, optionIndex) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === questionId
          ? {
              ...option,
              selectedOptionIndex: option.selectedOptionIndex === optionIndex ? -1 : optionIndex,
              voted: true
            }
          : option
      )
    );
  };

  const handleSubmit = () => {
    // Here you can handle the submission of votes, for example, sending them to a server
    console.log("Votes submitted!");
  };

  return (
    <div className="polling-app">
      <h2>Live Polling App</h2>
      <div className="questions">
        {options.map(option => (
          <div key={option.id} className="question">
            <p>{option.question}</p>
            <div className="options">
              {option.options.map((opt, index) => (
                <div key={index} className="option">
                  <p>{opt}</p>
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      onClick={() => handleVote(option.id, index)}
                      style={{
                        cursor: "pointer",
                        color: option.selectedOptionIndex === index && star <= 5 ? "gold" : "gray"
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {option.voted && <p>You have voted!</p>}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit Votes</button>
      </div>
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [options, setOptions] = useState([
    { id: 1, question: 'Which is your favorite color?', options: ['Red', 'Blue', 'Green'], counts: [0, 0, 0], voted: false },
    { id: 2, question: 'What is your preferred programming language?', options: ['JavaScript', 'Python', 'Java'], counts: [0, 0, 0], voted: false },
    { id: 3, question: 'Which type of music do you enjoy the most?', options: ['Rock', 'Pop', 'Hip Hop'], counts: [0, 0, 0], voted: false },
  ]);

  const handleVote = (questionId, optionIndex) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === questionId
          ? {
              ...option,
              counts: option.counts.map((count, index) =>
                index === optionIndex ? count + 1 : count
              ),
              voted: true
            }
          : option
      )
    );
  };

  const getWinner = (option) => {
    const maxCount = Math.max(...option.counts);
    return option.options.filter((_, index) => option.counts[index] === maxCount);
  };

  const handleSubmit = () => {
    // Here you can handle the submission of votes, for example, sending them to a server
    console.log("Votes submitted!");
  };

  return (
    <div className="polling-app">
      <h2>Live Polling App</h2>
      <div className="questions">
        {options.map(option => (
          <div key={option.id} className="question">
            <p>{option.question}</p>
            <div className="options">
              {option.options.map((opt, index) => (
                <div key={index} className="option">
                  <p>{opt}</p>
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      onClick={() => handleVote(option.id, index)}
                      style={{ cursor: "pointer", color: star <= option.counts[index] ? "gold" : "gray" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {option.voted && <p>You have voted!</p>}
            <p>Winner: {getWinner(option).join(', ')}</p> {/* Display the winner */
          /*</div>
        ))}
        <button onClick={handleSubmit}>Submit Votes</button>
      </div>
    </div>
  );
};

export default Home;*/
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [options, setOptions] = useState([
    { id: 1, question: 'Which is your favorite color?', options: ['Red', 'Blue', 'Green'], counts: [0, 0, 0], voted: false },
    { id: 2, question: 'What is your preferred programming language?', options: ['JavaScript', 'Python', 'Java'], counts: [0, 0, 0], voted: false },
    { id: 3, question: 'Which type of music do you enjoy the most?', options: ['Rock', 'Pop', 'Hip Hop'], counts: [0, 0, 0], voted: false },
  ]);

  const handleVote = (questionId, optionIndex) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === questionId
          ? {
              ...option,
              counts: option.counts.map((count, index) =>
                index === optionIndex ? count + 1 : count
              ),
              voted: true
            }
          : option
      )
    );
  };

  const getWinner = (option) => {
    const maxCount = Math.max(...option.counts);
    const winningOptions = option.options.filter((_, index) => option.counts[index] === maxCount);
    return { winningOptions, maxCount };
  };

  const handleSubmit = () => {
    // Here you can handle the submission of votes, for example, sending them to a server
    console.log("Votes submitted!");
  };

  return (
    <div className="polling-app">
      <h2>Live Polling App</h2>
      <div className="questions">
        {options.map(option => (
          <div key={option.id} className="question">
            <p>{option.question}</p>
            <div className="options">
              {option.options.map((opt, index) => (
                <div key={index} className="option">
                  <p>{opt}</p>
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      onClick={() => handleVote(option.id, index)}
                      style={{ cursor: "pointer", color: star <= option.counts[index] ? "gold" : "gray" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {option.voted && <p>You have voted!</p>}
            {option.voted && (
              <p>
                Winner(s): {getWinner(option).winningOptions.join(', ')} (with {getWinner(option).maxCount} vote(s))
              </p>
            )}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit Votes</button>
      </div>
    </div>
  );
};

export default Home;


