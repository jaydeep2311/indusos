import React, { useEffect, useState } from "react";

const Data = () => {
  var emoji = {
    smiley: "\u{1F600}",
    happy: "\u{1F603}",
    sad: "\u{1F613}",
  };
  const [totaltexts, settotaltexts] = useState([]);
  const showData = async () => {
    console.log("inside the data");
    const res = await fetch("http://localhost:9008/text ");
    const data = await res.json();
    console.log(totaltexts, data);
    settotaltexts([...data]);
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr className="table-dark">All texts</tr>
        </thead>
        <tbody>
          {totaltexts.map((el, i) => {
            var val = el.emojiText;
            var first;
            var last;
            let emottext;
            var index;
            var ourtext;
            if (val.includes("::smiley")) {
              ourtext = "::smiley";
              index = val.indexOf("::smiley");
              first = val.slice(0, index);
              last = val.slice(index + ourtext.length + 1, val.length);
              emottext = emoji.smiley;
              console.log(emottext);
            } else if (val.includes("::sad")) {
              ourtext = "::sad";
              index = val.indexOf("::sad");
              first = val.slice(0, index);
              last = val.slice(index + ourtext.length + 1, val.length);
              emottext = emoji.sad;
              console.log(emottext);
            } else if (val.includes("::happy")) {
              ourtext = "::happy";
              index = val.indexOf("::happy");
              first = val.slice(0, index);
              last = val.slice(index + ourtext.length + 1, val.length);
              emottext = emoji.happy;
              console.log(emottext);
            } else {
              first = val;
              emottext = "";
              last = "";
            }
            return (
              <>
                <tr className="table-dark">
                  <td>{first + " " + emottext + " " + last}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
