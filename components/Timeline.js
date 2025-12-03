import React from 'react';
import Image from 'next/image';
import styles from '../styles/Timeline.module.css';

const Timeline = ({ dark = false, data }) => {
  const years = Object.keys(data).sort((a, b) => a - b);

  const renderEvents = (events) => {
    const processEventText = (text) => {
      if (text.trim().startsWith('>')) {
        return (
          <span style={{ 
            color: '#ffffffff', 
            fontWeight: '700', 
            fontSize: '1.25em' 
          }}>
            {text.replace(/^>\s*/, '')}
          </span>
        );
      }
      return text;
    };

    if (Array.isArray(events)) {
      return (
        <ul className={styles.eventList}>
          {events.map((event, index) => (
            <li key={index} className={styles.eventItem}>
              {processEventText(event)}
            </li>
          ))}
        </ul>
      );
    }

    if (typeof events === 'object' && !Array.isArray(events)) {
        const eventContent = events.events || events; // Handle nested events object
        if (Array.isArray(eventContent)) {
            return (
                <ul className={styles.eventList}>
                  {eventContent.map((event, index) => (
                    <li key={index} className={styles.eventItem}>
                      {processEventText(event)}
                    </li>
                  ))}
                </ul>
              );
        }

      return (
        <div className={styles.eventDetails}>
          {eventContent.regional && (
            <div className={styles.subSection}>
              <h4>{eventContent.regional.title}</h4>
              {eventContent.regional.awards && <p>{eventContent.regional.awards.join(', ')}</p>}
            </div>
          )}

          {eventContent.world_championship && (
            <div className={styles.subSection}>
              <h4><strong>{`${eventContent.world_championship.division} - ${eventContent.world_championship.result}`}</strong></h4>
              <p><strong>{`World Rank by OPR: ${eventContent.world_championship.ranking.world_rank_by_OPR}`}</strong></p>
              <p><strong>{`Qualifying Seed: ${eventContent.world_championship.ranking.qualifying_seed}`}</strong></p>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
        {years.map((year) => {
            const yearData = data[year];
            const imagePath = yearData.image || '/assets/folsom-bot.jpg';
            const events = yearData.events || yearData;

            return (
            <div key={year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{year}</div>
                <div className={styles.timelineContent}>
                <div className={styles.events}>
                    {renderEvents(events)}
                </div>
                <Image 
                    src={imagePath} 
                    alt={`Juice team robot in ${year}`} 
                    width={300} 
                    height={200} 
                    className={styles.timelineImage} 
                />
                </div>
            </div>
            );
        })}
        </div>
    </div>
  );
};

export default Timeline;