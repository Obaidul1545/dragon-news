import React from 'react';
import Marquee from 'react-fast-marquee';

const LetestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 py-2 px-3 my-4">
      <p className=" text-base-100 font-semibold py-2 px-3 bg-secondary">
        Letest
      </p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p>
          "The Bangladesh Cricket Board (BCB) has officially released the
          schedule for the upcoming domestic cricket league season. The
          tournament is expected to feature several prominent national and
          emerging cricketers, providing a platform for showcasing talent and
          fostering competition at the domestic level. Fans can look forward to
          an action-packed season with matches played across various venues in
          the country. The league is considered crucial for identifying future
          national team prospects and strengthening the overall cricket
          infrastructure in Bangladesh. Details regarding team compositions and
          broadcast schedules will be announced in the coming days, building
          anticipation for the start of the league."
        </p>
        <p>
          "A talented athlete from Bangladesh has made the nation proud by
          winning a gold medal at a prestigious international athletics
          championship. The athlete's remarkable performance in their respective
          discipline has brought accolades and recognition to Bangladesh in the
          global sporting arena. This achievement is a testament to the
          dedication, hard work, and talent of Bangladeshi athletes and the
          growing standards of sports in the country. The nation celebrates this
          significant victory, which is expected to inspire more young people to
          pursue their dreams in sports. Details about the specific event and
          the athlete's achievement are being widely reported across national
          media, highlighting this moment of national pride."
        </p>
        <p>
          "The Bangladesh Hockey Federation has announced a reshuffle in the
          coaching staff for the national hockey team. A new head coach and
          several assistant coaches have been appointed as the federation aims
          to inject fresh strategies and perspectives into the team's
          preparation for upcoming international competitions. The changes are
          part of a broader effort to elevate the performance of the national
          hockey team and improve their standing in Asian hockey. The newly
          appointed coaching staff brings a wealth of experience and expertise,
          and their tenure is highly anticipated by players and fans alike. The
          federation is optimistic that these changes will lead to positive
          results in future tournaments and contribute to the growth of hockey
          in Bangladesh."
        </p>
      </Marquee>
    </div>
  );
};

export default LetestNews;
