import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function RandomQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function handleNextQuote() {
    console.log("click");
    fetchData();
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.quotable.io/search/quotes?query=every+good+technology+is+basically+magic&fields=content`
      );
      const data = await res.json();
      console.log("data", data);
      setQuotes(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : quotes.length > 0 ? (
        <div>
          <p>{quotes[currentIndex].content}</p>
          <p>By: {quotes[currentIndex].author}</p>
        </div>
      ) : (
        <p>No Quotes To display</p>
      )}
      <button onClick={handleNextQuote}>Next Quote</button>
    </div>
  );
}

export default RandomQuotes;
