"use client"
import { useState } from 'react';
import SingleActivityCard from '@/components/ui/activity-card';
import useFetch from '@/hooks/use-fetch';
import Header from '@/components/ui/header';

// søge funktionalitet er taget fra et tidligere projekt.
export default function SoegPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: activities, error, loading } = useFetch('activities');

  const filteredActivities = !searchTerm.trim() || !activities
    ? []
    : activities.filter(activity =>
      activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const hasSearched = searchTerm.trim().length > 0;

  return (
    <>
      <Header search={true} onSearch={setSearchTerm} searchTerm={searchTerm} />
      <main className="px-8 pb-30">
        {hasSearched && (
          <>
            {loading && <p>Søger...</p>}
            {!loading && filteredActivities.length > 0 && (
              <ul className="flex flex-col gap-8 py-4">
                {filteredActivities.map((activity, index) => (
                  <SingleActivityCard
                    key={activity.id}
                    activity={activity}
                    priority={index === 0}
                  />
                ))}
              </ul>
            )}
            {!loading && filteredActivities.length === 0 && (
              <p>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p>
            )}
          </>
        )}
      </main>
    </>
  );
}